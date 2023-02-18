"use strict"

import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { parserUtilities, BasicParser, CommonParser } from "occam-parsers";
import { lexerUtilities, BasicLexer, CommonLexer, EndOfLineSignificantToken } from "occam-lexers";

const { rulesFromBNF } = parserUtilities,
      { rulesFromEntries } = lexerUtilities;

let rules;

const entries = [
  {
    "unassigned": "."
  }
];

rules = rulesFromEntries(entries);

export const florenceLexer = CommonLexer.fromRules(class extends BasicLexer { static EndOfLineToken = EndOfLineSignificantToken; }, rules); ///

const bnf = `

  U ::= S... <END_OF_LINE> ;

  S ::= V
  
      | T
  
      | S X?
                 
      ;
  
  T ::= S A ;
  
  V ::= [unassigned] ;
    
`;

rules = rulesFromBNF(bnf);

rules = eliminateLeftRecursion(rules);  ///

export const florenceParser = CommonParser.fromRules(BasicParser, rules); ///
