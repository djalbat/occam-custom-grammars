'use strict';

const parsers = require('occam-parsers'), ///
      necessary = require('necessary'),
      grammarUtilities = require('occam-grammar-utilities');  ///

const rulesUtilities = require('./utilities/rules'),
      ruleNameUtilities = require('./utilities/ruleName'),
      customGrammarsUtilities = require('./utilities/customGrammars');

const { rulesFromBNF } = rulesUtilities,
      { arrayUtilities } = necessary,
      { first, unshift } = arrayUtilities,
      { eliminateImplicitLeftRecursion } = grammarUtilities,
      { lexicalPatternsFromCustomGrammars, bnfsFromRuleNameAndCustomGrammars } = customGrammarsUtilities,
      { termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF } = parsers,
      { findRuleByRuleName, qualifiedRuleBNFFromRuleName, qualifiedRuleNameFromRuleName, unqualifiedRuleBNFFromRuleName, unqualifiedRuleNameFromRuleName } = ruleNameUtilities;

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
  const metastatementRules = metastatementRulesFromCustomGrammars(customGrammars),
        statementRules = statementRulesFromCustomGrammars(customGrammars),
        expressionRules = expressionRulesFromCustomGrammars(customGrammars),
        termRules = termRulesFromCustomGrammars(customGrammars),
        combinedRules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules); ///

  return combinedRules;
}

function metastatementRulesFromCustomGrammars(customGrammars) {
  const ruleName = 'metastatement', ///
        defaultBNF = metastatementDefaultCustomGrammarBNF, ///
        bnfs = bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars),
        mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        qualifiedRules = qualifiedRulesFromMainRule(mainRule),
        unqualifiedRules = unqualifiedRulesFromMainRule(mainRule);

  let rules;

  rules = [].concat(remainingRules).concat(mainRule);

  rules = eliminateImplicitLeftRecursion(rules);

  rules = [].concat(unqualifiedRules).concat(qualifiedRules).concat(rules);

  const metastatementRules = rules;

  return metastatementRules;
}

function statementRulesFromCustomGrammars(customGrammars) {
  const ruleName = 'statement', ///
        defaultBNF = statementDefaultCustomGrammarBNF, ///
        bnfs = bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars),
        mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        qualifiedRules = qualifiedRulesFromMainRule(mainRule),
        unqualifiedRules = unqualifiedRulesFromMainRule(mainRule);

  let rules;

  rules = [].concat(remainingRules).concat(mainRule);

  rules = eliminateImplicitLeftRecursion(rules);

  rules = [].concat(unqualifiedRules).concat(qualifiedRules).concat(rules);

  const statementRules = rules;

  return statementRules;
}

function expressionRulesFromCustomGrammars(customGrammars) {
  const ruleName = 'expression', ///
        defaultBNF = expressionDefaultCustomGrammarBNF, ///
        bnfs = bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars),
        mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs);

  let rules;

  rules = [].concat(remainingRules).concat(mainRule);

  rules = eliminateImplicitLeftRecursion(rules);

  const expressionRules = rules;

  return expressionRules;
}

function termRulesFromCustomGrammars(customGrammars) {
  const ruleName = 'term', ///
        defaultBNF = termDefaultCustomGrammarBNF, ///
        bnfs = bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars),
        mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs),
        remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, defaultBNF, bnfs);

  let rules;

  rules = [].concat(remainingRules).concat(mainRule);

  rules = eliminateImplicitLeftRecursion(rules);

  const termRules = rules;

  return termRules;
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

function qualifiedRulesFromMainRule(mainRule) {
  const mainQualifiedRule = mainQualifiedRuleFromMainRule(mainRule),
        remainingQualifiedRules = remainingQualifiedRulesFromMainRule(mainRule),
        qualifiedRules = [].concat(mainQualifiedRule).concat(remainingQualifiedRules);

  return qualifiedRules;
}

function unqualifiedRulesFromMainRule(mainRule) {
  const mainUnqualifiedRule = mainUnqualifiedRuleFromMainRule(mainRule),
        remainingUnqualifiedRules = remainingUnqualifiedRulesFromMainRule(mainRule),
        unqualifiedRules = [].concat(mainUnqualifiedRule).concat(remainingUnqualifiedRules);

  return unqualifiedRules;
}

function mainAmendedRuleFromMainRule(mainRule, callback) {
  const ruleName = mainRule.getName(),
        definitions = mainRule.getDefinitions(),
        mainAmendedRuleName = callback(ruleName),
        mainAmendedRuleNamesBNF = definitions.reduce(function(mainAmendedRuleNamesBNF, definition) {
          const parts = definition.getParts(),
                firstPart = first(parts),
                ruleNamePart = firstPart, ///
                ruleName = ruleNamePart.getRuleName(),
                mainAmendedRuleName = callback(ruleName);

          mainAmendedRuleNamesBNF = (mainAmendedRuleNamesBNF === null) ?
                                      mainAmendedRuleName :
                                       `${mainAmendedRuleNamesBNF} | ${mainAmendedRuleName}`;

          return mainAmendedRuleNamesBNF;
        }, null),
        mainAmendedRuleBNF = `${mainAmendedRuleName} ::= ${mainAmendedRuleNamesBNF} ;`,
        mainAmendedRules = rulesFromBNF(mainAmendedRuleBNF),
        firstUnqualifiedMainRule = first(mainAmendedRules),
        mainAmendedRule = firstUnqualifiedMainRule; ///

  return mainAmendedRule;
}

function mainQualifiedRuleFromMainRule(mainRule) { return mainAmendedRuleFromMainRule(mainRule, qualifiedRuleNameFromRuleName); }

function mainUnqualifiedRuleFromMainRule(mainRule) { return mainAmendedRuleFromMainRule(mainRule, unqualifiedRuleNameFromRuleName); }

function remainingAmendedRulesFromMainRule(mainRule, callback) {
  const definitions = mainRule.getDefinitions(),
        remainingAmendedRulesBNF = definitions.reduce(function(remainingAmendedRulesBNF, definition) {
          const parts = definition.getParts(),
                firstPart = first(parts),
                ruleNamePart = firstPart, ///
                ruleName = ruleNamePart.getRuleName(),
                remainingAmendedRuleBNF = callback(ruleName);

          remainingAmendedRulesBNF = (remainingAmendedRulesBNF === null) ?
                                       remainingAmendedRuleBNF :
                                        `${remainingAmendedRulesBNF} ${remainingAmendedRuleBNF}`;

          return remainingAmendedRulesBNF;
        }, null),
        remainingAmendedRules = rulesFromBNF(remainingAmendedRulesBNF);

  return remainingAmendedRules;
}

function remainingQualifiedRulesFromMainRule(mainRule) { return remainingAmendedRulesFromMainRule(mainRule, qualifiedRuleBNFFromRuleName); }

function remainingUnqualifiedRulesFromMainRule(mainRule) { return remainingAmendedRulesFromMainRule(mainRule, unqualifiedRuleBNFFromRuleName); }
