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
var operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|in|for|defined|contained|not";
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion   \n                                                  \n                                       |  subproofAssertion         \n       \n                                       |  judgement\n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       |  procedureCall         \n\n                                       ;\n\narguments                            ::=  ( term | frame | statement ) ( "," ( term | frame | statement ) )* ;\n\nequality                             ::=  term "=" term ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "not"? "defined" ;\n\ncontainedAssertion                   ::=  ( frame | term ) "not"? "contained" "in" statement ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\njudgement                            ::=  frame "|-" declaration ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  reference "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nprocedureCall                        ::=  "@"<NO_WHITESPACE>reference<NO_WHITESPACE>"(" arguments ")" ;';
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern,
    termBNF: termBNF,
    statementBNF: statementBNF
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCI6OnxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC58XFxcXHwtfD18QHxpbnxmb3J8ZGVmaW5lZHxjb250YWluZWR8bm90XCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGFpbmVkQXNzZXJ0aW9uICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBtZXRhdmFyaWFibGUgKCBmcmFtZVN1YnN0aXR1dGlvbiB8IHRlcm1TdWJzdGl0dXRpb24gKT9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJvY2VkdXJlQ2FsbCAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmFyZ3VtZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggdGVybSB8IGZyYW1lIHwgc3RhdGVtZW50ICkgKCBcIixcIiAoIHRlcm0gfCBmcmFtZSB8IHN0YXRlbWVudCApICkqIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcIm5vdFwiPyBcImRlZmluZWRcIiA7XG5cbmNvbnRhaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gICggZnJhbWUgfCB0ZXJtICkgXCJub3RcIj8gXCJjb250YWluZWRcIiBcImluXCIgc3RhdGVtZW50IDtcblxuc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgc3RhdGVtZW50ICggXCIsXCIgc3RhdGVtZW50ICkqIFwiXVwiIFwiLi4uXCIgc3RhdGVtZW50IDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgZnJhbWUgXCJ8LVwiIGRlY2xhcmF0aW9uIDtcblxuZnJhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgKCAoIGRlY2xhcmF0aW9uIHwgbWV0YXZhcmlhYmxlICkgKCBcIixcIiAoIGRlY2xhcmF0aW9uIHwgbWV0YXZhcmlhYmxlICkgKSogKT8gXCJdXCIgO1xuIFxuZGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgcmVmZXJlbmNlIFwiOjpcIiBzdGF0ZW1lbnQgO1xuXG50ZXJtU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiB0ZXJtIFwiZm9yXCIgdGVybSBcIl1cIjtcblxuZnJhbWVTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgZnJhbWUgXCJmb3JcIiBmcmFtZSBcIl1cIjtcblxucmVmZXJlbmNlU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgcmVmZXJlbmNlIFwiZm9yXCIgcmVmZXJlbmNlIFwiXVwiO1xuXG5zdGF0ZW1lbnRTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgXCJmb3JcIiBzdGF0ZW1lbnQgXCJdXCI7XG5cbnByb2NlZHVyZUNhbGwgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiQFwiPE5PX1dISVRFU1BBQ0U+cmVmZXJlbmNlPE5PX1dISVRFU1BBQ0U+XCIoXCIgYXJndW1lbnRzIFwiKVwiIDtgO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgIG9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GXG4gICAgICB9O1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuIl0sIm5hbWVzIjpbIm9wZXJhdG9yUGF0dGVybiIsInN0YXRlbWVudEJORiIsInN5bWJvbFBhdHRlcm4iLCJ0ZXJtQk5GIiwidHlwZVBhdHRlcm4iLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE4RUEsT0FBb0M7ZUFBcEM7O0lBcEVhQSxlQUFlO2VBQWZBOztJQVFBQyxZQUFZO2VBQVpBOztJQVZBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFnRDdCLElBQU1JLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBRCxhQUFBQTtJQUNBRixlQUFBQTtJQUNBRixpQkFBQUE7SUFDQUcsU0FBQUE7SUFDQUYsY0FBQUE7QUFDRjtBQUVOLElBQU1PLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9