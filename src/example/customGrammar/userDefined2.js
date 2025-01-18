"use strict";

import { CustomGrammar } from "../../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_2 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_2,
      termBNF = ``,
      statementBNF = ``,
      typePattern = "",
      symbolPattern = "",
      json = {
        name,
        termBNF,
        statementBNF,
        typePattern,
        symbolPattern
      },
      userDefinedCustomGrammar2 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar2;
