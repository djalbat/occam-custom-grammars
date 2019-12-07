'use strict';

const parsers = require('occam-parsers'); ///

const { BasicParser } = parsers;

function rulesFromBNF(bnf) {
const basicParser = BasicParser.fromBNF(bnf),
      rules = basicParser.getRules();

return rules;
}

function rulesAsString(rules, multiLine) {
  const maximumRuleNameLength = rules.reduce((maximumRuleNameLength, rule) => {
          const ruleName = rule.getName(),
                ruleNameLength = ruleName.length;

          maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

          return maximumRuleNameLength;
        }, 0),
        rulesString = rules.reduce((rulesString, rule) => {
          const ruleString = rule.asString(maximumRuleNameLength, multiLine);

          rulesString += ruleString;

          return rulesString;
        }, '').replace(/^\n\n/, '');

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
