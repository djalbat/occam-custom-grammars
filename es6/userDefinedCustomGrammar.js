'use strict';

const constants = require('./constants'),
      CustomGrammar = require('./customGrammar');

const { USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants;

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,  ///
      lexicalPattern = `<=|>=|<|>|\\+|\\-|insert|delete|empty|\\|-|\\||iff|<=>|=>|->|∧|∨|¬`,
      termBNF = `



                       term  ::=  operation

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


               stringLength  ::=  "|" term "|" ;

      `,
      expressionBNF = `
      


                 expression  ::=  arithmeticExpression

                               ;


       arithmeticExpression  ::=  addition 

                               |  subtraction 

                               ;


                   addition  ::=  expression "+" expression ;

                subtraction  ::=  expression "-" expression ;
      `,
      statementBNF = `





                  statement  ::=  lessThan

                               |  greaterThan

                               |  lessThanOrEqualTo

                               |  greaterThanOrEqualTo

                               |   negatedStatement

                               |   parenthesisedStatement

                               |   conjunctionOfStatements

                               |   disjunctionOfStatements

                               |   implicationBetweenStatements

                               |   biconditionalBetweenStatements

                               |   materialConditionalBetweenStatements

                               ;


                   lessThan  ::=  expression "<" expression ;

                greaterThan  ::=  expression ">" expression ;

          lessThanOrEqualTo  ::=  expression "<=" expression ;

       greaterThanOrEqualTo  ::=  expression ">=" expression ;



     negatedStatement                      ::=   "¬"<NO_WHITESPACE>statement ;

     parenthesisedStatement                ::=   "(" statement ")" ;

     conjunctionOfStatements               ::=   statement "∧" statement ;

     disjunctionOfStatements               ::=   statement "∨" statement ;

     implicationBetweenStatements          ::=   statement "=>" statement ;

     biconditionalBetweenStatements        ::=   statement ( "iff" | "<=>" ) statement ;

     materialConditionalBetweenStatements  ::=   statement "->" statement ;


      `,
      metastatementBNF = `
      


     negatedMetastatement                      ::=   "¬"<NO_WHITESPACE>metastatement ;

     parenthesisedMetastatement                ::=   "(" metastatement ")" ;

     conjunctionOfMetastatements               ::=   metastatement "∧" metastatement ;

     disjunctionOfMetastatements               ::=   metastatement "∨" metastatement ;

     implicationBetweenMetastatements          ::=   metastatement "=>" metastatement ;

     biconditionalBetweenMetastatements        ::=   metastatement ( "iff" | "<=>" ) metastatement ;

     materialConditionalBetweenMetastatements  ::=   metastatement "->" metastatement ;


     metastatement                             ::=   negatedMetastatement

                                                 |   parenthesisedMetastatement
    
                                                 |   conjunctionOfMetastatements
     
                                                 |   disjunctionOfMetastatements
     
                                                 |   implicationBetweenMetastatements
     
                                                 |   biconditionalBetweenMetastatements
     
                                                 |   materialConditionalBetweenMetastatements
     
                                                 ;

 
 
       `,
      userDefinedCustomGrammar = CustomGrammar.fromName(name);

userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);

userDefinedCustomGrammar.setBNF('term', termBNF);
userDefinedCustomGrammar.setBNF('expression', expressionBNF);
userDefinedCustomGrammar.setBNF('statement', statementBNF);
userDefinedCustomGrammar.setBNF('metastatement', metastatementBNF);

module.exports = userDefinedCustomGrammar;
