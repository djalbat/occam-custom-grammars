"use strict";

import { arrayUtilities } from "necessary";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { termDefaultCustomGrammarBNF as termDefaultBNF,
         statementDefaultCustomGrammarBNF as statementDefaultBNF,
         expressionDefaultCustomGrammarBNF as expressionDefaultBNF,
         metastatementDefaultCustomGrammarBNF as metastatementDefaultBNF } from "occam-parsers";
import { defaultCustomGrammarLexicalPattern as defaultLexicalPattern } from "occam-lexers";

import { rulesFromBNF } from "./utilities/rules";
import { findRuleByRuleName } from "./utilities/ruleName";
import { lexicalPatternsFromCustomGrammars, bnfsFromRuleNameAndCustomGrammars } from "./utilities/customGrammars";

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
  const lexicalPatterns = lexicalPatternsFromCustomGrammars(customGrammars);

  lexicalPatterns.unshift(defaultLexicalPattern);

  const lexicalPatternsString = lexicalPatterns.reverse().join("|"), ///
        lexicalPattern = `^(?:${lexicalPatternsString})`;

  return lexicalPattern;
}

function rulesFromCustomGrammars(customGrammars) {
  const metastatementRuleName = "metastatement",
        statementRuleName = "statement",
        expressionRuleName = "expression",
        termRuleName = "term",
        metastatementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(metastatementRuleName, customGrammars, metastatementDefaultBNF),
        statementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(statementRuleName, customGrammars, statementDefaultBNF),
        expressionRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(expressionRuleName, customGrammars, expressionDefaultBNF),
        termRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(termRuleName, customGrammars, termDefaultBNF),
        rules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules);

  return rules;
}

function addStartRule(rules) {
  const startRulesBNF = " start ::= metastatement | statement | expression | term ; ",
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

function mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs) {
  const defaultRules = rulesFromBNF(defaultBNF),
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

function remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs) {
  const defaultRules = rulesFromBNF(defaultBNF),
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

function rulesFromRuleNameCustomGrammarsAndDefaultBNF(ruleName, customGrammars, defaultBNF) {
  const bnfs = bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars),
        mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        rules = [].concat(mainRule).concat(remainingRules);

  return rules;
}
