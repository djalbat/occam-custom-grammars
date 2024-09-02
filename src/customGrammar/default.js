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

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion

                                       |  containedAssertion 
                                                  
                                       ;

equality                             ::=  argument "=" argument ;

typeAssertion                        ::=  term ":" type ;

definedAssertion                     ::=  term "is" "not"? "defined" ;
                                       
containedAssertion                   ::=  term "is" "not"? "contained" "in" ( metaArgument | metastatement ) ;`;

export const metastatementBNF = `metastatement                        ::=  "(" metastatement ")" 
           
                                       |  subproofAssertion         
       
                                       |  frameAssertion

                                       |  metavariable substitution?

                                       ;
                                       
subproofAssertion                    ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

frameAssertion                       ::=  metavariable "⊧" frame ;

frame                                ::=  ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) ( "," ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) )* ;
 
declaration                          ::=  reference "::" metastatement ;

substitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;`;

const name = DEFAULT_CUSTOM_GRAMMAR_NAME,
      json = {
        name,
        typePattern,
        symbolPattern,
        operatorPattern,
        termBNF,
        statementBNF,
        metastatementBNF
      };

const defaultCustomGrammar = CustomGrammar.fromJSON(json);

export default defaultCustomGrammar;
