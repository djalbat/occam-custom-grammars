"use strict";

import { FlorenceLexer } from "occam-grammars";
import { lexerUtilities } from "occam-lexers";

import CombinedCustomGrammar from "../customGrammar/combined";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function florenceLexerFromNothing() {
  const { entries } = FlorenceLexer,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        florenceLexer = lexerFromRules(FlorenceLexer, rules);

  return florenceLexer;
}

export function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { entries } = FlorenceLexer,
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        florenceLexer = lexerFromRules(FlorenceLexer, rules);

  return florenceLexer;
}

export function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        florenceLexer = lexerFromRules(FlorenceLexer, rules);

  return florenceLexer;
}

export default {
  florenceLexerFromNothing,
  florenceLexerFromCombinedCustomGrammar,
  florenceLexerFromEntriesAndCombinedCustomGrammar
};

function rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const customGrammarEntries = combinedCustomGrammar.getEntries();

  entries = [ ///
    ...customGrammarEntries,
    ...entries
  ];

  const rules = rulesFromEntries(entries);

  return rules;
}
