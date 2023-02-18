"use strict"

import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { parserUtilities, BasicParser, CommonParser } from "occam-parsers";
import { lexerUtilities, BasicLexer, CommonLexer, EndOfLineSignificantToken } from "occam-lexers";

const { rulesFromBNF } = parserUtilities,
      { rulesFromEntries } = lexerUtilities;

let rules;

const entries = [
  {
    "special": "^(?:,|::|:|\\|-|\\|=|\\(|\\)|\\[|\\]|\\.\\.\\.)"
  },
  {
    "primary-keyword": "^(?:Axiom)\\b"
  },
  {
    "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

rules = rulesFromEntries(entries);

export const florenceLexer = CommonLexer.fromRules(class extends BasicLexer { static EndOfLineToken = EndOfLineSignificantToken; }, rules); ///

const bnf = ` 
      
  document                             ::=   axiom ;

  axiom                                ::=   "Axiom" "(" label ")" <END_OF_LINE> consequence ;
  
  consequence                          ::=   unqualifiedStatement ;
  
  unqualifiedStatement!                ::=   statement... <END_OF_LINE> ;
  
  argument                             ::=   term | type ;
  
  label                                ::=   [name] ;
  
  statement!                           ::=   argument "=" argument
  
                                         |   statement ( inclusion | substitution )?
                                                    
                                         ;
     
`;

rules = rulesFromBNF(bnf);

rules = eliminateLeftRecursion(rules);  ///

export const florenceParser = CommonParser.fromRules(BasicParser, rules); ///
