"use strict";

export function findRuleByRuleName(ruleName, rules) {
  const name = ruleName,  ///
        rule = rules.find((rule) => {
          const ruleName = rule.getName();

          if (ruleName === name) {
            return true;
          }
        }) || null; ///

  return rule;
}
