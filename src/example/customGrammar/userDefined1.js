"use strict";

import { CustomGrammar } from "../../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_1 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_1,
      termBNF = "",
      statementBNF = `

             statement  ::=   "¬"<NO_WHITESPACE>metaArgument

                          |   metaArgument ( "∧" | "∨" | "⇒" | "iff" ) metaArgument

                          ;

`,
      typeVocabulary = "",
      symbolVocabulary = `iff
⇒
∧
∨
¬
`,
      json = {
        name,
        termBNF,
        statementBNF,
        typeVocabulary,
        symbolVocabulary
      },
      userDefinedCustomGrammar1 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar1;
