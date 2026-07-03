"use strict";

import { queryUtilities } from "occam-query";

import { contentFromExpressionNode } from "../utilities/validate";
import { customGrammarVocabularyLexer, customGrammarVocabularyParser } from "../utilities/grammar"

const { nodesQuery } = queryUtilities;

const expressionNodesQuery = nodesQuery("//expression");

export function expressionsFromVocabulary(vocabulary, expressions) {
  const content = vocabulary, ///
        tokens = customGrammarVocabularyLexer.tokenise(content),
        node = customGrammarVocabularyParser.parse(tokens);

  if (node === null) {
    return;
  }

  const expressionNodes = expressionNodesQuery(node);

  expressionNodes.forEach((expressionNode) => {
    const content = contentFromExpressionNode(expressionNode),
          expression = content; ///

    expressions.push(expression);
  });
}
