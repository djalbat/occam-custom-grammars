"use strict";

import { NominalParser } from "occam-grammars";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import CombinedCustomGrammar from "../customGrammar/combined";

const { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

export function nominalParserFromNothing() {
  const { bnf } = NominalParser,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        nominalParser = parserFromRules(NominalParser, rules);

  return nominalParser;
}

export function nominalParserFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { bnf } = NominalParser,
        rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        nominalParser = parserFromRules(NominalParser, rules);

  return nominalParser;
}

export function nominalParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  const rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        nominalParser = parserFromRules(NominalParser, rules);

  return nominalParser;
}

export function nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar(bnf, startRuleName, combinedCustomGrammar) {
  const rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar),
        nominalParser = parserFromRulesAndStartRuleName(NominalParser, rules, startRuleName);

  return nominalParser;
}

export default {
  nominalParserFromNothing,
  nominalParserFromCombinedCustomGrammar,
  nominalParserFromBNFAndCombinedCustomGrammar,
  nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar
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
