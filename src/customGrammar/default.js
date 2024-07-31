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
                                                  
                                       |   containment metaArgument 
                                                  
                                       |   argument defining

                                       |   typeAssertion 
                                                  
                                       |   equality

                                       ;

typeAssertion                        ::=   term... ":" type ;
                                       
equality                             ::=   argument "=" argument ;`;

export const metastatementBNF = `metastatement                        ::=   "(" metastatement ")" 
           
                                       |   ruleSubproofAssertion         
                                        
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   argument defining

                                       |   containment metastatement

                                       |   metavariable substitution?
       
                                       ;

ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "⊧" judgement ;

substitution                         ::=   <NO_WHITESPACE>"[" term... "for" variable "]" ;

containment                          ::=   argument "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;

defining                             ::=   "is" ( "defined" | "undefined" ) ;

judgement                            ::=   reference "::" metastatement ;`;

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
