'use strict';

const statementDefaultBNF = `


     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   nonsense

                                            ;


`;

module.exports = statementDefaultBNF;
