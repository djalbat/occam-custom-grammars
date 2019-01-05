'use strict';

const parsers = require('occam-parsers');

const { Parts } = parsers,
      { RuleNamePart } = Parts,
      { type } = RuleNamePart,
      ruleNameType = type;  ///

function isPartRuleNamePart(part) {
  let partRuleNamePart = false;

  const partTerminalPart = part.isTerminalPart(),
        partNonTerminalPart = !partTerminalPart;  ///

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType(),
          typeRuleNameType = (type === ruleNameType);

    partRuleNamePart = typeRuleNameType;  ///
  }

  return partRuleNamePart;
}

module.exports = {
  isPartRuleNamePart
};
