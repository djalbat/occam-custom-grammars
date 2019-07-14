'use strict';

const parsers = require('occam-parsers'), ///
      necessary = require('necessary'),
      grammarUtilities = require('occam-grammar-utilities');  ///

const rulesUtilities = require('./utilities/rules'),
      ruleNameUtilities = require('./utilities/ruleName'),
      customGrammarsUtilities = require('./utilities/customGrammars');

const { rulesFromBNF } = rulesUtilities,
      { arrayUtilities } = necessary,
      { unshift } = arrayUtilities,
      { findRuleByRuleName } = ruleNameUtilities,
      { eliminateImplicitLeftRecursion } = grammarUtilities,
      { lexicalPatternsFromCustomGrammars, bnfsFromRuleNameAndCustomGrammars } = customGrammarsUtilities,
      { termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF } = parsers;

class CombinedCustomGrammars {
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
    const combinedLexicalPattern = combinedLexicalPatternFromCustomGrammars(customGrammars),
          combinedRules = combinedRulesFromCustomGrammars(customGrammars),
          lexicalPattern = combinedLexicalPattern,  ///
          rules = combinedRules,  ///
          combinedCustomGrammars = new CombinedCustomGrammars(lexicalPattern, rules);
    
    return combinedCustomGrammars;
  }
}

module.exports = CombinedCustomGrammars;

function combinedLexicalPatternFromCustomGrammars(customGrammars) {
  const lexicalPatterns = lexicalPatternsFromCustomGrammars(customGrammars),
        combinedLexicalPattern = lexicalPatterns.reverse().join('|'); ///

  return combinedLexicalPattern;
}

function combinedRulesFromCustomGrammars(customGrammars) {
  const metastatementRuleName = 'metastatement',
        statementRuleName = 'statement',
        expressionRuleName = 'expression',
        termRuleName = 'term',
        metastatementRules = rulesFromRuleNameCustomGrammarsAndDefaultCustomGrammarBNF(metastatementRuleName, customGrammars, metastatementDefaultCustomGrammarBNF),
        statementRules = rulesFromRuleNameCustomGrammarsAndDefaultCustomGrammarBNF(statementRuleName, customGrammars, statementDefaultCustomGrammarBNF),
        expressionRules = rulesFromRuleNameCustomGrammarsAndDefaultCustomGrammarBNF(expressionRuleName, customGrammars, expressionDefaultCustomGrammarBNF),
        termRules = rulesFromRuleNameCustomGrammarsAndDefaultCustomGrammarBNF(termRuleName, customGrammars, termDefaultCustomGrammarBNF),
        combinedRules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules);

  return combinedRules;
}

function rulesFromRuleNameCustomGrammarsAndDefaultCustomGrammarBNF(ruleName, customGrammars, defaultCustomGrammarBNF) {
  const defaultBNF = defaultCustomGrammarBNF, ///
        bnfs = bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars),
        mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs);

  let rules;

  rules = [].concat(mainRule).concat(remainingRules);

  rules = eliminateImplicitLeftRecursion(rules);

  return rules;
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
