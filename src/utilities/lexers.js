"use strict";

import { NominalLexer } from "occam-grammars";
import { lexerUtilities } from "occam-lexers";

import CombinedCustomGrammar from "../customGrammar/combined";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function nominalLexerFromNothing() {
  const { entries } = NominalLexer,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        nominalLexer = lexerFromRules(NominalLexer, rules);

  return nominalLexer;
}

export function nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { entries } = NominalLexer,
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        nominalLexer = lexerFromRules(NominalLexer, rules);

  return nominalLexer;
}

export function nominalLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        nominalLexer = lexerFromRules(NominalLexer, rules);

  return nominalLexer;
}

export default {
  nominalLexerFromNothing,
  nominalLexerFromCombinedCustomGrammar,
  nominalLexerFromEntriesAndCombinedCustomGrammar
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
