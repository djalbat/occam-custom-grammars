"use strict";

import { arrayUtilities } from "necessary";

import { nodesQuery } from "../utilities/query";
import { nominalLexer } from "../utilities/nominal";
import { EMPTY_STRING, UNASSIGNED_TYPE, UNDERSCORE_CHARACTER } from "../constants";
import { customGrammarVocabularyLexer, customGrammarVocabularyParser } from "../utilities/grammar"

const { first, second } = arrayUtilities;

const expressionNodesQuery = nodesQuery("//expression")

export function validateVocabulary(vocabulary) {
  if ((vocabulary === null) || (vocabulary === EMPTY_STRING)) {
    return;
  }

  const content = vocabulary, ///
        tokens = customGrammarVocabularyLexer.tokenise(content),
        node = customGrammarVocabularyParser.parse(tokens);

  const expressionNodes = expressionNodesQuery(node);

  expressionNodes.forEach((expressionNode) => {
    const content = contentFromExpressionNode(expressionNode),
          tokens = nominalLexer.tokenise(content),
          tokensLength = tokens.length;

    if (tokensLength > 1) {
      throw new Error(`Tokenising the '${content}' content results in more than one token.`);
    }

    const firstToken = first(tokens),
          token = firstToken,
          type = token.getType();

    if (type !== UNASSIGNED_TYPE) {
      throw new Error(`The '${type}' type of the '${content}' token is not 'unassigned'.`);
    }

    if (content === UNDERSCORE_CHARACTER) {
      throw new Error(`The '${content}' token cannot be an underscore.`);
    }
  });
}

export function expressionsFromVocabulary(vocabulary, expressions) {
  if ((vocabulary === null) || (vocabulary === EMPTY_STRING)) {
    return;
  }

  const content = vocabulary, ///
        tokens = customGrammarVocabularyLexer.tokenise(content),
        node = customGrammarVocabularyParser.parse(tokens),
        expressionNodes = expressionNodesQuery(node);

  expressionNodes.forEach((expressionNode) => {
    const content = contentFromExpressionNode(expressionNode),
          expression = content; ///

    expressions.push(expression);
  });
}

function contentFromExpressionNode(expressionNode) {
  const nonTerminalNode = expressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        secondChildNode = second(childNodes),
        unassignedTerminalNode = secondChildNode,  ///
        content = unassignedTerminalNode.getContent();

  return content;
}
