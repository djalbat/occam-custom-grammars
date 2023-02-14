"use strict";

import { lexerUtilities } from "occam-lexers";
import { FlorenceLexer } from "occam-grammars";

import CombinedCustomGrammar from "../combinedCustomGrammar";

const { rulesFromEntries } = lexerUtilities;

export function florenceLexerFromNothing() {
  const { entries } = FlorenceLexer,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        florenceLexer = FlorenceLexer.fromRules(rules);

  return florenceLexer;
}

export function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { entries } = FlorenceLexer,
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        florenceLexer = FlorenceLexer.fromRules(rules);

  return florenceLexer;
}

export function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        florenceLexer = FlorenceLexer.fromRules(rules);

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
