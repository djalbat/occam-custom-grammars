"use strict";

import { CustomGrammar } from "../../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const termBNF = "term  ::=  argument<NO_WHITESPACE>( \"^\" | \"_\" )<NO_WHITESPACE>argument ;";

export const statementBNF = ``;

export const typeVocabulary = "";

export const symbolVocabulary = "^\n_\n";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
      json = {
        name,
        termBNF,
        statementBNF,
        typeVocabulary,
        symbolVocabulary
      };

const userDefinedCustomGrammar = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar;
