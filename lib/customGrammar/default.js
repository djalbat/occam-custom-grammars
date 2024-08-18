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
var statementBNF = 'statement                            ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  term defining\n\n                                       |  term containment metaArgument \n                                                  \n                                       ;\n\nequality                             ::=  argument "=" argument ;\n\ntypeAssertion                        ::=  term ":" type ;\n                                       \ncontainment                          ::=  "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;\n\ndefining                             ::=  "is" ( "defined" | "undefined" ) ;';
var metastatementBNF = 'metastatement                        ::=  "(" metastatement ")" \n           \n                                       |  metaEquality\n\n                                       |  ruleSubproofAssertion         \n       \n                                       |  context\n\n                                       |  judgement\n\n                                       |  statement\n\n                                       |  metavariable substitution?\n       \n                                       ;\n                                       \nmetaEquality                         ::=  metastatement "=" metastatement ;\n\nruleSubproofAssertion                ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontext                              ::=  declaration ( "," declaration )* ;\n\njudgement                            ::=  metastatement "⊧" declaration ;\n \ndeclaration                          ::=  label "::" metastatement ;\n\nsubstitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8aW58Zm9yfG9taXR0ZWR8Y29udGFpbmVkfGRlZmluZWR8dW5kZWZpbmVkXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtIGRlZmluaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm0gY29udGFpbm1lbnQgbWV0YUFyZ3VtZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgYXJndW1lbnQgXCI9XCIgYXJndW1lbnQgO1xuXG50eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiOlwiIHR5cGUgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5jb250YWlubWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcImlzXCIgKCAoIFwiY29udGFpbmVkXCIgXCJpblwiICkgfCAoIFwib21pdHRlZFwiIFwiZnJvbVwiICkgKSA7XG5cbmRlZmluaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiaXNcIiAoIFwiZGVmaW5lZFwiIHwgXCJ1bmRlZmluZWRcIiApIDtgO1xuXG5leHBvcnQgY29uc3QgbWV0YXN0YXRlbWVudEJORiA9IGBtZXRhc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBtZXRhc3RhdGVtZW50IFwiKVwiIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG1ldGFFcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNvbnRleHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAganVkZ2VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN0YXRlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBtZXRhdmFyaWFibGUgc3Vic3RpdHV0aW9uP1xuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5tZXRhRXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhc3RhdGVtZW50IFwiPVwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5ydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBtZXRhc3RhdGVtZW50ICggXCIsXCIgbWV0YXN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5jb250ZXh0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBkZWNsYXJhdGlvbiAoIFwiLFwiIGRlY2xhcmF0aW9uICkqIDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXN0YXRlbWVudCBcIuKKp1wiIGRlY2xhcmF0aW9uIDtcbiBcbmRlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGxhYmVsIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtcblxuc3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCJbXCIgdGVybSBcImZvclwiIHZhcmlhYmxlIFwiXVwiIDtgO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgIG9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICB9O1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuIl0sIm5hbWVzIjpbIm1ldGFzdGF0ZW1lbnRCTkYiLCJvcGVyYXRvclBhdHRlcm4iLCJzdGF0ZW1lbnRCTkYiLCJzeW1ib2xQYXR0ZXJuIiwidGVybUJORiIsInR5cGVQYXR0ZXJuIiwibmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImpzb24iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBK0VBLE9BQW9DO2VBQXBDOztJQXpDYUEsZ0JBQWdCO2VBQWhCQTs7SUE1QkFDLGVBQWU7ZUFBZkE7O0lBUUFDLFlBQVk7ZUFBWkE7O0lBVkFDLGFBQWE7ZUFBYkE7O0lBSUFDLE9BQU87ZUFBUEE7O0lBTkFDLFdBQVc7ZUFBWEE7OztvRUFKYTs0QkFFa0I7Ozs7OztBQUVyQyxJQUFNQSxjQUFjO0FBRXBCLElBQU1GLGdCQUFnQjtBQUV0QixJQUFNRixrQkFBa0I7QUFFeEIsSUFBTUcsVUFBVztBQU1qQixJQUFNRixlQUFnQjtBQW9CdEIsSUFBTUYsbUJBQW9CO0FBNEJqQyxJQUFNTSxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQUQsYUFBQUE7SUFDQUYsZUFBQUE7SUFDQUYsaUJBQUFBO0lBQ0FHLFNBQUFBO0lBQ0FGLGNBQUFBO0lBQ0FGLGtCQUFBQTtBQUNGO0FBRU4sSUFBTVMsdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=