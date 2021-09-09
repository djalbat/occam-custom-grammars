"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _grammarNames = require("../grammarNames");
var name = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME, lexicalPattern = "<=|\\+|\\-|\\||insert|delete|empty", termBNF = "                term  ::=  operation\n\n                        |  operator\n                       \n                        |  substring\n\n                        |  stringLength\n\n                        ;\n\n\n           operation  ::=  operator<NO_WHITESPACE>\"(\" term \")\" ;\n\n\n            operator  ::=  \"insert\"<NO_WHITESPACE>\"(\" term \",\" term \")\"\n\n                        |  \"delete\"<NO_WHITESPACE>\"(\" term \",\" term \")\" \n\n                        |  \"empty\"<NO_WHITESPACE>\"(\"<NO_WHITESPACE>\")\"\n\n                        ;\n\n\n           substring  ::=  name<NO_WHITESPACE>\"[\" \"...\" expression \"]\" \n\n                        |  name<NO_WHITESPACE>\"[\" expression \"...\" expression \"]\" \n\n                        |  name<NO_WHITESPACE>\"[\" expression \"...\"  \"]\" \n\n                        ;\n\n\n      stringLength  ::=  \"|\" term \"|\" ;", expressionBNF = "          expression  ::=  arithmeticExpression\n\n                        ;\n\n\narithmeticExpression  ::=  addition \n\n                        |  subtraction \n\n                        ;\n\n\n            addition  ::=  expression \"+\" expression ;\n\n         subtraction  ::=  expression \"-\" expression ;", statementBNF = "           statement  ::=  lessThanOrEqualTo\n\n                        ;\n\n\n   lessThanOrEqualTo  ::=  expression \"<=\" expression ;", metastatementBNF = "", json = {
    "name": name,
    "lexicalPattern": lexicalPattern,
    "termBNF": termBNF,
    "expressionBNF": expressionBNF,
    "statementBNF": statementBNF,
    "metastatementBNF": metastatementBNF
}, userDefinedCustomGrammar = _index.CustomGrammar.fromJSON(json);
var _default = userDefinedCustomGrammar;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJuYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJqc29uIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWtCLEdBQVUsQ0FBVixNQUFVO0FBRVMsR0FBaUIsQ0FBakIsYUFBaUI7QUFFbEUsR0FBSyxDQUFDLElBQUksR0FGdUMsYUFBaUIsbUNBRzVELGNBQWMsSUFBSSxrQ0FBa0MsR0FDcEQsT0FBTyxJQUFJLGk0QkFnQ3NCLEdBQ2pDLGFBQWEsSUFBSSx3VEFjK0IsR0FDaEQsWUFBWSxJQUFJLHdJQUtpQyxHQUNqRCxnQkFBZ0IsT0FDaEIsSUFBSSxHQUFHLENBQUM7S0FDTixJQUFNLEdBQUUsSUFBSTtLQUNaLGNBQWdCLEdBQUUsY0FBYztLQUNoQyxPQUFTLEdBQUUsT0FBTztLQUNsQixhQUFlLEdBQUUsYUFBYTtLQUM5QixZQUFjLEdBQUUsWUFBWTtLQUM1QixnQkFBa0IsR0FBRSxnQkFBZ0I7QUFDdEMsQ0FBQyxFQUNELHdCQUF3QixHQXJFQSxNQUFVLGVBcUVPLFFBQVEsQ0FBQyxJQUFJO2VBRTdDLHdCQUF3QiJ9