"use strict";

import CustomGrammar from "./customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "./grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "=";

export const termBNF = `term!                                ::=   variable ;`;

export const statementBNF = `statement!                           ::=   "(" metaArgument ")" 
                                                  
                                       |   argument "=" argument

                                       |   statement "contains" variable

                                       |   variable "undefined"

                                       |   typeInference

                                       |   typeAssertion 
                                                  
                                       ;

typeInference                        ::=   statement "|-" typeAssertion ;

typeAssertion                        ::=   term ":" type ;`;

export const metastatementBNF = `metastatement!                       ::=   "(" metastatement ")" 
           
                                       |   ruleSubproofAssertion         
                                        
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable "contains" variable

                                       |   variable "undefined"

                                       ;

ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "|=" judgement ;
 
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
