"use strict";

import { parserUtilities } from "occam-grammar-utilities";

import defaultCustomGrammar from "./defaultCustomGrammar";

import { EMPTY_STRING, VERTICAL_BAR } from "./constants";
import { TYPE_PATTERN_NAME, OPERATOR_PATTERN_NAME } from "./patternNames";

const { rulesFromBNF } = parserUtilities;

export default class CombinedCustomGrammar {
  constructor(rules, entries) {
    this.rules = rules;
    this.entries = entries;
  }
  
  getRules() {
    return this.rules;
  }

  getEntries() {
    return this.entries;
  }

  static fromCustomGrammars(customGrammars) {
    const rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          entries = entriesFromCustomGrammars(customGrammars),
          combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
    
    return combinedCustomGrammar;
  }
}

function entryFromCustomGrammars(customGrammars, patternName) {
  customGrammars = [ defaultCustomGrammar, ...customGrammars ]; ///

  const patterns = customGrammars.reduce((patterns, customGrammar) => {
    const pattern = customGrammar.getPattern(patternName);

    if (pattern) {  ///
      patterns.push(pattern);
    }

    return patterns;
  }, []);

  patterns.reverse();

  const patternsString = patterns.join(VERTICAL_BAR), ///
        pattern = `^(?:${patternsString})\b`;

  const entry = {};

  entry[patternName] = pattern;

  return entry;
}

function entriesFromCustomGrammars(customGrammars) {
  const patternNames = [
          TYPE_PATTERN_NAME,
          OPERATOR_PATTERN_NAME
        ],
        entries = patternNames.map((patternName) => {
          const entry = entryFromCustomGrammars(customGrammars, patternName);

          return entry;
       });

  return entries;
}

function rulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
  customGrammars = [ defaultCustomGrammar, ...customGrammars ]; ///

  const bnfs = customGrammars.map((customGrammar) => {
          const bnf = customGrammar.getBNF();

          return bnf;
        }),
        bnf = bnfs.join(EMPTY_STRING),
        rules = rulesFromBNF(bnf);

  combineRules(rules)

  return rules;
}

function combineRules(rules) {
  let outerIndex = 0,
      length = rules.length;

  while (outerIndex < length) {
    const outerRule = rules[outerIndex],
          outerRuleName = outerRule.getName();

    let outerRuleDefinitions = outerRule.getDefinitions();

    let innerIndex = outerIndex + 1;

    while (innerIndex < length) {
      const innerRule = rules[innerIndex],
            innerRuleName = innerRule.getName();

      if (innerRuleName === outerRuleName) {
        const innerRuleDefinitions = innerRule.getDefinitions();

        outerRuleDefinitions = [  ///
          ...innerRuleDefinitions,
          ...outerRuleDefinitions
        ];

        outerRule.replaceAllDefinitions(...outerRuleDefinitions);

        const start = innerIndex, ///
              deleteCount = 1;

        rules.splice(start, deleteCount);

        length = rules.length;
      } else {
        innerIndex++;
      }
    }

    outerIndex++;

    length = rules.length;
  }
}
