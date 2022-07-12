"use strict";

import { FlorenceParser } from "occam-grammars";
import { parserUtilities } from "occam-grammar-utilities";

const { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

export function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { bnf } = FlorenceParser,
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        florenceParser = parserFromRules(FlorenceParser, rules);

  return florenceParser;
}

export function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  const rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        florenceParser = parserFromRules(FlorenceParser, rules);

  return florenceParser;
}

export function florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar(bnf, startRuleName, combinedCustomGrammar) {
  const rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        florenceParser = parserFromRulesAndStartRuleName(FlorenceParser, rules, startRuleName);

  return florenceParser;
}

export default {
  florenceParserFromCombinedCustomGrammar,
  florenceParserFromBNFAndCombinedCustomGrammar,
  florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar
};

function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  let rules = rulesFromBNF(bnf);

  const combinedCustomGrammarRules = combinedCustomGrammar.getRules();

  rules = [
    ...rules,
    ...combinedCustomGrammarRules
  ];

  return rules;
}
