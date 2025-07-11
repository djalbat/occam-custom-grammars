"use strict";

import { CustomGrammar } from "../../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_1 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_1,
      termBNF = ``,
      statementBNF = ``,
      typePattern = "Group",
      symbolPattern = "",
      json = {
        name,
        termBNF,
        statementBNF,
        typePattern,
        symbolPattern
      },
      userDefinedCustomGrammar1 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar1;
