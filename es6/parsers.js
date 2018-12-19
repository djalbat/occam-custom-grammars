'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      necessary = require('necessary');

const { arrayUtilities } = necessary,
      { push } = arrayUtilities,
      { BNFLexer } = lexers,
      { BNFParser, FlorenceParser } = parsers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

function florenceParserFromCombinedCustomGrammarsRules(combinedCustomGrammarsRules) {
  const { bnf } = FlorenceParser,
        florenceParser = florenceParserFromBNFAndCombinedCustomGrammarsRules(bnf, combinedCustomGrammarsRules);

  return florenceParser;
}

function florenceParserFromBNFAndCombinedCustomGrammarsRules(bnf, combinedCustomGrammarsRules) {
  const tokens = bnfLexer.tokensFromBNF(bnf),
        rulesNode = bnfParser.rulesNodeFromTokens(tokens),
        rules = BNFParser.generateRules(rulesNode);

  push(rules, combinedCustomGrammarsRules);

  const florenceParser = new FlorenceParser(rules);

  return florenceParser;
}

module.exports = {
  florenceParserFromCombinedCustomGrammarsRules,
  florenceParserFromBNFAndCombinedCustomGrammarsRules
};
