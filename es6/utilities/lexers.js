"use strict";

import { Rule, FlorenceLexer } from "occam-lexers";

export function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { entries } = FlorenceLexer,
        florenceLexer = florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar);

  return florenceLexer;
}

export function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const combinedCustomGrammarLexicalPattern = combinedCustomGrammar.getLexicalPattern(),
        custom = combinedCustomGrammarLexicalPattern, ///
        customGrammarEntry = {
          custom
        },
        customGrammarRule =  Rule.fromEntry(customGrammarEntry),
        rules = entries.map((entry) => Rule.fromEntry(entry));

  rules.unshift(customGrammarRule);

  const florenceLexer = new FlorenceLexer(rules);

  return florenceLexer;
}

export default {
  florenceLexerFromCombinedCustomGrammar,
  florenceLexerFromEntriesAndCombinedCustomGrammar
};
