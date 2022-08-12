"use strict";

import { CustomGrammar } from "../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_2 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_2,
      typePattern = "",
      operatorPattern = "",
      termBNF = ``,
      statementBNF = ``,
      metastatementBNF = ``,
      json = {
        name,
        typePattern,
        operatorPattern,
        termBNF,
        statementBNF,
        metastatementBNF
      },
      userDefinedCustomGrammar2 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar2;
