"use strict";

const parsers = require("occam-parsers");

const { partTypes } = parsers,
      { RuleNamePartType } = partTypes;

function isPartRuleNamePart(part) {
  let partRuleNamePart = false;

  const partTerminalPart = part.isTerminalPart(),
        partNonTerminalPart = !partTerminalPart;  ///

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType(),
          typeRuleNamePartType = (type === RuleNamePartType);

    partRuleNamePart = typeRuleNamePartType;  ///
  }

  return partRuleNamePart;
}

module.exports = {
  isPartRuleNamePart
};
