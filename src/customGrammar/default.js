"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|defined|undefined|missing|present";

export const termBNF = `term.                                ::=  "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement.                           ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  judgement

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion  

                                       |  containedAssertion  

                                       |  subproofAssertion         

                                       |  metavariable ( frameSubstitution | termSubstitution )?

                                       ;

equality                             ::=  term "=" term ;

judgement                            ::=  frame "|-" declaration ;

typeAssertion                        ::=  term ":" type ;

definedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );

containedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;

subproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;

frame                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;
 
declaration                          ::=  metavariable "::" statement ;

termSubstitution                     ::=  "[" term "for" term "]";

frameSubstitution                    ::=  "[" frame "for" frame "]";

statementSubstitution                ::=  "[" statement "for" statement "]";

referenceSubstitution                ::=  "[" reference "for" reference "]";`;

const name = DEFAULT_CUSTOM_GRAMMAR_NAME,
      json = {
        name,
        typePattern,
        symbolPattern,
        operatorPattern,
        termBNF,
        statementBNF
      };

const defaultCustomGrammar = CustomGrammar.fromJSON(json);

export default defaultCustomGrammar;
