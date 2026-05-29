"use strict";

import CustomGrammar from "../customGrammar";

import { DEFAULT_CUSTOM_GRAMMAR_NAME } from "../grammarNames";

export const termBNF = `term                                 ::=  "(" argument ")"

                                       |  variable termSubstitution?
                                       
                                       ;`;

export const statementBNF = `statement                            ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  judgement

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion  

                                       |  containedAssertion  
                                       
                                       |  signatureAssertion

                                       |  subproofAssertion         

                                       |  propertyAssertion  

                                       |  metavariable ( frameSubstitution | termSubstitution )?

                                       ;`;

export const typeVocabulary = "";

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
