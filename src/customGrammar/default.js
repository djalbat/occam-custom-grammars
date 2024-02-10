"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "⊧|is|for|omits|contains|undefined";

export const termBNF = `term!                                ::=   variable ;`;

export const statementBNF = `statement!                           ::=   "(" metaArgument ")" 
                                                  
                                       |   equality

                                       |   typeAssertion 
                                                  
                                       |   undefinedAssertion

                                       ;
                                       
equality                             ::=   argument "=" argument ;

typeAssertion                        ::=   term... ":" type ;

undefinedAssertion                   ::=   variable "is" "undefined" ;`;

export const metastatementBNF = `metastatement!                       ::=   "(" metastatement ")" 
           
                                       |   ruleSubproofAssertion         
                                        
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable ( inclusion | substitution )?

                                       |   metavariable substitution?

                                       ;

ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "⊧" judgement ;
 
judgement                            ::=   reference "::" metastatement ;

inclusion                            ::=   ( "omits" | "includes" ) variable ;

substitution                         ::=   "[" term... "for" variable "]" ;`;

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
