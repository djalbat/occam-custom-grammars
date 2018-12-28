'use strict';

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
  rulesAsString,
  rulesAsEntries
};
