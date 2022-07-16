"use strict";

import { CustomGrammar } from "../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_2 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_2,
      lexicalPattern = ``,
      typeBNF = `type ::= _ ;`,
      termBNF = `term ::= _ ;`,
      expressionBNF = `arithmeticExpression ::= arithmeticExpression "+" arithmeticExpression ;`,
      statementBNF = ``,
      metastatementBNF = ``,
      json = {
        name,
        lexicalPattern,
        typeBNF,
        termBNF,
        expressionBNF,
        statementBNF,
        metastatementBNF
      },
      userDefinedCustomGrammar2 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar2;
