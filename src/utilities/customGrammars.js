"use strict";

export function lexicalPatternsFromCustomGrammars(customGrammars) {
  const lexicalPatterns = [];

  customGrammars.forEach((customGrammar) => {
    const lexicalPattern = customGrammar.getLexicalPattern();

    if (lexicalPattern) { ///
      lexicalPatterns.push(lexicalPattern);
    }
  });

  return lexicalPatterns;
}

export function bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars) {
  const bnfs = [];

  customGrammars.forEach((customGrammar) => {
    const bnf = customGrammar.getBNF(ruleName);

    if (bnf) {  ///
      bnfs.push(bnf);
    }
  });

  return bnfs;
}
