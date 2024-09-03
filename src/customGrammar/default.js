"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "⊧|is|in|for|defined|contained|not";

export const termBNF = `term                                 ::=  "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement                            ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  judgement

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion  

                                       |  containedAssertion   
                                                  
                                       |  subproofAssertion         
       
                                       |  metavariable substitution?

                                       ;

equality                             ::=  argument "=" argument ;

judgement                            ::=  metavariable "⊧" frame ;

typeAssertion                        ::=  term ":" type ;

definedAssertion                     ::=  term "is" "not"? "defined" ;

containedAssertion                   ::=  term "is" "not"? "contained" "in" metaArgument ;

subproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;

frame                                ::=  ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) ( "," ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) )* ;
 
declaration                          ::=  reference "::" statement ;

substitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;`;

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
