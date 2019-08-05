'use strict';

const lexers = require('occam-lexers');

const { Rule, Rules, FlorenceLexer } = lexers;

function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { entries } = FlorenceLexer,
        florenceLexer = florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar);

  return florenceLexer;
}

function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const combinedCustomGrammarLexicalPattern = combinedCustomGrammar.getLexicalPattern(),
        custom = combinedCustomGrammarLexicalPattern, ///
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
  florenceLexerFromCombinedCustomGrammar,
  florenceLexerFromEntriesAndCombinedCustomGrammar
};
