"use strict";

function findRuleByRuleName(ruleName, rules) {
  const name = ruleName,  ///
        rule = rules.find(function(rule) {
          const ruleName = rule.getName();

          if (ruleName === name) {
            return true;
          }
        }) || null; ///

  return rule;
}

module.exports = {
  findRuleByRuleName
};
