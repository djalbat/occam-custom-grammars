'use strict';

const lexers = require('occam-lexers'), ///
      parsers = require('occam-parsers'); ///

const { BNFLexer } = lexers,
      { Rule, BNFParser } = parsers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

function rulesFromBNF(bnf) {
  const content = bnf,  ///
        tokens = bnfLexer.tokenise(content),
        node = bnfParser.parse(tokens),
        rules = (node !== null) ?
                  node.generateRules(Rule) :
                    [];

  return rules;
}

function rulesAsString(rules) {
  const maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength, rule) {
          const ruleName = rule.getName(),
                ruleNameLength = ruleName.length;

          maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

          return maximumRuleNameLength;
        }, 0),
        rulesString = rules.reduce(function(rulesString, rule) {
          const ruleString = rule.asString(maximumRuleNameLength);

          rulesString += ruleString;

          return rulesString;
        }, '');

  return rulesString;
}

function rulesAsEntries(rules) {
  const entries = rules.map(function(rule) {
    const entry = rule.asEntry();

    return entry;
  });

  return entries;
}

module.exports = {
  rulesFromBNF,
  rulesAsString,
  rulesAsEntries
};
