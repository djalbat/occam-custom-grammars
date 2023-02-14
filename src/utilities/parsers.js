"use strict";

import { FlorenceParser } from "occam-grammars";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import CombinedCustomGrammar from "../combinedCustomGrammar";

const { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

export function florenceParserFromNothing() {
  const { bnf } = FlorenceParser,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        florenceParser = parserFromRules(FlorenceParser, rules);

  return florenceParser;
}

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
  florenceParserFromNothing,
  florenceParserFromCombinedCustomGrammar,
  florenceParserFromBNFAndCombinedCustomGrammar,
  florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar
};

function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  let rules = rulesFromBNF(bnf);

  const combinedCustomGrammarRules = combinedCustomGrammar.getRules();

  rules = [ ///
    ...rules,
    ...combinedCustomGrammarRules
  ];

  rules = eliminateLeftRecursion(rules);  ///

  return rules;
}
