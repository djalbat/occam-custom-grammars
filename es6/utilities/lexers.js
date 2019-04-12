'use strict';

const lexers = require('occam-lexers');

const { Rule, Rules, FlorenceLexer } = lexers;

function florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars) {
  const { entries } = FlorenceLexer,
        florenceLexer = florenceLexerFromEntriesAndCombinedCustomGrammars(entries, combinedCustomGrammars);

  return florenceLexer;
}

function florenceLexerFromEntriesAndCombinedCustomGrammars(entries, combinedCustomGrammars) {
  const combinedCustomGrammarsLexicalPattern = combinedCustomGrammars.getLexicalPattern(),
        custom = combinedCustomGrammarsLexicalPattern, ///
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
  florenceLexerFromCombinedCustomGrammars,
  florenceLexerFromEntriesAndCombinedCustomGrammars
};
