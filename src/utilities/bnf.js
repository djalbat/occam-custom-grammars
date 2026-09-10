"use strict";

import { BNFLexer } from "occam-lexers";
import { arrayUtilities } from "necessary";
import { BNFParser, Rule } from "occam-parsers";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const { first } = arrayUtilities;

export function ruleFromBNF(bnf, rules) {
  const content = bnf,  ///
        tokens = bnfLexer.tokenise(content),
        node = bnfParser.parse(tokens);

  let rule = null;

  if (node !== null) {
    const rules = node.generateRules(Rule),
          rulesLength = rules.length;

    if (rulesLength === 1) {
      const firstRule = first(rules);

      rule = firstRule; ///
    }
  }

  if (rule !== null) {
    rules.push(rule);
  }
}