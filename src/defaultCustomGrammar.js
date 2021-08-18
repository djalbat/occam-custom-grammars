"use strict";

import { defaultCustomGrammar } from "occam-grammars";

import CustomGrammar from "./customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "./grammarNames";

const { lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF } = defaultCustomGrammar;

const name = DEFAULT_CUSTOM_GRAMMAR_NAME,
      json = {
        "name": name,
        "lexicalPattern": lexicalPattern,
        "termBNF": termBNF,
        "expressionBNF": expressionBNF,
        "statementBNF": statementBNF,
        "metastatementBNF": metastatementBNF
      };

export default CustomGrammar.fromJSON(json);  ///
