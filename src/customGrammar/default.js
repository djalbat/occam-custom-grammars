"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const typePattern = "Object";

export const symbolPattern = "";

export const operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|=|=|is|in|for|defined|contained|not";

export const termBNF = `term.                                ::=  "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement.                           ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion  

                                       |  containedAssertion   
                                                  
                                       |  subproofAssertion         
       
                                       |  judgement

                                       |  metavariable substitution?

                                       ;

equality                             ::=  term "=" term ;

typeAssertion                        ::=  term ":" type ;

definedAssertion                     ::=  ( frame | term ) "is" "not"? "defined" ;

containedAssertion                   ::=  ( frame | term ) "is" "not"? "contained" "in" statement ;

subproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;

judgement                            ::=  frame "|=" declaration ;

frame                                ::=  "[" ( ( metavariable | declaration ) ( "," ( metavariable | declaration ) )* )? "]" ;
 
declaration                          ::=  reference "::" statement ;

substitution                         ::=  "[" ( ( frame "for" frame ) | ( term "for" term ) ) "]";`;

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
