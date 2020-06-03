"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _constants = require("../constants");

///
var name = _constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    ///
lexicalPattern = "<=|\\+|\\-|\\||insert|delete|empty",
    termBNF = "                term  ::=  operation\n\n                        |  operator\n                       \n                        |  substring\n\n                        |  stringLength\n\n                        ;\n\n\n           operation  ::=  operator<NO_WHITESPACE>\"(\" term \")\" ;\n\n\n            operator  ::=  \"insert\"<NO_WHITESPACE>\"(\" term \",\" term \")\"\n\n                        |  \"delete\"<NO_WHITESPACE>\"(\" term \",\" term \")\" \n\n                        |  \"empty\"<NO_WHITESPACE>\"(\"<NO_WHITESPACE>\")\"\n\n                        ;\n\n\n           substring  ::=  name<NO_WHITESPACE>\"[\" \"...\" expression \"]\" \n\n                        |  name<NO_WHITESPACE>\"[\" expression \"...\" expression \"]\" \n\n                        |  name<NO_WHITESPACE>\"[\" expression \"...\"  \"]\" \n\n                        ;\n\n\n      stringLength  ::=  \"|\" term \"|\" ;",
    expressionBNF = "          expression  ::=  arithmeticExpression\n\n                        ;\n\n\narithmeticExpression  ::=  addition \n\n                        |  subtraction \n\n                        ;\n\n\n            addition  ::=  expression \"+\" expression ;\n\n         subtraction  ::=  expression \"-\" expression ;",
    statementBNF = "           statement  ::=  lessThanOrEqualTo\n\n                        ;\n\n\n   lessThanOrEqualTo  ::=  expression \"<=\" expression ;",
    metastatementBNF = "",
    json = {
  "name": name,
  "lexicalPattern": lexicalPattern,
  "termBNF": termBNF,
  "expressionBNF": expressionBNF,
  "statementBNF": statementBNF,
  "metastatementBNF": metastatementBNF
},
    userDefinedCustomGrammar = _index.CustomGrammar.fromJSON(json);

var _default = userDefinedCustomGrammar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImpzb24iLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRjBDO0FBSTFDLElBQU1BLElBQUksR0FBR0MsMkNBQWI7QUFBQSxJQUFnRDtBQUMxQ0MsY0FBYyx1Q0FEcEI7QUFBQSxJQUVNQyxPQUFPLHM0QkFGYjtBQUFBLElBbUNNQyxhQUFhLDZUQW5DbkI7QUFBQSxJQWtETUMsWUFBWSw2SUFsRGxCO0FBQUEsSUF3RE1DLGdCQUFnQixLQXhEdEI7QUFBQSxJQXlETUMsSUFBSSxHQUFHO0FBQ0wsVUFBUVAsSUFESDtBQUVMLG9CQUFrQkUsY0FGYjtBQUdMLGFBQVdDLE9BSE47QUFJTCxtQkFBaUJDLGFBSlo7QUFLTCxrQkFBZ0JDLFlBTFg7QUFNTCxzQkFBb0JDO0FBTmYsQ0F6RGI7QUFBQSxJQWlFTUUsd0JBQXdCLEdBQUdDLHFCQUFjQyxRQUFkLENBQXVCSCxJQUF2QixDQWpFakM7O2VBbUVlQyx3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgbmFtZSA9IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FLCAgLy8vXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IGA8PXxcXFxcK3xcXFxcLXxcXFxcfHxpbnNlcnR8ZGVsZXRlfGVtcHR5YCxcbiAgICAgIHRlcm1CTkYgPSBgICAgICAgICAgICAgICAgIHRlcm0gIDo6PSAgb3BlcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9wZXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3Vic3RyaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN0cmluZ0xlbmd0aFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgICAgICAgICBvcGVyYXRpb24gIDo6PSAgb3BlcmF0b3I8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiKVwiIDtcblxuXG4gICAgICAgICAgICBvcGVyYXRvciAgOjo9ICBcImluc2VydFwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIixcIiB0ZXJtIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZGVsZXRlXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiLFwiIHRlcm0gXCIpXCIgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZW1wdHlcIjxOT19XSElURVNQQUNFPlwiKFwiPE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICAgICAgc3Vic3RyaW5nICA6Oj0gIG5hbWU8Tk9fV0hJVEVTUEFDRT5cIltcIiBcIi4uLlwiIGV4cHJlc3Npb24gXCJdXCIgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5hbWU8Tk9fV0hJVEVTUEFDRT5cIltcIiBleHByZXNzaW9uIFwiLi4uXCIgZXhwcmVzc2lvbiBcIl1cIiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgbmFtZTxOT19XSElURVNQQUNFPlwiW1wiIGV4cHJlc3Npb24gXCIuLi5cIiAgXCJdXCIgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICBzdHJpbmdMZW5ndGggIDo6PSAgXCJ8XCIgdGVybSBcInxcIiA7YCxcbiAgICAgIGV4cHJlc3Npb25CTkYgPSBgICAgICAgICAgIGV4cHJlc3Npb24gIDo6PSAgYXJpdGhtZXRpY0V4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbmFyaXRobWV0aWNFeHByZXNzaW9uICA6Oj0gIGFkZGl0aW9uIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBzdWJ0cmFjdGlvbiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICAgICAgIGFkZGl0aW9uICA6Oj0gIGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvbiA7XG5cbiAgICAgICAgIHN1YnRyYWN0aW9uICA6Oj0gIGV4cHJlc3Npb24gXCItXCIgZXhwcmVzc2lvbiA7YCxcbiAgICAgIHN0YXRlbWVudEJORiA9IGAgICAgICAgICAgIHN0YXRlbWVudCAgOjo9ICBsZXNzVGhhbk9yRXF1YWxUb1xuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgbGVzc1RoYW5PckVxdWFsVG8gIDo6PSAgZXhwcmVzc2lvbiBcIjw9XCIgZXhwcmVzc2lvbiA7YCxcbiAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBgYCxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICBcImxleGljYWxQYXR0ZXJuXCI6IGxleGljYWxQYXR0ZXJuLFxuICAgICAgICBcInRlcm1CTkZcIjogdGVybUJORixcbiAgICAgICAgXCJleHByZXNzaW9uQk5GXCI6IGV4cHJlc3Npb25CTkYsXG4gICAgICAgIFwic3RhdGVtZW50Qk5GXCI6IHN0YXRlbWVudEJORixcbiAgICAgICAgXCJtZXRhc3RhdGVtZW50Qk5GXCI6IG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgIH0sXG4gICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXI7XG4iXX0=