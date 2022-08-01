"use strict";

import { defaultCustomGrammar } from "occam-grammars";

import CustomGrammar from "./customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "./grammarNames";

const { typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF } = defaultCustomGrammar;

const name = DEFAULT_CUSTOM_GRAMMAR_NAME,
      json = {
        name,
        typePattern,
        operatorPattern,
        termBNF,
        expressionBNF,
        statementBNF,
        metastatementBNF
      };

export default CustomGrammar.fromJSON(json);  ///
