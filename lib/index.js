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
    get CombinedCustomGrammar () {
        return _combined.default;
    },
    get CustomGrammar () {
        return _customGrammar.default;
    },
    get DEFAULT_CUSTOM_GRAMMAR_NAME () {
        return _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME;
    },
    get customGrammarUtilities () {
        return _customGrammar1.default;
    },
    get defaultCustomGrammar () {
        return _default.default;
    },
    get lexersUtilities () {
        return _lexers.default;
    },
    get parsersUtilities () {
        return _parsers.default;
    },
    get ruleNames () {
        return _ruleNames.default;
    },
    get vocabularyNames () {
        return _vocabularyNames.default;
    }
});
var _grammarNames = require("./grammarNames");
var _ruleNames = /*#__PURE__*/ _interop_require_default(require("./ruleNames"));
var _vocabularyNames = /*#__PURE__*/ _interop_require_default(require("./vocabularyNames"));
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("./customGrammar"));
var _default = /*#__PURE__*/ _interop_require_default(require("./customGrammar/default"));
var _combined = /*#__PURE__*/ _interop_require_default(require("./customGrammar/combined"));
var _lexers = /*#__PURE__*/ _interop_require_default(require("./utilities/lexers"));
var _parsers = /*#__PURE__*/ _interop_require_default(require("./utilities/parsers"));
var _customGrammar1 = /*#__PURE__*/ _interop_require_default(require("./utilities/customGrammar"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcnVsZU5hbWVzIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZvY2FidWxhcnlOYW1lcyB9IGZyb20gXCIuL3ZvY2FidWxhcnlOYW1lc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXIvY29tYmluZWRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXhlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbGV4ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFyc2Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXN0b21HcmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJjdXN0b21HcmFtbWFyVXRpbGl0aWVzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJwYXJzZXJzVXRpbGl0aWVzIiwicnVsZU5hbWVzIiwidm9jYWJ1bGFyeU5hbWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFTb0JBO2VBQUFBLGlCQUFxQjs7UUFGckJDO2VBQUFBLHNCQUFhOztRQUx4QkM7ZUFBQUEseUNBQTJCOztRQVdoQkM7ZUFBQUEsdUJBQXNCOztRQUx0QkM7ZUFBQUEsZ0JBQW9COztRQUdwQkM7ZUFBQUEsZUFBZTs7UUFDZkM7ZUFBQUEsZ0JBQWdCOztRQVJoQkM7ZUFBQUEsa0JBQVM7O1FBQ1RDO2VBQUFBLHdCQUFlOzs7NEJBSFM7Z0VBRVA7c0VBQ007b0VBRUY7OERBQ087K0RBQ0M7NkRBRU47OERBQ0M7cUVBQ00ifQ==