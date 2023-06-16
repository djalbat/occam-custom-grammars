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
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("../customGrammar"));
var _grammarNames = require("../grammarNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typePattern = "Object";
var symbolPattern = "";
var operatorPattern = "⊢|⊧";
var termBNF = "term!                                ::=   variable ;";
var statementBNF = 'statement!                           ::=   "(" metaArgument ")" \n                                                  \n                                       |   argument "=" argument\n\n                                       |   typeInference\n\n                                       |   typeAssertion \n                                                  \n                                       |   variable "undefined"\n\n                                       ;\n\ntypeInference                        ::=   statement "⊢" typeAssertion ;\n\ntypeAssertion                        ::=   term ":" type ;';
var metastatementBNF = 'metastatement!                       ::=   "(" metastatement ")" \n           \n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable ( inclusion | substitution )?\n\n                                       |   metavariable substitution?\n\n                                       |   variable "undefined"\n\n                                       ;\n\nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "⊧" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqJ84oqnXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUluZmVyZW5jZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdmFyaWFibGUgXCJ1bmRlZmluZWRcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnR5cGVJbmZlcmVuY2UgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBzdGF0ZW1lbnQgXCLiiqJcIiB0eXBlQXNzZXJ0aW9uIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0gXCI6XCIgdHlwZSA7YDtcblxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIG1ldGFzdGF0ZW1lbnQgXCIpXCIgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbnRleHREZWZpbml0aW9uIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBwcm9vZkFzc2VydGlvblxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSAoIGluY2x1c2lvbiB8IHN1YnN0aXR1dGlvbiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlIHN1YnN0aXR1dGlvbj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHZhcmlhYmxlIFwidW5kZWZpbmVkXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5ydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCAoIFwiLFwiIG1ldGFzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuY29udGV4dERlZmluaXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCI9XCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKCBcIixcIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSApKiA7XG5cbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwi4oqnXCIganVkZ2VtZW50IDtcbiBcbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICByZWZlcmVuY2UgXCI6OlwiIG1ldGFzdGF0ZW1lbnQgO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgIH07XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG4iXSwibmFtZXMiOlsidHlwZVBhdHRlcm4iLCJzeW1ib2xQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwidGVybUJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNYUEsV0FBVztlQUFYQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsZUFBZTtlQUFmQTs7SUFFQUMsT0FBTztlQUFQQTs7SUFFQUMsWUFBWTtlQUFaQTs7SUFnQkFDLGdCQUFnQjtlQUFoQkE7O0lBcUNiLE9BQW9DO2VBQXBDOzs7b0VBakUwQjs0QkFFa0I7Ozs7OztBQUVyQyxJQUFNTCxjQUFjO0FBRXBCLElBQU1DLGdCQUFnQjtBQUV0QixJQUFNQyxrQkFBa0I7QUFFeEIsSUFBTUMsVUFBVztBQUVqQixJQUFNQyxlQUFnQjtBQWdCdEIsSUFBTUMsbUJBQW9CO0FBd0JqQyxJQUFNQyxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQU4sYUFBQUE7SUFDQUMsZUFBQUE7SUFDQUMsaUJBQUFBO0lBQ0FDLFNBQUFBO0lBQ0FDLGNBQUFBO0lBQ0FDLGtCQUFBQTtBQUNGO0FBRU4sSUFBTUksdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=