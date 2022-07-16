"use strict";

import { CustomGrammar } from "../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_1 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_1,
      lexicalPattern = ``,
      typeBNF = `type ::= _ ;`,
      termBNF = `term ::= _ ;`,
      expressionBNF = `expression ::= arithmeticExpression ;
      
      arithmeticExpression ::= arithmeticExpression "-" arithmeticExpression
      
                             | arithmeticTerm ;
      
      `,
      statementBNF = ``,
      metastatementBNF = `subproof ::= _ ;`,
      json = {
        name,
        lexicalPattern,
        typeBNF,
        termBNF,
        expressionBNF,
        statementBNF,
        metastatementBNF
      },
      userDefinedCustomGrammar1 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar1;
