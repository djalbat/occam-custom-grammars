"use strict";

import { defaultCustomGrammar } from "occam-grammars";

import CustomGrammar from "./customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "./grammarNames";

const { typePattern, symbolPatter, operatorPattern, termBNF, statementBNF, metastatementBNF } = defaultCustomGrammar;

const name = DEFAULT_CUSTOM_GRAMMAR_NAME,
      json = {
        name,
        termBNF,
        statementBNF,
        metastatementBNF,
        typePattern,
        symbolPatter,
        operatorPattern
      };

export default CustomGrammar.fromJSON(json);  ///
