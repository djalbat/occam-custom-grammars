'use strict';

const metastatementDefaultBNF = `


     proofAssertion                       ::=   context "⊢" judgement ;
     
     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

     judgement                            ::=   reference "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion 
           
                                            |   contextDefinition 
           
                                            |   subproof 
                                            
                                            |   metavariable 

                                            |   nonsense 

                                            ;

      
`;

module.exports = metastatementDefaultBNF;
