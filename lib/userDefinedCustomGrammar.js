"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _customGrammar = _interopRequireDefault(require("./customGrammar"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    userDefinedCustomGrammar = _customGrammar["default"].fromJSON(json);

var _default = userDefinedCustomGrammar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImpzb24iLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDJDQUFiO0FBQUEsSUFBZ0Q7QUFDMUNDLGNBQWMsdUNBRHBCO0FBQUEsSUFFTUMsT0FBTyxzNEJBRmI7QUFBQSxJQW1DTUMsYUFBYSw2VEFuQ25CO0FBQUEsSUFrRE1DLFlBQVksNklBbERsQjtBQUFBLElBd0RNQyxnQkFBZ0IsS0F4RHRCO0FBQUEsSUF5RE1DLElBQUksR0FBRztBQUNMLFVBQVFQLElBREg7QUFFTCxvQkFBa0JFLGNBRmI7QUFHTCxhQUFXQyxPQUhOO0FBSUwsbUJBQWlCQyxhQUpaO0FBS0wsa0JBQWdCQyxZQUxYO0FBTUwsc0JBQW9CQztBQU5mLENBekRiO0FBQUEsSUFpRU1FLHdCQUF3QixHQUFHQywwQkFBY0MsUUFBZCxDQUF1QkgsSUFBdkIsQ0FqRWpDOztlQW1FZUMsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vY3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gYDw9fFxcXFwrfFxcXFwtfFxcXFx8fGluc2VydHxkZWxldGV8ZW1wdHlgLFxuICAgICAgdGVybUJORiA9IGAgICAgICAgICAgICAgICAgdGVybSAgOjo9ICBvcGVyYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgb3BlcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBzdWJzdHJpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3RyaW5nTGVuZ3RoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgICAgIG9wZXJhdGlvbiAgOjo9ICBvcGVyYXRvcjxOT19XSElURVNQQUNFPlwiKFwiIHRlcm0gXCIpXCIgO1xuXG5cbiAgICAgICAgICAgIG9wZXJhdG9yICA6Oj0gIFwiaW5zZXJ0XCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiLFwiIHRlcm0gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWxldGVcIjxOT19XSElURVNQQUNFPlwiKFwiIHRlcm0gXCIsXCIgdGVybSBcIilcIiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJlbXB0eVwiPE5PX1dISVRFU1BBQ0U+XCIoXCI8Tk9fV0hJVEVTUEFDRT5cIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgICAgICAgICBzdWJzdHJpbmcgIDo6PSAgbmFtZTxOT19XSElURVNQQUNFPlwiW1wiIFwiLi4uXCIgZXhwcmVzc2lvbiBcIl1cIiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgbmFtZTxOT19XSElURVNQQUNFPlwiW1wiIGV4cHJlc3Npb24gXCIuLi5cIiBleHByZXNzaW9uIFwiXVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBuYW1lPE5PX1dISVRFU1BBQ0U+XCJbXCIgZXhwcmVzc2lvbiBcIi4uLlwiICBcIl1cIiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgIHN0cmluZ0xlbmd0aCAgOjo9ICBcInxcIiB0ZXJtIFwifFwiIDtgLFxuICAgICAgZXhwcmVzc2lvbkJORiA9IGAgICAgICAgICAgZXhwcmVzc2lvbiAgOjo9ICBhcml0aG1ldGljRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuYXJpdGhtZXRpY0V4cHJlc3Npb24gIDo6PSAgYWRkaXRpb24gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN1YnRyYWN0aW9uIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgICAgICAgICAgYWRkaXRpb24gIDo6PSAgZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uIDtcblxuICAgICAgICAgc3VidHJhY3Rpb24gIDo6PSAgZXhwcmVzc2lvbiBcIi1cIiBleHByZXNzaW9uIDtgLFxuICAgICAgc3RhdGVtZW50Qk5GID0gYCAgICAgICAgICAgc3RhdGVtZW50ICA6Oj0gIGxlc3NUaGFuT3JFcXVhbFRvXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICBsZXNzVGhhbk9yRXF1YWxUbyAgOjo9ICBleHByZXNzaW9uIFwiPD1cIiBleHByZXNzaW9uIDtgLFxuICAgICAgbWV0YXN0YXRlbWVudEJORiA9IGBgLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogbGV4aWNhbFBhdHRlcm4sXG4gICAgICAgIFwidGVybUJORlwiOiB0ZXJtQk5GLFxuICAgICAgICBcImV4cHJlc3Npb25CTkZcIjogZXhwcmVzc2lvbkJORixcbiAgICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogc3RhdGVtZW50Qk5GLFxuICAgICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogbWV0YXN0YXRlbWVudEJORlxuICAgICAgfSxcbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjtcbiJdfQ==