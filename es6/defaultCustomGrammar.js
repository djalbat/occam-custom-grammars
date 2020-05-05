"use strict";

import { defaultCustomGrammar as lexersDefaultCustomGrammar } from "occam-lexers";
import { defaultCustomGrammar as parsersDefaultCustomGrammar } from "occam-parsers";

import CustomGrammar from "./customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "./constants";

const { lexicalPattern } = lexersDefaultCustomGrammar,
      { termBNF, expressionBNF, statementBNF, metastatementBNF } = parsersDefaultCustomGrammar;

const name = DEFAULT_CUSTOM_GRAMMAR_NAME, ///
      json = {
        "name": name,
        "lexicalPattern": lexicalPattern,
        "termBNF": termBNF,
        "expressionBNF": expressionBNF,
        "statementBNF": statementBNF,
        "metastatementBNF": metastatementBNF
      },
      defaultCustomGrammar = CustomGrammar.fromJSON(json);

export default defaultCustomGrammar;
