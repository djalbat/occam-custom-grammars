"use strict";

import { lexerUtilities } from "occam-lexers";

import CombinedCustomGrammar from "../customGrammar/combined";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function lexerFromNothing(Class) {
  const { entries } = Class,
        combinedCustomGrammar = CombinedCustomGrammar.fromNothing(),
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        lexer = lexerFromRules(Class, rules);

  return lexer;
}

export function lexerFromCombinedCustomGrammar(Class, combinedCustomGrammar) {
  const { entries } = Class,
        rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        lexer = lexerFromRules(Class, rules);

  return lexer;
}

export function lexerFromEntriesAndCombinedCustomGrammar(Class, entries, combinedCustomGrammar) {
  const rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar),
        lexer = lexerFromRules(Class, rules);

  return lexer;
}

export default {
  lexerFromNothing,
  lexerFromCombinedCustomGrammar,
  lexerFromEntriesAndCombinedCustomGrammar
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
