"use strict";

import { BNFLexer } from "occam-lexers";
import { arrayUtilities } from "necessary";
import { BNFParser, FlorenceParser } from "occam-parsers";

const { push } = arrayUtilities;

export function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { bnf } = FlorenceParser,
        florenceParser = florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar);

  return florenceParser;
}

export function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  const combinedCustomGrammarRuleMap = combinedCustomGrammar.getRuleMap(),
        bnfLexer = BNFLexer.fromNothing(),
        bnfParser = BNFParser.fromNothing(),
        tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens),
        combinedCustomGrammarRules = Object.values(combinedCustomGrammarRuleMap);

  push(rules, combinedCustomGrammarRules);

  const florenceParser = FlorenceParser.fromRules(rules);

  return florenceParser;
}

export default {
  florenceParserFromCombinedCustomGrammar,
  florenceParserFromBNFAndCombinedCustomGrammar
};
