"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamGrammars = require("occam-grammars");
var _customGrammar = _interopRequireDefault(require("./customGrammar"));
var _grammarNames = require("./grammarNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lexicalPattern = _occamGrammars.defaultCustomGrammar.lexicalPattern, termBNF = _occamGrammars.defaultCustomGrammar.termBNF, expressionBNF = _occamGrammars.defaultCustomGrammar.expressionBNF, statementBNF = _occamGrammars.defaultCustomGrammar.statementBNF, metastatementBNF = _occamGrammars.defaultCustomGrammar.metastatementBNF;
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    "name": name,
    "lexicalPattern": lexicalPattern,
    "termBNF": termBNF,
    "expressionBNF": expressionBNF,
    "statementBNF": statementBNF,
    "metastatementBNF": metastatementBNF
};
var _default = _customGrammar.default.fromJSON(json);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsIm5hbWUiLCJqc29uIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXlCLEdBQWdCLENBQWhCLGNBQWdCO0FBRTNCLEdBQWlCLENBQWpCLGNBQWlCO0FBRUMsR0FBZ0IsQ0FBaEIsYUFBZ0I7Ozs7OztBQUU1RCxHQUFLLENBQUcsY0FBYyxHQU5lLGNBQWdCLHNCQU03QyxjQUFjLEVBQUUsT0FBTyxHQU5NLGNBQWdCLHNCQU03QixPQUFPLEVBQUUsYUFBYSxHQU5ULGNBQWdCLHNCQU1wQixhQUFhLEVBQUUsWUFBWSxHQU52QixjQUFnQixzQkFNTCxZQUFZLEVBQUUsZ0JBQWdCLEdBTnpDLGNBQWdCLHNCQU1TLGdCQUFnQjtBQUU5RSxHQUFLLENBQUMsSUFBSSxHQUprQyxhQUFnQiw4QkFLdEQsSUFBSSxHQUFHLENBQUM7S0FDTixJQUFNLEdBQUUsSUFBSTtLQUNaLGNBQWdCLEdBQUUsY0FBYztLQUNoQyxPQUFTLEdBQUUsT0FBTztLQUNsQixhQUFlLEdBQUUsYUFBYTtLQUM5QixZQUFjLEdBQUUsWUFBWTtLQUM1QixnQkFBa0IsR0FBRSxnQkFBZ0I7QUFDdEMsQ0FBQztlQWRtQixjQUFpQixTQWdCZCxRQUFRLENBQUMsSUFBSSJ9