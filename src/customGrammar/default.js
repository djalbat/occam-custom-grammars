"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "⊧|is|in|for|omitted|contained|defined|undefined";

export const termBNF = `term                                 ::=  "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement                            ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  typeAssertion 
                                                  
                                       |  term defining

                                       |  term containment metastatement 
                                                  
                                       ;

equality                             ::=  argument "=" argument ;

typeAssertion                        ::=  term ":" type ;
                                       
containment                          ::=  "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;

defining                             ::=  "is" ( "defined" | "undefined" ) ;`;

export const metastatementBNF = `metastatement                        ::=  "(" metastatement ")" 
           
                                       |  metaEquality

                                       |  ruleSubproofAssertion         

                                       |  metavariable substitution?
       
                                       |  context

                                       |  judgement

                                       |  statement
       
                                       ;
                                       
metaEquality                         ::=  metastatement "=" metastatement ;

ruleSubproofAssertion                ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

substitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;

context                              ::=  ( declaration | "..."<NO_WHITESPACE>metavariable ) ( "," ( declaration | "..."<NO_WHITESPACE>metavariable ) )* ;

judgement                            ::=  metavariable "⊧" metastatement ;
 
declaration                          ::=  metavariable "::" metastatement ;`;

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
