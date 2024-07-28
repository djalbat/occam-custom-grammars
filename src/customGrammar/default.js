"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "⊧|is|for|contains|undefined";

export const termBNF = `term                                 ::=   "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement                            ::=   "(" metaArgument ")" 
                                                  
                                       |   typeAssertion 
                                                  
                                       |   equality

                                       ;

typeAssertion                        ::=   term... ":" type ;
                                       
equality                             ::=   argument "=" argument ;`;

export const metastatementBNF = `metastatement                        ::=   "(" metastatement ")" 
           
                                       |   undefinedAssertion

                                       |   ruleSubproofAssertion         
                                        
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable ( containment | substitution )?

                                       ;

undefinedAssertion                   ::=   variable "is" "undefined" ;
 
ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "⊧" judgement ;

judgement                            ::=   reference "::" metastatement ;

containment                          ::=   "contains" variable ;

substitution                         ::=   <NO_WHITESPACE>"[" term... "for" variable "]" ;`;

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
