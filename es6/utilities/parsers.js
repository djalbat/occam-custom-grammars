'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      necessary = require('necessary');

const { arrayUtilities } = necessary,
      { push } = arrayUtilities,
      { BNFLexer } = lexers,
      { BNFParser, FlorenceParser } = parsers,
      { termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF } = parsers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { bnf } = FlorenceParser,
        florenceParser = florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar);

  return florenceParser;
}

function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
  const combinedCustomGrammarRules = combinedCustomGrammar.getRules(),
        tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens);

  push(rules, combinedCustomGrammarRules);

  const florenceParser = new FlorenceParser(rules);

  return florenceParser;
}

module.exports = {
  termDefaultCustomGrammarBNF,
  statementDefaultCustomGrammarBNF,
  expressionDefaultCustomGrammarBNF,
  metastatementDefaultCustomGrammarBNF,
  florenceParserFromCombinedCustomGrammar,
  florenceParserFromBNFAndCombinedCustomGrammar
};
