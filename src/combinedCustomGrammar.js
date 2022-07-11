"use strict";

import { rulesUtilities } from "occam-grammar-utilities";

import defaultCustomGrammar from "./defaultCustomGrammar";

import { EMPTY_STRING } from "./constants";

const { rulesFromBNF } = rulesUtilities;

export default class CombinedCustomGrammar {
  constructor(lexicalPattern, rules) {
    this.lexicalPattern = lexicalPattern;
    this.rules = rules;
  }
  
  getLexicalPattern() {
    return this.lexicalPattern;
  }

  getRules() {
    return this.rules;
  }

  static fromCustomGrammars(customGrammars) {
    const lexicalPattern = lexicalPatternFromCustomGrammars(customGrammars),
          rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, rules);
    
    return combinedCustomGrammar;
  }
}

function lexicalPatternFromCustomGrammars(customGrammars) {
  customGrammars = [ defaultCustomGrammar, ...customGrammars ]; ///

  const lexicalPatterns = customGrammars.reduce((lexicalPatterns, customGrammar) => {
          const lexicalPattern = customGrammar.getLexicalPattern();

          if (lexicalPattern) {  ///
            lexicalPatterns.push(lexicalPattern);
          }

          return lexicalPatterns;
        }, []);

  lexicalPatterns.reverse();

  const lexicalPatternsString = lexicalPatterns.join("|"), ///
        lexicalPattern = `^(?:${lexicalPatternsString})`;

  return lexicalPattern;
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
