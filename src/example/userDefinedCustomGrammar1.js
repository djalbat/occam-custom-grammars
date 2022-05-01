"use strict";

import { CustomGrammar } from "../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME_1 } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME_1,
      lexicalPattern = ``,
      termBNF = `term ::= _1 ;`,
      expressionBNF = `expression ::= arithmeticExpression ;
      
      arithmeticExpression ::= arithmeticExpression "-" arithmeticExpression
      
                             | arithmeticTerm ;
      
      `,
      statementBNF = ``,
      metastatementBNF = `subproof ::= _ ;`,
      json = {
        name,
        lexicalPattern,
        termBNF,
        expressionBNF,
        statementBNF,
        metastatementBNF
      },
      userDefinedCustomGrammar1 = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar1;
