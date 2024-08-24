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
    default: function() {
        return _default;
    },
    metastatementBNF: function() {
        return metastatementBNF;
    },
    operatorPattern: function() {
        return operatorPattern;
    },
    statementBNF: function() {
        return statementBNF;
    },
    symbolPattern: function() {
        return symbolPattern;
    },
    termBNF: function() {
        return termBNF;
    },
    typePattern: function() {
        return typePattern;
    }
});
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("../customGrammar"));
var _grammarNames = require("../grammarNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typePattern = "Object";
var symbolPattern = "";
var operatorPattern = "⊧|is|in|for|omitted|contained|defined|undefined";
var termBNF = 'term                                 ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  term defining\n\n                                       |  term containment metastatement \n                                                  \n                                       ;\n\nequality                             ::=  argument "=" argument ;\n\ntypeAssertion                        ::=  term ":" type ;\n                                       \ncontainment                          ::=  "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;\n\ndefining                             ::=  "is" ( "defined" | "undefined" ) ;';
var metastatementBNF = 'metastatement                        ::=  "(" metastatement ")" \n           \n                                       |  metaEquality\n\n                                       |  ruleSubproofAssertion         \n       \n                                       |  context\n\n                                       |  judgement\n\n                                       |  statement\n\n                                       |  metavariable substitution?\n       \n                                       ;\n                                       \nmetaEquality                         ::=  metastatement "=" metastatement ;\n\nruleSubproofAssertion                ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontext                              ::=  declaration ( "," declaration )* ;\n\njudgement                            ::=  metastatement "⊧" declaration ;\n \ndeclaration                          ::=  metavariable "::" metastatement ;\n\nsubstitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8aW58Zm9yfG9taXR0ZWR8Y29udGFpbmVkfGRlZmluZWR8dW5kZWZpbmVkXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtIGRlZmluaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm0gY29udGFpbm1lbnQgbWV0YXN0YXRlbWVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGFyZ3VtZW50IFwiPVwiIGFyZ3VtZW50IDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuY29udGFpbm1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJpc1wiICggKCBcImNvbnRhaW5lZFwiIFwiaW5cIiApIHwgKCBcIm9taXR0ZWRcIiBcImZyb21cIiApICkgO1xuXG5kZWZpbmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKSA7YDtcblxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YXN0YXRlbWVudCBcIilcIiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBtZXRhRXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZVN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250ZXh0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlIHN1YnN0aXR1dGlvbj9cbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxubWV0YUVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXN0YXRlbWVudCBcIj1cIiBtZXRhc3RhdGVtZW50IDtcblxucnVsZVN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgbWV0YXN0YXRlbWVudCAoIFwiLFwiIG1ldGFzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuY29udGV4dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgZGVjbGFyYXRpb24gKCBcIixcIiBkZWNsYXJhdGlvbiApKiA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG1ldGFzdGF0ZW1lbnQgXCLiiqdcIiBkZWNsYXJhdGlvbiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhdmFyaWFibGUgXCI6OlwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5zdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIltcIiB0ZXJtIFwiZm9yXCIgdmFyaWFibGUgXCJdXCIgO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgIH07XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG4iXSwibmFtZXMiOlsibWV0YXN0YXRlbWVudEJORiIsIm9wZXJhdG9yUGF0dGVybiIsInN0YXRlbWVudEJORiIsInN5bWJvbFBhdHRlcm4iLCJ0ZXJtQk5GIiwidHlwZVBhdHRlcm4iLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErRUEsT0FBb0M7ZUFBcEM7O0lBekNhQSxnQkFBZ0I7ZUFBaEJBOztJQTVCQUMsZUFBZTtlQUFmQTs7SUFRQUMsWUFBWTtlQUFaQTs7SUFWQUMsYUFBYTtlQUFiQTs7SUFJQUMsT0FBTztlQUFQQTs7SUFOQUMsV0FBVztlQUFYQTs7O29FQUphOzRCQUVrQjs7Ozs7O0FBRXJDLElBQU1BLGNBQWM7QUFFcEIsSUFBTUYsZ0JBQWdCO0FBRXRCLElBQU1GLGtCQUFrQjtBQUV4QixJQUFNRyxVQUFXO0FBTWpCLElBQU1GLGVBQWdCO0FBb0J0QixJQUFNRixtQkFBb0I7QUE0QmpDLElBQU1NLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBRCxhQUFBQTtJQUNBRixlQUFBQTtJQUNBRixpQkFBQUE7SUFDQUcsU0FBQUE7SUFDQUYsY0FBQUE7SUFDQUYsa0JBQUFBO0FBQ0Y7QUFFTixJQUFNUyx1QkFBdUJDLHNCQUFhLENBQUNDLFFBQVEsQ0FBQ0g7SUFFcEQsV0FBZUMifQ==