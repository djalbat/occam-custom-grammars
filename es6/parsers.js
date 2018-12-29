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

function florenceParserFromCombinedCustomGrammars(combinedCustomGrammars) {
  const { bnf } = FlorenceParser,
        florenceParser = florenceParserFromBNFAndCombinedCustomGrammars(bnf, combinedCustomGrammars);

  return florenceParser;
}

function florenceParserFromBNFAndCombinedCustomGrammars(bnf, combinedCustomGrammars) {
  const combinedCustomGrammarsRules = combinedCustomGrammars.getRules(),
        tokens = bnfLexer.tokensFromBNF(bnf),
        rulesNode = bnfParser.rulesNodeFromTokens(tokens),
        rules = BNFParser.generateRules(rulesNode);

  push(rules, combinedCustomGrammarsRules);

  const florenceParser = new FlorenceParser(rules);

  return florenceParser;
}

module.exports = {
  termDefaultCustomGrammarBNF,
  statementDefaultCustomGrammarBNF,
  expressionDefaultCustomGrammarBNF,
  metastatementDefaultCustomGrammarBNF,
  florenceParserFromCombinedCustomGrammars,
  florenceParserFromBNFAndCombinedCustomGrammars
};
