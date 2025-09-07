"use strict";

import { arrayUtilities } from "necessary";

import typesMap from "../typesMap";

import { nodesQuery } from "../utilities/query";
import { nominalLexer } from "../utilities/nominal";
import { EMPTY_STRING, UNDERSCORE_CHARACTER } from "../constants";
import { customGrammarBNFLexer, customGrammarBNFParser } from "../utilities/grammar";

const { first, second } = arrayUtilities;

const stringLiteralTerminalNodesQuery = nodesQuery("//stringLiteral/@*!"),
      significantTokenTypeTerminalNodesQuery = nodesQuery("//significantTokenType/@*!");

export function validateBNF(bnf, ruleName) {
  if ((bnf === null) || (bnf === EMPTY_STRING)) {
    return;
  }

  const content = bnf,
        tokens = customGrammarBNFLexer.tokenise(content),
        node = customGrammarBNFParser.parse(tokens);

  const types = typesMap[ruleName],
        significantTokenTypeTerminalNodes = significantTokenTypeTerminalNodesQuery(node);

  significantTokenTypeTerminalNodes.forEach((significantTokenTypeTerminalNode) => {
    const type = typeFromSignificantTokenTypeTerminalNode(significantTokenTypeTerminalNode),
          typesIncludeType = types.includes(type);

    if (!typesIncludeType) {
      throw new Error(`The '${type}' type is not included in the '${ruleName}' rule's types.`)
    }
  });

  const stringLiteralTerminalNodes = stringLiteralTerminalNodesQuery(node);

  stringLiteralTerminalNodes.forEach((stringLiteralTerminalNode) => {
    const content = contentFromStringLiteralTerminalNode(stringLiteralTerminalNode);

    if (content === UNDERSCORE_CHARACTER) {
      throw new Error(`The "${content}" string literal cannot be an underscore.`);
    }

    const tokens = nominalLexer.tokenise(content),
          tokensLength = tokens.length;

    if (tokensLength !== 1) {
      throw new Error(`Tokenising the "${content}" string literal does not result in a single token.`);
    }

    const firstToken = first(tokens),
          token = firstToken, ///
          type = token.getType(),
          typesIncludeType = types.includes(type);

    if (!typesIncludeType) {
      throw new Error(`The "${content}" string literal's token's '${type}' type is not included in the '${ruleName}' rule's types.`)
    }
  });
}

function contentFromStringLiteralTerminalNode(stringLiteralTerminalNode) {
  let content;

  content = stringLiteralTerminalNode.getContent();

  const matches = content.match(/"([^"]+)"/),
        secondMatch = second(matches);

  content = secondMatch; ///

  return content;
}

function typeFromSignificantTokenTypeTerminalNode(significantTokenTypeTerminalNode) {
  let type;

  const content = significantTokenTypeTerminalNode.getContent(),
        matches = content.match(/\[([^\]]+)\]/),
        secondMatch = second(matches);

  type = secondMatch; ///

  return type;
}
