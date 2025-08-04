"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get statementBNF () {
        return statementBNF;
    },
    get symbolPattern () {
        return symbolPattern;
    },
    get termBNF () {
        return termBNF;
    },
    get typePattern () {
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
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  judgement\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion  \n                                       \n                                       |  satisfiesAssertion\n\n                                       |  subproofAssertion         \n\n                                       |  propertyAssertion  \n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\njudgement                            ::=  frame "|-" declaration ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );\n\ncontainedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;\n\nsatisfiesAssertion                   ::=  ( ( argument "satisfies" ) | ( argument ( "," argument )+ "satisfy" ) ) metavariable ;  \n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\npropertyAssertion                    ::=  term "is" ( "a" | "an" ) propertyRelation ;\n\npropertyRelation                     ::=  property "of" term ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  metavariable "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";';
var typePattern = "_";
var symbolPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|defined|undefined|missing|present";
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    termBNF: termBNF,
    statementBNF: statementBNF,
    typePattern: typePattern,
    symbolPattern: symbolPattern
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudC4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBqdWRnZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGFpbmVkQXNzZXJ0aW9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2F0aXNmaWVzQXNzZXJ0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByb3BlcnR5QXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlICggZnJhbWVTdWJzdGl0dXRpb24gfCB0ZXJtU3Vic3RpdHV0aW9uICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgZnJhbWUgXCJ8LVwiIGRlY2xhcmF0aW9uIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKTtcblxuY29udGFpbmVkQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcInByZXNlbnRcIiB8IFwibWlzc2luZ1wiICkgXCJpblwiIHN0YXRlbWVudCA7XG5cbnNhdGlzZmllc0Fzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gICggKCBhcmd1bWVudCBcInNhdGlzZmllc1wiICkgfCAoIGFyZ3VtZW50ICggXCIsXCIgYXJndW1lbnQgKSsgXCJzYXRpc2Z5XCIgKSApIG1ldGF2YXJpYWJsZSA7ICBcblxuc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgc3RhdGVtZW50ICggXCIsXCIgc3RhdGVtZW50ICkqIFwiXVwiIFwiLi4uXCIgc3RhdGVtZW50IDtcblxucHJvcGVydHlBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcImlzXCIgKCBcImFcIiB8IFwiYW5cIiApIHByb3BlcnR5UmVsYXRpb24gO1xuXG5wcm9wZXJ0eVJlbGF0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBwcm9wZXJ0eSBcIm9mXCIgdGVybSA7XG5cbmZyYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiICggKCBkZWNsYXJhdGlvbiB8IG1ldGF2YXJpYWJsZSApICggXCIsXCIgKCBkZWNsYXJhdGlvbiB8IG1ldGF2YXJpYWJsZSApICkqICk/IFwiXVwiIDtcbiBcbmRlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG1ldGF2YXJpYWJsZSBcIjo6XCIgc3RhdGVtZW50IDtcblxudGVybVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgdGVybSBcImZvclwiIHRlcm0gXCJdXCI7XG5cbmZyYW1lU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIGZyYW1lIFwiZm9yXCIgZnJhbWUgXCJdXCI7XG5cbnN0YXRlbWVudFN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCBcImZvclwiIHN0YXRlbWVudCBcIl1cIjtcblxucmVmZXJlbmNlU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgcmVmZXJlbmNlIFwiZm9yXCIgcmVmZXJlbmNlIFwiXVwiO2A7XG5cbmV4cG9ydCBjb25zdCB0eXBlUGF0dGVybiA9IFwiX1wiO1xuXG5leHBvcnQgY29uc3Qgc3ltYm9sUGF0dGVybiA9IFwiOjp8XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwufFxcXFx8LXw9fGRlZmluZWR8dW5kZWZpbmVkfG1pc3Npbmd8cHJlc2VudFwiO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVyblxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRCTkYiLCJzeW1ib2xQYXR0ZXJuIiwidGVybUJORiIsInR5cGVQYXR0ZXJuIiwibmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImpzb24iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0VBO2VBQUE7O1FBbkVhQTtlQUFBQTs7UUFzREFDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7O29FQTlEYTs0QkFFa0I7Ozs7OztBQUVyQyxJQUFNRCxVQUFXO0FBTWpCLElBQU1GLGVBQWdCO0FBb0R0QixJQUFNRyxjQUFjO0FBRXBCLElBQU1GLGdCQUFnQjtBQUU3QixJQUFNRyxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQUYsU0FBQUE7SUFDQUYsY0FBQUE7SUFDQUcsYUFBQUE7SUFDQUYsZUFBQUE7QUFDRjtBQUVOLElBQU1NLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9