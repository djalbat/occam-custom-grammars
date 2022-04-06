"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser, Rule } from "occam-parsers";

import { EMPTY_STRING } from "../constants";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export function rulesFromBNF(bnf) {
  const tokens = bnfLexer.tokensFromBNF(bnf),
        node = bnfParser.parse(tokens),
        rules = (node !== null) ?
                  node.generateRules(Rule) :
                    [];

  return rules;
}

export function rulesAsString(rules, multiLine) {
  const maximumRuleNameLength = rules.reduce((maximumRuleNameLength, rule) => {
          const ruleName = rule.getName(),
                ruleNameLength = ruleName.length;

          maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

          return maximumRuleNameLength;
        }, 0),
        rulesString = rules.reduce((rulesString, rule) => {
          const ruleString = rule.asString(maximumRuleNameLength, multiLine);

          rulesString += ruleString;

          return rulesString;
        }, EMPTY_STRING).replace(/^\n\n/, EMPTY_STRING);

  return rulesString;
}
