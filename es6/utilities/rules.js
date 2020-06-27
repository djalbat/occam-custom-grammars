"use strict";

import { BasicParser } from "occam-parsers";

export function rulesFromBNF(bnf) {
  const basicParser = BasicParser.fromBNF(bnf),
        ruleMap = basicParser.getRuleMap(),
        rules = Object.values(ruleMap); ///

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
        }, "").replace(/^\n\n/, "");

  return rulesString;
}

export function ruleMapFromRules(rules) {
  const ruleMap = rules.reduce((ruleMap, rule) => {
    const ruleName = rule.getName();

    ruleMap[ruleName] = rule;

    return ruleMap;
  }, []);

  return ruleMap;
}

export function ruleNamesFromRules(rules) {
  const ruleNames = rules.map((rule) => {
    const ruleName = rule.getName();

    return ruleName;
  });

  return ruleNames;
}
