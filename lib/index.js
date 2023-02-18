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
    DEFAULT_CUSTOM_GRAMMAR_NAME: function() {
        return _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME;
    },
    ruleNames: function() {
        return _ruleNames.default;
    },
    patternNames: function() {
        return _patternNames.default;
    },
    CustomGrammar: function() {
        return _customGrammar.default;
    },
    lexersUtilities: function() {
        return _lexers.default;
    },
    parsersUtilities: function() {
        return _parsers.default;
    },
    defaultCustomGrammar: function() {
        return _default.default;
    },
    CombinedCustomGrammar: function() {
        return _combinedCustomGrammar.default;
    }
});
var _grammarNames = require("./grammarNames");
var _ruleNames = /*#__PURE__*/ _interopRequireDefault(require("./ruleNames"));
var _patternNames = /*#__PURE__*/ _interopRequireDefault(require("./patternNames"));
var _customGrammar = /*#__PURE__*/ _interopRequireDefault(require("./customGrammar"));
var _lexers = /*#__PURE__*/ _interopRequireDefault(require("./utilities/lexers"));
var _parsers = /*#__PURE__*/ _interopRequireDefault(require("./utilities/parsers"));
var _default = /*#__PURE__*/ _interopRequireDefault(require("./customGrammar/default"));
var _combinedCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("./combinedCustomGrammar"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcnVsZU5hbWVzIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdHRlcm5OYW1lcyB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxleGVyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9sZXhlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2NvbWJpbmVkQ3VzdG9tR3JhbW1hclwiO1xuIl0sIm5hbWVzIjpbIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsInJ1bGVOYW1lcyIsInBhdHRlcm5OYW1lcyIsIkN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJwYXJzZXJzVXRpbGl0aWVzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVTQSwyQkFBMkI7ZUFBM0JBLHlDQUEyQjs7SUFFaEJDLFNBQVM7ZUFBVEEsa0JBQVM7O0lBQ1RDLFlBQVk7ZUFBWkEscUJBQVk7O0lBRVpDLGFBQWE7ZUFBYkEsc0JBQWE7O0lBQ2JDLGVBQWU7ZUFBZkEsZUFBZTs7SUFDZkMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBQ2hCQyxvQkFBb0I7ZUFBcEJBLGdCQUFvQjs7SUFDcEJDLHFCQUFxQjtlQUFyQkEsOEJBQXFCOzs7NEJBVEc7OERBRVA7aUVBQ0c7a0VBRUM7MkRBQ0U7NERBQ0M7NERBQ0k7MEVBQ0MifQ==