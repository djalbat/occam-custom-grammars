"use strict";

import { rewriteNodes } from "occam-grammar-utilities"
import { FlorenceParser } from "occam-grammars";

export default class extends FlorenceParser {
  parse(tokens, rule) {
    const node = super.parse(tokens, rule);

    if (node !== null) {
      rewriteNodes(node);
    }

    return node;
  }
}
