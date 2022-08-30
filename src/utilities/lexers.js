"use strict";

import { lexerUtilities } from "occam-lexers";
import { FlorenceLexer } from "occam-grammars";

const { rulesFromEntries } = lexerUtilities;

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
