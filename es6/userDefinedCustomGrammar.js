"use strict";

import CustomGrammar from "./customGrammar";

import { USER_DEFINED_CUSTOM_GRAMMAR_NAME } from "./constants";

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,  ///
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
      userDefinedCustomGrammar = CustomGrammar.fromName(name);

userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);

userDefinedCustomGrammar.setBNF("term", termBNF);
userDefinedCustomGrammar.setBNF("expression", expressionBNF);
userDefinedCustomGrammar.setBNF("statement", statementBNF);
userDefinedCustomGrammar.setBNF("metastatement", metastatementBNF);

module.exports = userDefinedCustomGrammar;
