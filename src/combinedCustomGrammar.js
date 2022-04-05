"use strict";

import { arrayUtilities } from "necessary";

import defaultCustomGrammar from "./defaultCustomGrammar";

import { EMPTY_STRING } from "./constants";
import { rulesFromBNF } from "./utilities/rules";
import { findRuleByRuleName } from "./utilities/ruleName";
import { lexicalPatternsFromCustomGrammars, bnfsFromRuleNameAndCustomGrammars } from "./utilities/customGrammars";
import { TERM_RULE_NAME, EXPRESSION_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME } from "./ruleNames";

const { filter, unshift } = arrayUtilities;

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
  const lexicalPatterns = lexicalPatternsFromCustomGrammars(customGrammars),
        defaultCustomGrammarLexicalPattern = defaultCustomGrammar.getLexicalPattern(),
        defaultLexicalPattern = defaultCustomGrammarLexicalPattern; ///

  lexicalPatterns.reverse();

  lexicalPatterns.push(defaultLexicalPattern);

  filter(lexicalPatterns, (lexicalPattern) => {
    if (lexicalPattern !== EMPTY_STRING) {
      return true;
    }
  });

  const lexicalPatternsString = lexicalPatterns.join("|"), ///
        lexicalPattern = `^(?:${lexicalPatternsString})`;

  return lexicalPattern;
}

function remainingRulesFromRulesAndMainRule(rules, mainRule) {
  const remainingRules = rules.filter((rule) => {
    if (rule !== mainRule) {
      return true;
    }
  });

  return remainingRules;
}

function mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs) {
  const defaultCustomGrammarBNF = defaultCustomGrammar.getBNF(ruleName),
        defaultBNF = defaultCustomGrammarBNF, ///
        defaultRules = rulesFromBNF(defaultBNF),
        defaultMainRule = findRuleByRuleName(ruleName, defaultRules),
        defaultMainRuleDefinitions = defaultMainRule.getDefinitions();

  bnfs.forEach((bnf) => {
    const rules = rulesFromBNF(bnf),
          mainRule = findRuleByRuleName(ruleName, rules),
          mainRuleDefinitions = (mainRule !== null) ?
                                  mainRule.getDefinitions() :
                                    [];

    unshift(defaultMainRuleDefinitions, mainRuleDefinitions);
  });

  const mainRule = defaultMainRule; ///

  return mainRule;
}

function remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs) {
  const defaultCustomGrammarBNF = defaultCustomGrammar.getBNF(ruleName),
        defaultBNF = defaultCustomGrammarBNF, ///
        defaultRules = rulesFromBNF(defaultBNF),
        defaultMainRule = findRuleByRuleName(ruleName, defaultRules),
        defaultRemainingRules = remainingRulesFromRulesAndMainRule(defaultRules, defaultMainRule);

  bnfs.forEach((bnf) => {
    const rules = rulesFromBNF(bnf),
          mainRule = findRuleByRuleName(ruleName, rules),
          remainingRules = remainingRulesFromRulesAndMainRule(rules, mainRule);

    unshift(defaultRemainingRules, remainingRules);
  });

  const remainingRules = defaultRemainingRules; ///

  return remainingRules;
}

function rulesFromRuleNameCustomGrammarsAndDefaultBNF(ruleName, customGrammars) {
  const bnfs = bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars),
        mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs),
        remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs),
        rules = [].concat(mainRule).concat(remainingRules);

  return rules;
}
