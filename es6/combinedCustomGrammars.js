'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary'),
      grammarUtilities = require('occam-grammar-utilities');

const ruleUtilities = require('./utilities/rule');

const { arrayUtilities } = necessary,
      { unshift } = arrayUtilities,
      { findRuleByName } = ruleUtilities,
      { eliminateCycles, eliminateLeftRecursion } = grammarUtilities,
      { BasicParser, termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF } = parsers;

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
  const termDefaultBNF = termDefaultCustomGrammarBNF, ///
        statementDefaultBNF = statementDefaultCustomGrammarBNF, ///
        expressionDefaultBNF = expressionDefaultCustomGrammarBNF, ///
        metastatementDefaultBNF = metastatementDefaultCustomGrammarBNF, ///
        termBNFs = bnfsFromCustomGrammars('term', customGrammars),
        statementBNFs = bnfsFromCustomGrammars('statement', customGrammars),
        expressionBNFs = bnfsFromCustomGrammars('expression', customGrammars),
        metastatementBNFs = bnfsFromCustomGrammars('metastatement', customGrammars),
        termRules = rulesFromBNFs('term', termDefaultBNF, termBNFs),
        statementRules = rulesFromBNFs('statement', statementDefaultBNF, statementBNFs),
        expressionRules = rulesFromBNFs('expression', expressionDefaultBNF, expressionBNFs),
        metastatementRules = rulesFromBNFs('metastatement', metastatementDefaultBNF, metastatementBNFs),
        combinedRules = [].concat(termRules).concat(expressionRules).concat(statementRules).concat(metastatementRules); ///

  return combinedRules;
}

function lexicalPatternsFromCustomGrammars(customGrammars) {
  const lexicalPatterns = customGrammars.reduce(function(lexicalPatterns, customGrammar) {
    const lexicalPattern = customGrammar.getLexicalPattern();

    if (lexicalPattern !== null) {
      lexicalPatterns.push(lexicalPattern);
    }

    return lexicalPatterns;
  }, []);

  return lexicalPatterns;
}

function bnfsFromCustomGrammars(ruleName, customGrammars) {
  const bnfs = customGrammars.reduce(function(bnfs, customGrammar) {
    const bnf = customGrammar.getBNF(ruleName);

    if (bnf !== null) {
      bnfs.push(bnf);
    }

    return bnfs;
  }, []);

  return bnfs;
}

function rulesFromBNFs(ruleName, defaultBNF, bnfs) {
  const defaultRules = rulesFromBNF(defaultBNF),
        defaultMainRule = mainRuleFromRulesAndRuleName(defaultRules, ruleName),
        defaultOtherRules = otherRulesFromRulesAndMainRule(defaultRules, defaultMainRule),
        defaultMainRuleDefinitions = defaultMainRule.getDefinitions();

  bnfs.forEach(function(bnf) {
    const rules = rulesFromBNF(bnf),
          mainRule = mainRuleFromRulesAndRuleName(rules, ruleName),
          otherRules = otherRulesFromRulesAndMainRule(rules, mainRule),
          mainRuleDefinitions = (mainRule !== null) ?
                                  mainRule.getDefinitions() :
                                    [];

    unshift(defaultOtherRules, otherRules);

    unshift(defaultMainRuleDefinitions, mainRuleDefinitions);
  });

  const mainRule = defaultMainRule, ///
        otherRules = defaultOtherRules; ///

  let rules = [].concat(otherRules).concat(mainRule);

  rules = eliminateCycles(rules); ///

  rules = eliminateLeftRecursion(rules);  ///

  return rules;
}

function rulesFromBNF(bnf) {
  const basicParser = BasicParser.fromBNF(bnf),
        rules = basicParser.getRules();

  return rules;
}

function mainRuleFromRulesAndRuleName(rules, ruleName) {
  const name = ruleName,  ///
        mainRule = findRuleByName(name, rules);

  return mainRule;
}

function otherRulesFromRulesAndMainRule(rules, mainRule) {
  const otherRules = rules.filter(function(rule) {
    const ruleNotMainRule = (rule !== mainRule);

    return ruleNotMainRule;
  });

  return otherRules;
}
