"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const termBNF = `term                                 ::=  "(" argument ")"

                                       |  variable 
                                       
                                       ;`;

export const statementBNF = `statement                            ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  judgement

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion  

                                       |  containedAssertion  
                                       
                                       |  satisfiesAssertion

                                       |  subproofAssertion         

                                       |  propertyAssertion  

                                       |  metavariable ( frameSubstitution | termSubstitution )?

                                       ;

equality                             ::=  term "=" term ;

judgement                            ::=  frame "|-" declaration ;

typeAssertion                        ::=  term ":" type ;

definedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );

containedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;

satisfiesAssertion                   ::=  signature "satisfies" metavariable ;  

subproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;

propertyAssertion                    ::=  term "is" ( "a" | "an" ) propertyRelation ;

propertyRelation                     ::=  property "of" term ;

frame                                ::=  "[" declaration ( "," declaration )* "]" ;
 
declaration                          ::=  metavariable ( "::" statement )? ;

termSubstitution                     ::=  "[" term "for" term "]";

frameSubstitution                    ::=  "[" frame "for" frame "]";

statementSubstitution                ::=  "[" statement "for" statement "]";

referenceSubstitution                ::=  "[" reference "for" reference "]";`;

export const typeVocabulary = `_
`;

export const symbolVocabulary = "";

const name = DEFAULT_CUSTOM_GRAMMAR_NAME,
      json = {
        name,
        termBNF,
        statementBNF,
        typeVocabulary,
        symbolVocabulary
      };

const defaultCustomGrammar = CustomGrammar.fromJSON(json);

export default defaultCustomGrammar;
