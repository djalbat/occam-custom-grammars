"use strict";

import { arrayUtilities } from "necessary";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import defaultCustomGrammar from "../customGrammar/default";

import { EMPTY_STRING, VERTICAL_BAR } from "../constants";
import { TYPE_PATTERN_NAME, SYMBOL_PATTERN_NAME } from "../patternNames";

const { rulesFromBNF } = parserUtilities,
      { unshift, backwardsForEach } = arrayUtilities;

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

  postProcess(rules) {
    rules = [ ///
      ...rules,
      ...this.rules
    ];

    rules = eliminateLeftRecursion(rules);  ///

    return rules;
  }

  static fromNothing(includeDefault = true) {
    let customGrammars = [];

    if (includeDefault) {
      customGrammars = [ defaultCustomGrammar, ...customGrammars ]; ///
    }

    const rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          entries = entriesFromCustomGrammars(customGrammars),
          combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);

    return combinedCustomGrammar;
  }

  static fromCustomGrammars(customGrammars, includeDefault = true) {
    if (includeDefault) {
      customGrammars = [ defaultCustomGrammar, ...customGrammars ]; ///
    }

    const rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          entries = entriesFromCustomGrammars(customGrammars),
          combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
    
    return combinedCustomGrammar;
  }
}

function rulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
  const bnfs = customGrammars.map((customGrammar) => {
          const bnf = customGrammar.getBNF();

          return bnf;
        }),
        bnf = bnfs.join(EMPTY_STRING),
        rules = rulesFromBNF(bnf);

  combineRules(rules)

  return rules;
}

function entriesFromCustomGrammars(customGrammars) {
  const patternNames = [
          TYPE_PATTERN_NAME,
          SYMBOL_PATTERN_NAME
        ],
        entries = patternNames.map((patternName) => {
          const entry = entryFromCustomGrammars(customGrammars, patternName);

          return entry;
        });

  return entries;
}

function entryFromCustomGrammars(customGrammars, patternName) {
  const patterns = [];

  backwardsForEach(customGrammars, (customGrammar) => {
    const pattern = customGrammar.getPattern(patternName);

    if ((pattern !== null) && (pattern !== EMPTY_STRING)) {
      const subPatterns = pattern.split(VERTICAL_BAR);

      subPatterns.forEach((subPattern) => {
        const pattern = (patternName === TYPE_PATTERN_NAME) ?
                          `${subPattern}(?!\\w)` :
                             subPattern; ///

        patterns.push(pattern);
      });
    }
  });

  const patternsString = patterns.join(VERTICAL_BAR),
        entryName = patternName,  ///
        entryValue = `^(?:${patternsString})`,
        entry = {
          [entryName]: entryValue
        };

  return entry;
}

function combineRules(rules) {
  let outerIndex = 0,
      length = rules.length;

  while (outerIndex < length) {
    const outerRule = rules[outerIndex],
          outerRuleName = outerRule.getName();

    let innerIndex = outerIndex + 1;

    while (innerIndex < length) {
      const innerRule = rules[innerIndex],
            innerRuleName = innerRule.getName();

      if (innerRuleName === outerRuleName) {
        const innerRuleDefinitions = innerRule.getDefinitions(),
              outerRuleDefinitions = outerRule.getDefinitions();

        unshift(outerRuleDefinitions, innerRuleDefinitions);

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
