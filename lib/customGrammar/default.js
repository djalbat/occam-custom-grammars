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
var operatorPattern = "⊧|is|in|for|from|omitted|contained|defined|undefined";
var termBNF = 'term                                 ::=   "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=   "(" metaArgument ")" \n                                                  \n                                       |   typeAssertion \n                                                  \n                                       |   equality\n\n                                       |   argument defining\n\n                                       |   argument containment metaArgument \n                                                  \n                                       ;\n\ntypeAssertion                        ::=   term... ":" type ;\n                                       \nequality                             ::=   argument "=" argument ;';
var metastatementBNF = 'metastatement                        ::=   "(" metastatement ")" \n           \n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   argument defining\n\n                                       |   argument containment metastatement\n\n                                       |   metavariable substitution?\n       \n                                       ;\n\nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "⊧" judgement ;\n\nsubstitution                         ::=   <NO_WHITESPACE>"[" term... "for" variable "]" ;\n\ncontainment                          ::=   "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;\n\ndefining                             ::=   "is" ( "defined" | "undefined" ) ;\n\njudgement                            ::=   reference "::" metastatement ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8aW58Zm9yfGZyb218b21pdHRlZHxjb250YWluZWR8ZGVmaW5lZHx1bmRlZmluZWRcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0eXBlQXNzZXJ0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgYXJndW1lbnQgZGVmaW5pbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGFyZ3VtZW50IGNvbnRhaW5tZW50IG1ldGFBcmd1bWVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtLi4uIFwiOlwiIHR5cGUgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgYXJndW1lbnQgXCI9XCIgYXJndW1lbnQgO2A7XG5cbmV4cG9ydCBjb25zdCBtZXRhc3RhdGVtZW50Qk5GID0gYG1ldGFzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBtZXRhc3RhdGVtZW50IFwiKVwiIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb250ZXh0RGVmaW5pdGlvbiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcHJvb2ZBc3NlcnRpb25cbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBhcmd1bWVudCBkZWZpbmluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgYXJndW1lbnQgY29udGFpbm1lbnQgbWV0YXN0YXRlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlIHN1YnN0aXR1dGlvbj9cbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxucnVsZVN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgIDo6PSAgIFwiW1wiIG1ldGFzdGF0ZW1lbnQgKCBcIixcIiBtZXRhc3RhdGVtZW50ICkqIFwiXVwiIFwiLi4uXCIgbWV0YXN0YXRlbWVudCA7XG5cbmNvbnRleHREZWZpbml0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwiPVwiICgganVkZ2VtZW50IHwgY29udGV4dCApICggXCIsXCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKSogO1xuXG5wcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIuKKp1wiIGp1ZGdlbWVudCA7XG5cbnN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICA8Tk9fV0hJVEVTUEFDRT5cIltcIiB0ZXJtLi4uIFwiZm9yXCIgdmFyaWFibGUgXCJdXCIgO1xuXG5jb250YWlubWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJpc1wiICggKCBcImNvbnRhaW5lZFwiIFwiaW5cIiApIHwgKCBcIm9taXR0ZWRcIiBcImZyb21cIiApICkgO1xuXG5kZWZpbmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJpc1wiICggXCJkZWZpbmVkXCIgfCBcInVuZGVmaW5lZFwiICkgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcmVmZXJlbmNlIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtgO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgIG9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICB9O1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuIl0sIm5hbWVzIjpbIm1ldGFzdGF0ZW1lbnRCTkYiLCJvcGVyYXRvclBhdHRlcm4iLCJzdGF0ZW1lbnRCTkYiLCJzeW1ib2xQYXR0ZXJuIiwidGVybUJORiIsInR5cGVQYXR0ZXJuIiwibmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImpzb24iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNkVBLE9BQW9DO2VBQXBDOztJQTNDYUEsZ0JBQWdCO2VBQWhCQTs7SUF4QkFDLGVBQWU7ZUFBZkE7O0lBUUFDLFlBQVk7ZUFBWkE7O0lBVkFDLGFBQWE7ZUFBYkE7O0lBSUFDLE9BQU87ZUFBUEE7O0lBTkFDLFdBQVc7ZUFBWEE7OztvRUFKYTs0QkFFa0I7Ozs7OztBQUVyQyxJQUFNQSxjQUFjO0FBRXBCLElBQU1GLGdCQUFnQjtBQUV0QixJQUFNRixrQkFBa0I7QUFFeEIsSUFBTUcsVUFBVztBQU1qQixJQUFNRixlQUFnQjtBQWdCdEIsSUFBTUYsbUJBQW9CO0FBOEJqQyxJQUFNTSxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQUQsYUFBQUE7SUFDQUYsZUFBQUE7SUFDQUYsaUJBQUFBO0lBQ0FHLFNBQUFBO0lBQ0FGLGNBQUFBO0lBQ0FGLGtCQUFBQTtBQUNGO0FBRU4sSUFBTVMsdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=