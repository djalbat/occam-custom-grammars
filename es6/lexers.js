'use strict';

const lexers = require('occam-lexers');

const { Rule, Rules, FlorenceLexer } = lexers;

function florenceLexerFromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
  const { entries } = FlorenceLexer,
        florenceLexer = FlorenceLexer.fromEntriesAndCombinedCustomGrammarsLexicalPattern(entries, combinedCustomGrammarsLexicalPattern);

  return florenceLexer;
}

function florenceLexerFromEntriesAndCombinedCustomGrammarsLexicalPattern(entries, combinedCustomGrammarsLexicalPattern) {
  const custom = combinedCustomGrammarsLexicalPattern, ///
        customGrammarEntry = {
          custom
        },
        customGrammarRule =  Rule.fromEntry(customGrammarEntry),
        rules = Rules.fromEntries(entries);

    rules.addRule(customGrammarRule);

  const florenceLexer = new FlorenceLexer(rules);

  return florenceLexer;
}

module.exports = {
  florenceLexerFromCombinedCustomGrammarsLexicalPattern,
  florenceLexerFromEntriesAndCombinedCustomGrammarsLexicalPattern
};
