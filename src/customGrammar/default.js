"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "⊧|is|in|for|from|omitted|contained|defined|undefined";

export const termBNF = `term                                 ::=   "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement                            ::=   "(" metaArgument ")" 
                                                  
                                       |   equality

                                       |   typeAssertion 
                                                  
                                       |   term defining

                                       |   term containment metaArgument 
                                                  
                                       ;

typeAssertion                        ::=   term ":" type ;
                                       
equality                             ::=   argument "=" argument ;`;

export const metastatementBNF = `metastatement                        ::=   "(" metastatement ")" 
           
                                       |   metaEquality

                                       |   ruleSubproofAssertion         
       
                                       |   term containment metastatement

                                       |   term defining
                                        
                                       |   context

                                       |   metavariable substitution?
       
                                       ;
                                       
metaEquality                         ::=   metastatement "=" metastatement ;

ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

judgement                            ::=   metastatement "⊧" declaration ;

substitution                         ::=   <NO_WHITESPACE>"[" term "for" variable "]" ;
 
containment                          ::=   "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;

defining                             ::=   "is" ( "defined" | "undefined" ) ;

context                              ::=   declaration ( "," declaration )* ;

declaration                          ::=   reference "::" metastatement ;`;

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
