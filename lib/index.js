"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        get: all[name],
        enumerable: true
    });
}
_export(exports, {
    CombinedCustomGrammar: function() {
        return _combinedCustomGrammar.default;
    },
    CustomGrammar: function() {
        return _customGrammar.default;
    },
    DEFAULT_CUSTOM_GRAMMAR_NAME: function() {
        return _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME;
    },
    defaultCustomGrammar: function() {
        return _defaultCustomGrammar.default;
    },
    lexersUtilities: function() {
        return _lexers.default;
    },
    parsersUtilities: function() {
        return _parsers.default;
    }
});
var _grammarNames = require("./grammarNames");
var _customGrammar = _interopRequireDefault(require("./customGrammar"));
var _lexers = _interopRequireDefault(require("./utilities/lexers"));
var _parsers = _interopRequireDefault(require("./utilities/parsers"));
var _defaultCustomGrammar = _interopRequireDefault(require("./defaultCustomGrammar"));
var _combinedCustomGrammar = _interopRequireDefault(require("./combinedCustomGrammar"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV4ZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xleGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jb21iaW5lZEN1c3RvbUdyYW1tYXJcIjtcbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJkZWZhdWx0IiwiQ3VzdG9tR3JhbW1hciIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwicGFyc2Vyc1V0aWxpdGllcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQVFPQSxxQkFBcUI7c0NBQWhDQyxPQUFPOztJQUpJQyxhQUFhOzhCQUF4QkQsT0FBTzs7SUFGUEUsMkJBQTJCOzZCQUEzQkEsMkJBQTJCOztJQUtoQkMsb0JBQW9CO3FDQUEvQkgsT0FBTzs7SUFGSUksZUFBZTt1QkFBMUJKLE9BQU87O0lBQ0lLLGdCQUFnQjt3QkFBM0JMLE9BQU87Ozs0QkFKNEIsZ0JBQWdCO29EQUVuQixpQkFBaUI7NkNBQ2Ysb0JBQW9COzhDQUNuQixxQkFBcUI7MkRBQ2pCLHdCQUF3Qjs0REFDdkIseUJBQXlCIn0=