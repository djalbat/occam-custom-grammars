"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const propertyPattern = "";

export const operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|defined|contained";

export const termBNF = `term.                                ::=  "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement.                           ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion  

                                       |  containedAssertion   
                                                  
                                       |  subproofAssertion         

                                       |  judgement

                                       |  metavariable ( frameSubstitution | termSubstitution )?

                                       ;

equality                             ::=  term "=" term ;

typeAssertion                        ::=  term ":" type ;

definedAssertion                     ::=  ( frame | term ) "is" "not"? "defined" ;

containedAssertion                   ::=  ( frame | term ) "is" "not"? "contained" "in" statement ;

subproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;

judgement                            ::=  frame "|-" declaration ;

frame                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;
 
declaration                          ::=  metavariable "::" statement ;

termSubstitution                     ::=  "[" term "for" term "]";

frameSubstitution                    ::=  "[" frame "for" frame "]";

statementSubstitution                ::=  "[" statement "for" statement "]";

metavariableSubstitution             ::=  "[" metavariable "for" metavariable "]";`;

const name = DEFAULT_CUSTOM_GRAMMAR_NAME,
      json = {
        name,
        typePattern,
        symbolPattern,
        propertyPattern,
        operatorPattern,
        termBNF,
        statementBNF
      };

const defaultCustomGrammar = CustomGrammar.fromJSON(json);

export default defaultCustomGrammar;
