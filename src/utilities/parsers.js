"use strict";

import { FlorenceParser } from "occam-grammars";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import { FLORENCE_START_RULE_NAME } from "../constants";
import { rulesFromBNF, ruleMapFromRules } from "../utilities/rules";

export function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { bnf } = FlorenceParser,
        florenceParser = florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar);

  return florenceParser;
}

export function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  let rules = rulesFromBNF(bnf);

  const ruleMap = ruleMapFromRules(rules),
        startRule = ruleMap[FLORENCE_START_RULE_NAME],
        combinedCustomGrammarRuleMap = combinedCustomGrammar.getRuleMap();

  Object.assign(ruleMap, combinedCustomGrammarRuleMap);

  eliminateLeftRecursion(startRule, ruleMap);

  delete ruleMap[FLORENCE_START_RULE_NAME];

  rules = Object.values(ruleMap);

  rules.unshift(startRule);

  const florenceParser = FlorenceParser.fromRules(rules);

  return florenceParser;
}

export default {
  florenceParserFromCombinedCustomGrammar,
  florenceParserFromBNFAndCombinedCustomGrammar
};
