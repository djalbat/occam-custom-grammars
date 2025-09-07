"use strict";

import { CommonLexer } from "occam-lexers";
import { NominalLexer } from "occam-grammars";
import { arrayUtilities } from "necessary";
import { CustomGrammarVocabularyLexer, CustomGrammarVocabularyParser } from "occam-grammars";

import { nodesQuery } from "../utilities/query";
import { EMPTY_STRING, UNASSIGNED_TYPE, UNDERSCORE_CHARACTER } from "../constants";

const errorNodesQuery = nodesQuery("//error"),
      expressionNodesQuery = nodesQuery("//expression")

const nominalLexer = CommonLexer.fromNothing(NominalLexer),
      customGrammarVocabularyLexer = CustomGrammarVocabularyLexer.fromNothing(),
      customGrammarVocabularyParser = CustomGrammarVocabularyParser.fromNothing();

const { first, second } = arrayUtilities;

export function validateVocabulary(vocabulary) {
  if ((vocabulary === null) || (vocabulary === EMPTY_STRING)) {
    return;
  }

  const content = vocabulary, ///
        tokens = customGrammarVocabularyLexer.tokenise(content),
        node = customGrammarVocabularyParser.parse(tokens);

  if (node === null) {
    throw new Error("The vocabulary cannot be parsed.");
  }

  const errorNodes = errorNodesQuery(node),
        errorNodesLength = errorNodes.length;

  if (errorNodesLength > 0) {
    throw new Error("The vocabulary contains errors.");
  }

  const expressionNodes = expressionNodesQuery(node);

  expressionNodes.forEach((expressionNode) => {
    const content = contentFromExpressionNode(expressionNode),
          tokens = nominalLexer.tokenise(content),
          tokensLength = tokens.length;

    if (tokensLength > 1) {
      throw new Error(`Tokenising '${content}' results in more than one token.`);
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
