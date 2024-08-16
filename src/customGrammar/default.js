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

                                       |  term containment metaArgument 
                                                  
                                       ;

equality                             ::=  argument "=" argument ;

typeAssertion                        ::=  term ":" type ;
                                       
containment                          ::=  "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;

defining                             ::=  "is" ( "defined" | "undefined" ) ;`;

export const metastatementBNF = `metastatement                        ::=  "(" metastatement ")" 
           
                                       |  metaEquality

                                       |  ruleSubproofAssertion         
       
                                       |  context

                                       |  judgement

                                       |  statement

                                       |  metavariable substitution?
       
                                       ;
                                       
metaEquality                         ::=  metastatement "=" metastatement ;

ruleSubproofAssertion                ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

context                              ::=  declaration ( "," declaration )* ;

judgement                            ::=  metastatement "⊧" declaration ;
 
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
