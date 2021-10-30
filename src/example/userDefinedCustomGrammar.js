"use strict";

import { CustomGrammar } from "../index"; ///

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
      lexicalPattern = `<=|\\+|\\-|\\||insert|delete|empty`,
      termBNF = `                term  ::=  operation

                        |  operator
                       
                        |  substring

                        |  stringLength

                        ;


           operation  ::=  operator<NO_WHITESPACE>"(" term ")" ;


            operator  ::=  "insert"<NO_WHITESPACE>"(" term "," term ")"

                        |  "delete"<NO_WHITESPACE>"(" term "," term ")" 

                        |  "empty"<NO_WHITESPACE>"("<NO_WHITESPACE>")"

                        ;


           substring  ::=  name<NO_WHITESPACE>"[" "..." expression "]" 

                        |  name<NO_WHITESPACE>"[" expression "..." expression "]" 

                        |  name<NO_WHITESPACE>"[" expression "..."  "]" 

                        ;


      stringLength  ::=  "|" term "|" ;`,
      expressionBNF = `          expression  ::=  arithmeticExpression

                        ;


arithmeticExpression  ::=  addition 

                        |  subtraction 

                        ;


            addition  ::=  expression "+" expression ;

         subtraction  ::=  expression "-" expression ;`,
      statementBNF = `           statement  ::=  lessThanOrEqualTo

                        ;


   lessThanOrEqualTo  ::=  expression "<=" expression ;`,
      metastatementBNF = ``,
      json = {
        name,
        lexicalPattern,
        termBNF,
        expressionBNF,
        statementBNF,
        metastatementBNF
      },
      userDefinedCustomGrammar = CustomGrammar.fromJSON(json);

export default userDefinedCustomGrammar;
