'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      necessary = require('necessary'),
      grammarUtilities = require('occam-grammar-utilities');

const rulesUtilities = require('./utilities/rules'),
      ruleNameUtilities = require('./utilities/ruleName'),
      customGrammarsUtilities = require('./utilities/customGrammars');

const { rulesFromBNF } = rulesUtilities,
      { arrayUtilities } = necessary,
      { findRuleByRuleName } = ruleNameUtilities,
      { defaultLexicalPattern } = lexers,
      { eliminateLeftRecursion } = grammarUtilities,
      { first, filter, unshift } = arrayUtilities,
      { lexicalPatternsFromCustomGrammars, bnfsFromRuleNameAndCustomGrammars } = customGrammarsUtilities,
      { termDefaultBNF, statementDefaultBNF, expressionDefaultBNF, metastatementDefaultBNF } = parsers;

class CombinedCustomGrammar {
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

module.exports = CombinedCustomGrammar;

function lexicalPatternFromCustomGrammars(customGrammars) {
  const lexicalPatterns = lexicalPatternsFromCustomGrammars(customGrammars);

  lexicalPatterns.unshift(defaultLexicalPattern);

  const lexicalPattern = lexicalPatterns.reverse().join('|'); ///

  return lexicalPattern;
}

function rulesFromCustomGrammars(customGrammars) {
  const metastatementRuleName = 'metastatement',
        statementRuleName = 'statement',
        expressionRuleName = 'expression',
        termRuleName = 'term',
        metastatementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(metastatementRuleName, customGrammars, metastatementDefaultBNF),
        statementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(statementRuleName, customGrammars, statementDefaultBNF),
        expressionRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(expressionRuleName, customGrammars, expressionDefaultBNF),
        termRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(termRuleName, customGrammars, termDefaultBNF),
        rules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules);

  return rules;
}

function addStartRule(rules) {
  const startRulesBNF = ' start ::= metastatement | statement | expression | term ; ',
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
  const remainingRules = rules.filter(function(rule) {
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

  bnfs.forEach(function(bnf) {
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

  bnfs.forEach(function(bnf) {
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
