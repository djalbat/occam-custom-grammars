"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { filter } = arrayUtilities;

export function rulesFromParser(parser) {
  const ruleMap = parser.getRuleMap(),
        startRule = parser.getStartRule(),
        startRuleName = startRule.getName(),
        ruleMapValues = Object.values(ruleMap),
        rules = ruleMapValues;  ///

  filter(rules, (rule) => {
    const ruleName = rule.getName();

    if (ruleName !== startRuleName) {
      return true;
    }
  });

  rules.unshift(startRule);

  return rules;
}

export function rulesAsString(rules, multiLine) {
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
        }, EMPTY_STRING).replace(/^\n\n/, EMPTY_STRING);

  return rulesString;
}
