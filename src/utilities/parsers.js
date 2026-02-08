"use strict";

import { NominalParser } from "occam-grammars";
import { parserUtilities } from "occam-parsers";

import CombinedCustomGrammar from "../customGrammar/combined";

const { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

export function parserFromNothing(Class) {
  const { bnf } = Class,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        parser = parserFromRules(Class, rules);

  return parser;
}

export function parserFromStartRuleName(Class, startRuleName) {
  const { bnf } = Class,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        parser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);

  return parser;
}

export function parserFromCombinedCustomGrammar(Class, combinedCustomGrammar) {
  const { bnf } = Class,
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        parser = parserFromRules(Class, rules);

  return parser;
}

export function parserFromBNFAndCombinedCustomGrammar(Class, bnf, combinedCustomGrammar) {
  const rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        parser = parserFromRules(Class, rules);

  return parser;
}

export function parserFromStartRuleNameAndCombinedCustomGrammar(Class, startRuleName, combinedCustomGrammar) {
  const { bnf } = Class,
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        parser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);

  return parser;
}

export function parserFromBNFStartRuleNameAndCombinedCustomGrammar(Class, bnf, startRuleName, combinedCustomGrammar) {
  const rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        parser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);

  return parser;
}

export default {
  parserFromNothing,
  parserFromStartRuleName,
  parserFromCombinedCustomGrammar,
  parserFromBNFAndCombinedCustomGrammar,
  parserFromStartRuleNameAndCombinedCustomGrammar,
  parserFromBNFStartRuleNameAndCombinedCustomGrammar
};

function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  let rules = rulesFromBNF(bnf);

  rules = combinedCustomGrammar.postProcess(rules);

  return rules;
}
