"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    typePattern: function() {
        return typePattern;
    },
    symbolPattern: function() {
        return symbolPattern;
    },
    operatorPattern: function() {
        return operatorPattern;
    },
    termBNF: function() {
        return termBNF;
    },
    statementBNF: function() {
        return statementBNF;
    },
    metastatementBNF: function() {
        return metastatementBNF;
    },
    default: function() {
        return _default;
    }
});
var _customGrammar = /*#__PURE__*/ _interopRequireDefault(require("./customGrammar"));
var _grammarNames = require("./grammarNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typePattern = "Object";
var symbolPattern = "";
var operatorPattern = "=";
var termBNF = "term!                                ::=   variable ;";
var statementBNF = 'statement!                           ::=   "(" metaArgument ")" \n                                                  \n                                       |   argument "=" argument\n\n                                       |   typeInference\n\n                                       |   typeAssertion \n                                                  \n                                       |   statement ( inclusion | substitution )?\n                                                  \n                                       |   variable "undefined"\n\n                                       ;\n\ntypeInference                        ::=   statement "|-" typeAssertion ;\n\ntypeAssertion                        ::=   term ":" type ;';
var metastatementBNF = 'metastatement!                       ::=   "(" metastatement ")" \n           \n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable ( inclusion | substitution )?\n\n                                       |   metavariable substitution?\n\n                                       |   variable "undefined"\n\n                                       ;\n\nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|=" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;';
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern,
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vY3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUgfSBmcm9tIFwiLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCI9XCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUluZmVyZW5jZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgc3RhdGVtZW50ICggaW5jbHVzaW9uIHwgc3Vic3RpdHV0aW9uICk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHZhcmlhYmxlIFwidW5kZWZpbmVkXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG50eXBlSW5mZXJlbmNlICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3RhdGVtZW50IFwifC1cIiB0eXBlQXNzZXJ0aW9uIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0gXCI6XCIgdHlwZSA7YDtcblxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIG1ldGFzdGF0ZW1lbnQgXCIpXCIgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbnRleHREZWZpbml0aW9uIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBwcm9vZkFzc2VydGlvblxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSAoIGluY2x1c2lvbiB8IHN1YnN0aXR1dGlvbiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlIHN1YnN0aXR1dGlvbj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHZhcmlhYmxlIFwidW5kZWZpbmVkXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5ydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCAoIFwiLFwiIG1ldGFzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuY29udGV4dERlZmluaXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCI9XCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKCBcIixcIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSApKiA7XG5cbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwifD1cIiBqdWRnZW1lbnQgO1xuIFxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7YDtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJ0eXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxXQUFXO2VBQVhBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxlQUFlO2VBQWZBOztJQUVBQyxPQUFPO2VBQVBBOztJQUVBQyxZQUFZO2VBQVpBOztJQWtCQUMsZ0JBQWdCO2VBQWhCQTs7SUFxQ2IsT0FBb0M7ZUFBcEM7OztrRUFuRTBCOzRCQUVrQjs7Ozs7O0FBRXJDLElBQU1MLGNBQWM7QUFFcEIsSUFBTUMsZ0JBQWdCO0FBRXRCLElBQU1DLGtCQUFrQjtBQUV4QixJQUFNQyxVQUFXO0FBRWpCLElBQU1DLGVBQWdCO0FBa0J0QixJQUFNQyxtQkFBb0I7QUF3QmpDLElBQU1DLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBTixhQUFBQTtJQUNBQyxlQUFBQTtJQUNBQyxpQkFBQUE7SUFDQUMsU0FBQUE7SUFDQUMsY0FBQUE7SUFDQUMsa0JBQUFBO0FBQ0Y7QUFFTixJQUFNSSx1QkFBdUJDLHNCQUFhLENBQUNDLFFBQVEsQ0FBQ0g7SUFFcEQsV0FBZUMifQ==