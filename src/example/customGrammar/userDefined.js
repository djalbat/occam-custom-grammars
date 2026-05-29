"use strict";

import { CustomGrammar } from "../../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
      json = {
        "name": name,
        "termBNF": "\n\n                       term  ::=  argument<NO_WHITESPACE>( \"^\" | \"_\" )<NO_WHITESPACE>argument ;\n\n",
        "statementBNF": "",
        "typeVocabulary": "",
        "symbolVocabulary": "^\n_\n"
      },
      userDefinedCustomGrammar = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar;
