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
var operatorPattern = "::|\\[\\[|\\]\\]|\\[|\\]|\\.\\.\\.|\\|=|=|is|in|for|defined|contained|not";
var termBNF = 'term                                 ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion   \n                                                  \n                                       |  subproofAssertion         \n       \n                                       |  judgement\n\n                                       |  metavariable substitution?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  term "is" "not"? "defined" ;\n\ncontainedAssertion                   ::=  term "is" "not"? "contained" "in" statement ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\njudgement                            ::=  metavariable "|=" frame ;\n\nframe                                ::=  ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) ( "," ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) )* ;\n \ndeclaration                          ::=  metavariable "::" statement ;\n\nsubstitution                         ::=  <NO_WHITESPACE>( ( "[" term "for" variable "]" ) | ( "[[" statement "for" metavariable "]]" ) );';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCI6OnxcXFxcW1xcXFxbfFxcXFxdXFxcXF18XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwufFxcXFx8PXw9fGlzfGlufGZvcnxkZWZpbmVkfGNvbnRhaW5lZHxub3RcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0eXBlQXNzZXJ0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGRlZmluZWRBc3NlcnRpb24gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250YWluZWRBc3NlcnRpb24gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAganVkZ2VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG1ldGF2YXJpYWJsZSBzdWJzdGl0dXRpb24/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcImlzXCIgXCJub3RcIj8gXCJkZWZpbmVkXCIgO1xuXG5jb250YWluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiaXNcIiBcIm5vdFwiPyBcImNvbnRhaW5lZFwiIFwiaW5cIiBzdGF0ZW1lbnQgO1xuXG5zdWJwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgKCBcIixcIiBzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBzdGF0ZW1lbnQgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhdmFyaWFibGUgXCJ8PVwiIGZyYW1lIDtcblxuZnJhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBkZWNsYXJhdGlvbiB8ICggXCIuLi5cIjxOT19XSElURVNQQUNFPm1ldGF2YXJpYWJsZSApICkgKCBcIixcIiAoIGRlY2xhcmF0aW9uIHwgKCBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+bWV0YXZhcmlhYmxlICkgKSApKiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhdmFyaWFibGUgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPiggKCBcIltcIiB0ZXJtIFwiZm9yXCIgdmFyaWFibGUgXCJdXCIgKSB8ICggXCJbW1wiIHN0YXRlbWVudCBcImZvclwiIG1ldGF2YXJpYWJsZSBcIl1dXCIgKSApO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkZcbiAgICAgIH07XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG4iXSwibmFtZXMiOlsib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWtFQSxPQUFvQztlQUFwQzs7SUF4RGFBLGVBQWU7ZUFBZkE7O0lBUUFDLFlBQVk7ZUFBWkE7O0lBVkFDLGFBQWE7ZUFBYkE7O0lBSUFDLE9BQU87ZUFBUEE7O0lBTkFDLFdBQVc7ZUFBWEE7OztvRUFKYTs0QkFFa0I7Ozs7OztBQUVyQyxJQUFNQSxjQUFjO0FBRXBCLElBQU1GLGdCQUFnQjtBQUV0QixJQUFNRixrQkFBa0I7QUFFeEIsSUFBTUcsVUFBVztBQU1qQixJQUFNRixlQUFnQjtBQW9DN0IsSUFBTUksT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRyxTQUFBQTtJQUNBRixjQUFBQTtBQUNGO0FBRU4sSUFBTU8sdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=