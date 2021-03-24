"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _constants = require("./constants");
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
Object.defineProperty(exports, "DEFAULT_CUSTOM_GRAMMAR_NAME", {
    enumerable: true,
    get: function() {
        return _constants.DEFAULT_CUSTOM_GRAMMAR_NAME;
    }
});
Object.defineProperty(exports, "CustomGrammar", {
    enumerable: true,
    get: function() {
        return _customGrammar.default;
    }
});
Object.defineProperty(exports, "lexersUtilities", {
    enumerable: true,
    get: function() {
        return _lexers.default;
    }
});
Object.defineProperty(exports, "parsersUtilities", {
    enumerable: true,
    get: function() {
        return _parsers.default;
    }
});
Object.defineProperty(exports, "defaultCustomGrammar", {
    enumerable: true,
    get: function() {
        return _defaultCustomGrammar.default;
    }
});
Object.defineProperty(exports, "CombinedCustomGrammar", {
    enumerable: true,
    get: function() {
        return _combinedCustomGrammar.default;
    }
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV4ZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xleGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jb21iaW5lZEN1c3RvbUdyYW1tYXJcIjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Z0NBRUEsMkJBQUE7OzswQkFBQSwyQkFBQTs7O2dDQUVBLGFBQUE7Ozs4QkFBQSxPQUFBOzs7Z0NBQ0EsZUFBQTs7O3VCQUFBLE9BQUE7OztnQ0FDQSxnQkFBQTs7O3dCQUFBLE9BQUE7OztnQ0FDQSxvQkFBQTs7O3FDQUFBLE9BQUE7OztnQ0FDQSxxQkFBQTs7O3NDQUFBLE9BQUEifQ==