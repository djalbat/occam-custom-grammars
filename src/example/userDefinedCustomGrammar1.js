"use strict";

import { CustomGrammar } from "../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_1 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_1,
      typePattern = "Integer",
      operatorPattern = "",
      termBNF = ``,
      expressionBNF = ``,
      statementBNF = ``,
      metastatementBNF = ``,
      json = {
        name,
        typePattern,
        operatorPattern,
        termBNF,
        expressionBNF,
        statementBNF,
        metastatementBNF
      },
      userDefinedCustomGrammar1 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar1;
