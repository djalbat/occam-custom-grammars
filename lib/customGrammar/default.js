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
var operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|is|in|for|defined|contained|not";
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion   \n                                                  \n                                       |  subproofAssertion         \n       \n                                       |  judgement\n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       |  procedureCall         \n\n                                       ;\n\narguments                            ::=  ( term | frame | statement ) ( "," ( term | frame | statement ) )* ;\n\nequality                             ::=  term "=" term ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" "not"? "defined" ;\n\ncontainedAssertion                   ::=  ( frame | term ) "is" "not"? "contained" "in" statement ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\njudgement                            ::=  frame "|-" declaration ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  reference "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nprocedureCall                        ::=  "@"<NO_WHITESPACE>reference<NO_WHITESPACE>"(" arguments ")" ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCI6OnxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC58XFxcXHwtfD18QHxpc3xpbnxmb3J8ZGVmaW5lZHxjb250YWluZWR8bm90XCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGFpbmVkQXNzZXJ0aW9uICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBtZXRhdmFyaWFibGUgKCBmcmFtZVN1YnN0aXR1dGlvbiB8IHRlcm1TdWJzdGl0dXRpb24gKT9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJvY2VkdXJlQ2FsbCAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmFyZ3VtZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggdGVybSB8IGZyYW1lIHwgc3RhdGVtZW50ICkgKCBcIixcIiAoIHRlcm0gfCBmcmFtZSB8IHN0YXRlbWVudCApICkqIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgXCJub3RcIj8gXCJkZWZpbmVkXCIgO1xuXG5jb250YWluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgOjo9ICAoIGZyYW1lIHwgdGVybSApIFwiaXNcIiBcIm5vdFwiPyBcImNvbnRhaW5lZFwiIFwiaW5cIiBzdGF0ZW1lbnQgO1xuXG5zdWJwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgKCBcIixcIiBzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBzdGF0ZW1lbnQgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBmcmFtZSBcInwtXCIgZGVjbGFyYXRpb24gO1xuXG5mcmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSAoIFwiLFwiICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSApKiApPyBcIl1cIiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICByZWZlcmVuY2UgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnRlcm1TdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHRlcm0gXCJmb3JcIiB0ZXJtIFwiXVwiO1xuXG5mcmFtZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBmcmFtZSBcImZvclwiIGZyYW1lIFwiXVwiO1xuXG5yZWZlcmVuY2VTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiByZWZlcmVuY2UgXCJmb3JcIiByZWZlcmVuY2UgXCJdXCI7XG5cbnN0YXRlbWVudFN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCBcImZvclwiIHN0YXRlbWVudCBcIl1cIjtcblxucHJvY2VkdXJlQ2FsbCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJAXCI8Tk9fV0hJVEVTUEFDRT5yZWZlcmVuY2U8Tk9fV0hJVEVTUEFDRT5cIihcIiBhcmd1bWVudHMgXCIpXCIgO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkZcbiAgICAgIH07XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG4iXSwibmFtZXMiOlsib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThFQSxPQUFvQztlQUFwQzs7SUFwRWFBLGVBQWU7ZUFBZkE7O0lBUUFDLFlBQVk7ZUFBWkE7O0lBVkFDLGFBQWE7ZUFBYkE7O0lBSUFDLE9BQU87ZUFBUEE7O0lBTkFDLFdBQVc7ZUFBWEE7OztvRUFKYTs0QkFFa0I7Ozs7OztBQUVyQyxJQUFNQSxjQUFjO0FBRXBCLElBQU1GLGdCQUFnQjtBQUV0QixJQUFNRixrQkFBa0I7QUFFeEIsSUFBTUcsVUFBVztBQU1qQixJQUFNRixlQUFnQjtBQWdEN0IsSUFBTUksT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRyxTQUFBQTtJQUNBRixjQUFBQTtBQUNGO0FBRU4sSUFBTU8sdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=