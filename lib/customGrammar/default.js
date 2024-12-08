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
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion   \n                                                  \n                                       |  subproofAssertion         \n\n                                       |  procedureCall         \n       \n                                       |  judgement\n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "not"? "defined" ;\n\ncontainedAssertion                   ::=  ( frame | term ) "not"? "contained" "in" statement ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\nprocedureCall                        ::=  "@"<NO_WHITESPACE>reference<NO_WHITESPACE>"(" parameter ( "," parameter )* ")" ;\n\njudgement                            ::=  frame "|-" declaration ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  reference "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nparameter                            ::=  statement \n\n                                       |  frame \n                                        \n                                       |  term \n                                        \n                                       ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCI6OnxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC58XFxcXHwtfD18QHxpbnxmb3J8ZGVmaW5lZHxjb250YWluZWR8bm90XCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGFpbmVkQXNzZXJ0aW9uICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJvY2VkdXJlQ2FsbCAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAganVkZ2VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG1ldGF2YXJpYWJsZSAoIGZyYW1lU3Vic3RpdHV0aW9uIHwgdGVybVN1YnN0aXR1dGlvbiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI9XCIgdGVybSA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI6XCIgdHlwZSA7XG5cbmRlZmluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gICggZnJhbWUgfCB0ZXJtICkgXCJub3RcIj8gXCJkZWZpbmVkXCIgO1xuXG5jb250YWluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgOjo9ICAoIGZyYW1lIHwgdGVybSApIFwibm90XCI/IFwiY29udGFpbmVkXCIgXCJpblwiIHN0YXRlbWVudCA7XG5cbnN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCAoIFwiLFwiIHN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIHN0YXRlbWVudCA7XG5cbnByb2NlZHVyZUNhbGwgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiQFwiPE5PX1dISVRFU1BBQ0U+cmVmZXJlbmNlPE5PX1dISVRFU1BBQ0U+XCIoXCIgcGFyYW1ldGVyICggXCIsXCIgcGFyYW1ldGVyICkqIFwiKVwiIDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgZnJhbWUgXCJ8LVwiIGRlY2xhcmF0aW9uIDtcblxuZnJhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgKCAoIGRlY2xhcmF0aW9uIHwgbWV0YXZhcmlhYmxlICkgKCBcIixcIiAoIGRlY2xhcmF0aW9uIHwgbWV0YXZhcmlhYmxlICkgKSogKT8gXCJdXCIgO1xuIFxuZGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgcmVmZXJlbmNlIFwiOjpcIiBzdGF0ZW1lbnQgO1xuXG50ZXJtU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiB0ZXJtIFwiZm9yXCIgdGVybSBcIl1cIjtcblxuZnJhbWVTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgZnJhbWUgXCJmb3JcIiBmcmFtZSBcIl1cIjtcblxucmVmZXJlbmNlU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgcmVmZXJlbmNlIFwiZm9yXCIgcmVmZXJlbmNlIFwiXVwiO1xuXG5zdGF0ZW1lbnRTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgXCJmb3JcIiBzdGF0ZW1lbnQgXCJdXCI7XG5cbnBhcmFtZXRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHN0YXRlbWVudCBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZnJhbWUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkZcbiAgICAgIH07XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG4iXSwibmFtZXMiOlsib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9GQSxPQUFvQztlQUFwQzs7SUExRWFBLGVBQWU7ZUFBZkE7O0lBUUFDLFlBQVk7ZUFBWkE7O0lBVkFDLGFBQWE7ZUFBYkE7O0lBSUFDLE9BQU87ZUFBUEE7O0lBTkFDLFdBQVc7ZUFBWEE7OztvRUFKYTs0QkFFa0I7Ozs7OztBQUVyQyxJQUFNQSxjQUFjO0FBRXBCLElBQU1GLGdCQUFnQjtBQUV0QixJQUFNRixrQkFBa0I7QUFFeEIsSUFBTUcsVUFBVztBQU1qQixJQUFNRixlQUFnQjtBQXNEN0IsSUFBTUksT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRyxTQUFBQTtJQUNBRixjQUFBQTtBQUNGO0FBRU4sSUFBTU8sdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=