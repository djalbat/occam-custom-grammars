"use strict";

export default json = [{
  "name": "groups-as-categories",
  "termBNF": "\n\n                term  ::=  ( \"*_\" | \"𝘊_\" | \"𝝻_\" )<NO_WHITESPACE>argument (3) ;\n\n",
  "statementBNF": "",
  "typeVocabulary": "",
  "symbolVocabulary": "*_\n𝝻_\n𝘊_\n"
}, {
  "name": "groups",
  "termBNF": "\n\n                               term  ::=  \"𝘪𝘥𝘦𝘯𝘵𝘪𝘵𝘺\" \"𝘦𝘭𝘦𝘮𝘦𝘯𝘵\" \"of\" argument\n\n                                       |  ( \"𝓮_\" | \"∘_\" )<NO_WHITESPACE>argument     (3)\n\n                                       ;\n\n",
  "statementBNF": "",
  "typeVocabulary": "𝖦𝗋𝗈𝗎𝗉\n𝖨𝖽𝖾𝗇𝗍𝗂𝗍𝗒𝖤𝗅𝖾𝗆𝖾𝗇𝗍\n",
  "symbolVocabulary": "𝓮_\n∘_\n𝘪𝘥𝘦𝘯𝘵𝘪𝘵𝘺\n"
}, {
  "name": "inverses",
  "termBNF": "\n\n                               term  ::=  \"𝘪𝘯𝘷𝘦𝘳𝘴𝘦\" \"of\" argument\n\n                                       |  argument<NO_WHITESPACE>\"⁻¹\"       (2) \n\n                                       ;\n\n",
  "statementBNF": "",
  "typeVocabulary": "𝙸𝚗𝚟𝚎𝚛𝚜𝚎𝚜\n",
  "symbolVocabulary": "⁻¹\n𝘪𝘯𝘷𝘦𝘳𝘴𝘦\n"
}, {
  "name": "composition",
  "termBNF": "\n\n                               term  ::=  \"𝘰𝘱𝘦𝘳𝘢𝘵𝘪𝘰𝘯\" \"of\" argument\n\n                                       |  argument `argument` argument               (1)\n\n                                       ;\n\n",
  "statementBNF": "",
  "typeVocabulary": "𝙲𝚘𝚖𝚙𝚘𝚜𝚒𝚝𝚒𝚘𝚗\n𝖮𝗉𝖾𝗋𝖺𝗍𝗂𝗈𝗇\n",
  "symbolVocabulary": "𝘰𝘱𝘦𝘳𝘢𝘵𝘪𝘰𝘯\n"
}, {
  "name": "collections",
  "termBNF": "\n\n                               term  ::=  \"𝘦𝘭𝘦𝘮𝘦𝘯𝘵\" \"of\" argument ;\n\n",
  "statementBNF": "",
  "typeVocabulary": "𝖢𝗈𝗅𝗅𝖾𝖼𝗍𝗂𝗈𝗇\n𝖤𝗅𝖾𝗆𝖾𝗇𝗍\n",
  "symbolVocabulary": "𝘦𝘭𝘦𝘮𝘦𝘯𝘵\n"
}, {
  "name": "categories",
  "termBNF": "\n\n                term  ::=  ( ( \"𝘪𝘥𝘦𝘯𝘵𝘪𝘵𝘺\"? \"𝘮𝘰𝘳𝘱𝘩𝘪𝘴𝘮\" ) | \"𝘰𝘣𝘫𝘦𝘤𝘵\" ) \"of\" argument\n\n                        |  ( \"𝘥𝘰𝘮𝘢𝘪𝘯\" | \"𝘤𝘰𝘥𝘰𝘮𝘢𝘪𝘯\" )<NO_WHITESPACE>\"(\" argument \")\"\n\n                        |  \"𝘪𝘥_\"<NO_WHITESPACE>argument\n\n                        |  argument ( ( \";\" argument )                  (1)\n\n                                    | ( <NO_WHITESPACE>\"⁻¹\" )           (2) ) \n\n                        ;\n\n",
  "statementBNF": "\n\n            statement  ::=  argument \":\" argument \"⟶\" argument ( \"in\" argument )? ;\n\n",
  "typeVocabulary": "𝖮𝖻𝗃𝖾𝖼𝗍\n𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒\n𝖬𝗈𝗋𝗉𝗁𝗂𝗌𝗆\n",
  "symbolVocabulary": ";\n⟶\n𝘥𝘰𝘮𝘢𝘪𝘯\n𝘤𝘰𝘥𝘰𝘮𝘢𝘪𝘯\n𝘪𝘥_\n𝘰𝘣𝘫𝘦𝘤𝘵\n𝘪𝘥𝘦𝘯𝘵𝘪𝘵𝘺\n𝘮𝘰𝘳𝘱𝘩𝘪𝘴𝘮\n"
}, {
  "name": "equality",
  "termBNF": "",
  "statementBNF": "\n\n            statement  ::=  argument \"=\" argument \"=\" argument ;\n\n",
  "typeVocabulary": "",
  "symbolVocabulary": ""
}, {
  "name": "minimal-propositional-logic",
  "termBNF": "",
  "statementBNF": "\n\n                              statement  ::=  \"¬\"<NO_WHITESPACE>metaArgument (10)\n\n                                           |  metaArgument ( \"∧\" (9) \n\n                                                           | \"∨\" (8) \n\n                                                           | \"⇒\" (7) \n\n                                                           | \"⇐\" (7) \n\n                                                           | \"𝗂𝖿𝖿\" (6) ) metaArgument\n\n                                           ;\n\n",
  "typeVocabulary": "",
  "symbolVocabulary": "¬\n⇒\n⇐\n∧\n∨\n𝗂𝖿𝖿\n"
}];