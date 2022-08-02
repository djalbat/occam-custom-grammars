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
        return _defaultCustomGrammar.default;
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
var _defaultCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("./defaultCustomGrammar"));
var _combinedCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("./combinedCustomGrammar"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcnVsZU5hbWVzIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdHRlcm5OYW1lcyB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxleGVyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9sZXhlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4vY29tYmluZWRDdXN0b21HcmFtbWFyXCI7XG4iXSwibmFtZXMiOlsiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwicnVsZU5hbWVzIiwicGF0dGVybk5hbWVzIiwiQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsInBhcnNlcnNVdGlsaXRpZXMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVKQSwyQkFBMkI7ZUFBM0JBLGFBQTJCLDRCQUFBOztJQUVoQkMsU0FBUztlQUFUQSxVQUFTLFFBQUE7O0lBQ1RDLFlBQVk7ZUFBWkEsYUFBWSxRQUFBOztJQUVaQyxhQUFhO2VBQWJBLGNBQWEsUUFBQTs7SUFDYkMsZUFBZTtlQUFmQSxPQUFlLFFBQUE7O0lBQ2ZDLGdCQUFnQjtlQUFoQkEsUUFBZ0IsUUFBQTs7SUFDaEJDLG9CQUFvQjtlQUFwQkEscUJBQW9CLFFBQUE7O0lBQ3BCQyxxQkFBcUI7ZUFBckJBLHNCQUFxQixRQUFBOzs7NEJBVEcsZ0JBQWdCOzhEQUV2QixhQUFhO2lFQUNWLGdCQUFnQjtrRUFFZixpQkFBaUI7MkRBQ2Ysb0JBQW9COzREQUNuQixxQkFBcUI7eUVBQ2pCLHdCQUF3QjswRUFDdkIseUJBQXlCIn0=