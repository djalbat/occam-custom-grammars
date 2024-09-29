"use strict";

import { NominalLexer } from "occam-grammars";
import { lexerUtilities } from "occam-lexers";

import CombinedCustomGrammar from "../customGrammar/combined";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function NominalLexerFromNothing() {
  const { entries } = NominalLexer,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        NominalLexer = lexerFromRules(NominalLexer, rules);

  return NominalLexer;
}

export function NominalLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { entries } = NominalLexer,
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        NominalLexer = lexerFromRules(NominalLexer, rules);

  return NominalLexer;
}

export function NominalLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        NominalLexer = lexerFromRules(NominalLexer, rules);

  return NominalLexer;
}

export default {
  NominalLexerFromNothing,
  NominalLexerFromCombinedCustomGrammar,
  NominalLexerFromEntriesAndCombinedCustomGrammar
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
