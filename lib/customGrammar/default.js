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
var operatorPattern = "⊧|is|in|for|defined|contained|not";
var termBNF = 'term                                 ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion\n\n                                       |  containedAssertion \n                                                  \n                                       ;\n\nequality                             ::=  argument "=" argument ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  term "is" "not"? "defined" ;\n                                       \ncontainedAssertion                   ::=  term "is" "not"? "contained" "in" ( metaArgument | metastatement ) ;';
var metastatementBNF = 'metastatement                        ::=  "(" metastatement ")" \n           \n                                       |  subproofAssertion         \n       \n                                       |  frameAssertion\n\n                                       |  metavariable substitution?\n\n                                       ;\n                                       \nsubproofAssertion                    ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\nframeAssertion                       ::=  metavariable "⊧" frame ;\n\nframe                                ::=  ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) ( "," ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) )* ;\n \ndeclaration                          ::=  reference "::" metastatement ;\n\nsubstitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8aW58Zm9yfGRlZmluZWR8Y29udGFpbmVkfG5vdFwiO1xuXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO2A7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZGVmaW5lZEFzc2VydGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250YWluZWRBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudCA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI6XCIgdHlwZSA7XG5cbmRlZmluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCJpc1wiIFwibm90XCI/IFwiZGVmaW5lZFwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuY29udGFpbmVkQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcImlzXCIgXCJub3RcIj8gXCJjb250YWluZWRcIiBcImluXCIgKCBtZXRhQXJndW1lbnQgfCBtZXRhc3RhdGVtZW50ICkgO2A7XG5cbmV4cG9ydCBjb25zdCBtZXRhc3RhdGVtZW50Qk5GID0gYG1ldGFzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFzdGF0ZW1lbnQgXCIpXCIgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGZyYW1lQXNzZXJ0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG1ldGF2YXJpYWJsZSBzdWJzdGl0dXRpb24/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgbWV0YXN0YXRlbWVudCAoIFwiLFwiIG1ldGFzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuZnJhbWVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIFwi4oqnXCIgZnJhbWUgO1xuXG5mcmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoIGRlY2xhcmF0aW9uIHwgKCBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+bWV0YXZhcmlhYmxlICkgKSAoIFwiLFwiICggZGVjbGFyYXRpb24gfCAoIFwiLi4uXCI8Tk9fV0hJVEVTUEFDRT5tZXRhdmFyaWFibGUgKSApICkqIDtcbiBcbmRlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XG5cbnN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiW1wiIHRlcm0gXCJmb3JcIiB2YXJpYWJsZSBcIl1cIiA7YDtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJtZXRhc3RhdGVtZW50Qk5GIiwib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXVFQSxPQUFvQztlQUFwQzs7SUFqQ2FBLGdCQUFnQjtlQUFoQkE7O0lBNUJBQyxlQUFlO2VBQWZBOztJQVFBQyxZQUFZO2VBQVpBOztJQVZBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFvQnRCLElBQU1GLG1CQUFvQjtBQW9CakMsSUFBTU0sT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRyxTQUFBQTtJQUNBRixjQUFBQTtJQUNBRixrQkFBQUE7QUFDRjtBQUVOLElBQU1TLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9