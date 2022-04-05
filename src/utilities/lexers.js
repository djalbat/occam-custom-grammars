"use strict";

import { Rule } from "occam-lexers";
import { FlorenceLexer } from "occam-grammars";

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
  const combinedCustomGrammarLexicalPattern = combinedCustomGrammar.getLexicalPattern(),
        custom = combinedCustomGrammarLexicalPattern, ///
        customGrammarEntry = {
          custom
        },
        customGrammarRule =  Rule.fromEntry(customGrammarEntry),
        rules = entries.map((entry) => {
          const rule = Rule.fromEntry(entry);

          return rule;
        });

  rules.unshift(customGrammarRule);

  return rules;
}
