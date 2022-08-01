"use strict";

import { parserUtilities } from "occam-grammar-utilities";

import defaultCustomGrammar from "./defaultCustomGrammar";

import { EMPTY_STRING, VERTICAL_BAR } from "./constants";
import { TYPE_PATTERN_NAME, OPERATOR_PATTERN_NAME } from "./patternNames";

const { rulesFromBNF } = parserUtilities;

export default class CombinedCustomGrammar {
  constructor(rules, patternMap) {
    this.rules = rules;
    this.patternMap = patternMap;
  }
  
  getRules() {
    return this.rules;
  }

  getPatternMap() {
    return this.patternMap;
  }

  static fromCustomGrammars(customGrammars) {
    const rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          patternMap = patternMapFromCustomGrammars(customGrammars),
          combinedCustomGrammar = new CombinedCustomGrammar(rules, patternMap);
    
    return combinedCustomGrammar;
  }
}

function patternFromCustomGrammars(customGrammars, patternName) {
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
        pattern = `^(?:${patternsString})`;

  return pattern;
}

function patternMapFromCustomGrammars(customGrammars) {
  const patternNames = [
          TYPE_PATTERN_NAME,
          OPERATOR_PATTERN_NAME
        ],
        patternMap = patternNames.reduce((patternMap, patternName) => {
          const pattern = patternFromCustomGrammars(customGrammars, patternName);

          patternMap[patternName] = pattern;

          return patternMap;
        }, {});

  return patternMap;
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
