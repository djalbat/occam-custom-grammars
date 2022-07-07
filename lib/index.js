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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV4ZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xleGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jb21iaW5lZEN1c3RvbUdyYW1tYXJcIjtcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwicGFyc2Vyc1V0aWxpdGllcyIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRUpBLDJCQUEyQjtlQUEzQkEsYUFBMkIsNEJBQUE7O0lBRWhCQyxhQUFhO2VBQWJBLGNBQWEsUUFBQTs7SUFDYkMsZUFBZTtlQUFmQSxPQUFlLFFBQUE7O0lBQ2ZDLGdCQUFnQjtlQUFoQkEsUUFBZ0IsUUFBQTs7SUFDaEJDLG9CQUFvQjtlQUFwQkEscUJBQW9CLFFBQUE7O0lBQ3BCQyxxQkFBcUI7ZUFBckJBLHNCQUFxQixRQUFBOzs7NEJBTkcsZ0JBQWdCO2tFQUVuQixpQkFBaUI7MkRBQ2Ysb0JBQW9COzREQUNuQixxQkFBcUI7eUVBQ2pCLHdCQUF3QjswRUFDdkIseUJBQXlCIn0=