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
                                                  
                                       |   definingAssertion

                                       |   containmentAssertion 
                                                  
                                       ;

equality                             ::=   argument "=" argument ;
                                       
typeAssertion                        ::=   term... ":" type ;

definingAssertion                    ::=   term... "is" ( "defined" | "undefined" ) ;

containmentAssertion                 ::=   term... "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) metaArgument ;`;

export const metastatementBNF = `metastatement                        ::=   "(" metastatement ")" 
           
                                       |   ruleSubproofAssertion         
                                        
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   definingMetaAssertion

                                       |   containmentMetaAssertion

                                       |   metavariable substitution?
       
                                       ;

containmentMetaAssertion             ::=   term... "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) metastatement ;

definingMetaAssertion                ::=   term... "is" ( "defined" | "undefined" ) ;

ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "⊧" judgement ;

substitution                         ::=   <NO_WHITESPACE>"[" term... "for" variable "]" ;

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
