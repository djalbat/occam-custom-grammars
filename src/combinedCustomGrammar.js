"use strict";

import { parserUtilities } from "occam-grammar-utilities";

import defaultCustomGrammar from "./defaultCustomGrammar";

import { EMPTY_STRING } from "./constants";
import { TERM_RULE_NAME, EXPRESSION_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME } from "./ruleNames";

const { rulesFromBNF } = parserUtilities;

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
    const metastatementRules = metastatementRulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          statementRules = statementRulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          expressionRules = expressionRulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          termRules = termRulesFromCustomGrammarsAndDefaultBNF(customGrammars),
          lexicalPattern = lexicalPatternFromCustomGrammars(customGrammars),
          rules = [
            ...metastatementRules,
            ...statementRules,
            ...expressionRules,
            ...termRules
          ];

    const combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, rules);
    
    return combinedCustomGrammar;
  }
}

function metastatementRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
  const metastatementRuleName = METASTATEMENT_RULE_NAME,  ///
        metastatementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(metastatementRuleName, customGrammars);

  return metastatementRules;
}

function statementRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
  const statementRuleName = STATEMENT_RULE_NAME,  ///
        statementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(statementRuleName, customGrammars);

  return statementRules;
}

function expressionRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
  const expressionRuleName = EXPRESSION_RULE_NAME,  ///
        expressionRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(expressionRuleName, customGrammars);

  return expressionRules;
}

function termRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
  const termRuleName = TERM_RULE_NAME,  ///
        termRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(termRuleName, customGrammars);

  return termRules;
}

function lexicalPatternFromCustomGrammars(customGrammars) {
  const lexicalPatterns = customGrammars.reduce((lexicalPatterns, customGrammar) => {
          const lexicalPattern = customGrammar.getLexicalPattern();

          if (lexicalPattern !== EMPTY_STRING) {
            lexicalPatterns.push(lexicalPattern);
          }

          return lexicalPatterns;
        }, []),
        defaultCustomGrammarLexicalPattern = defaultCustomGrammar.getLexicalPattern();

  lexicalPatterns.unshift(defaultCustomGrammarLexicalPattern);

  lexicalPatterns.reverse();

  const lexicalPatternsString = lexicalPatterns.join("|"), ///
        lexicalPattern = `^(?:${lexicalPatternsString})`;

  return lexicalPattern;
}

function rulesFromRuleNameCustomGrammarsAndDefaultBNF(ruleName, customGrammars) {
  const bnfs = customGrammars.reduce((bnfs, customGrammar) => {
          const bnf = customGrammar.getBNF(ruleName);

          if (bnf !== EMPTY_STRING) {
            bnfs.push(bnf);
          }

          return bnfs;
        }, []),
        defaultCustomGrammarBNF = defaultCustomGrammar.getBNF(ruleName);

  bnfs.unshift(defaultCustomGrammarBNF);

  const bnf = bnfs.join(EMPTY_STRING),
        rules = rulesFromBNF(bnf);

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

        outerRuleDefinitions = [
          ...innerRuleDefinitions,
          ...outerRuleDefinitions
        ];

        outerRule.setDefinitions(outerRuleDefinitions);

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

  return rules;
}
