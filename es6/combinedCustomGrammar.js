"use strict";

import { arrayUtilities } from "necessary";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import defaultCustomGrammar from "./defaultCustomGrammar";

import { rulesFromBNF } from "./utilities/rules";
import { findRuleByRuleName } from "./utilities/ruleName";
import { lexicalPatternsFromCustomGrammars, bnfsFromRuleNameAndCustomGrammars } from "./utilities/customGrammars";
import { START_RULE_NAME, TERM_RULE_NAME, EXPRESSION_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME } from "./constants";

const { first, filter, unshift } = arrayUtilities;

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
          rules = rulesFromCustomGrammars(customGrammars);

    addStartRule(rules);

    eliminateLeftRecursion(rules);

    removeStartRule(rules);

    const combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, rules);
    
    return combinedCustomGrammar;
  }
}

function lexicalPatternFromCustomGrammars(customGrammars) {
  const lexicalPatterns = lexicalPatternsFromCustomGrammars(customGrammars),
        defaultCustomGrammarLexicalPattern = defaultCustomGrammar.getLexicalPattern(),
        defaultLexicalPattern = defaultCustomGrammarLexicalPattern; ///

  lexicalPatterns.unshift(defaultLexicalPattern);

  const lexicalPatternsString = lexicalPatterns.reverse().join("|"), ///
        lexicalPattern = `^(?:${lexicalPatternsString})`;

  return lexicalPattern;
}

function rulesFromCustomGrammars(customGrammars) {
  const metastatementRuleName = METASTATEMENT_RULE_NAME,  ///
        statementRuleName = STATEMENT_RULE_NAME,  ///
        expressionRuleName = EXPRESSION_RULE_NAME,  ///
        termRuleName = TERM_RULE_NAME,  ///
        metastatementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(metastatementRuleName, customGrammars),
        statementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(statementRuleName, customGrammars),
        expressionRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(expressionRuleName, customGrammars),
        termRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(termRuleName, customGrammars),
        rules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules);

  return rules;
}

function addStartRule(rules) {
  const startRulesBNF = ` ${START_RULE_NAME} ::= ${METASTATEMENT_RULE_NAME} | ${STATEMENT_RULE_NAME} | ${EXPRESSION_RULE_NAME} | ${TERM_RULE_NAME} ; `,
        startRules = rulesFromBNF(startRulesBNF),
        firstStartRule = first(startRules),
        startRule = firstStartRule; ///

  rules.unshift(startRule);
}

function removeStartRule(rules) {
  const firstRule = first(rules),
        startRule = firstRule;  ///

  filter(rules, (rule) => {
    if (rule !== startRule) {
      return true;
    }
  });
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
