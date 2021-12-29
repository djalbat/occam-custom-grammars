"use strict";

import { Rule } from "occam-lexers";
import { FlorenceLexer } from "occam-grammars";

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

  const florenceLexer = FlorenceLexer.fromRules(rules);

  return florenceLexer;
}

export default {
  florenceLexerFromCombinedCustomGrammar,
  florenceLexerFromEntriesAndCombinedCustomGrammar
};
