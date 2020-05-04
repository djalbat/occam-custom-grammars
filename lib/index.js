"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CustomGrammar", {
  enumerable: true,
  get: function get() {
    return _customGrammar["default"];
  }
});
Object.defineProperty(exports, "lexersUtilities", {
  enumerable: true,
  get: function get() {
    return _lexers["default"];
  }
});
Object.defineProperty(exports, "parsersUtilities", {
  enumerable: true,
  get: function get() {
    return _parsers["default"];
  }
});
Object.defineProperty(exports, "CombinedCustomGrammar", {
  enumerable: true,
  get: function get() {
    return _combinedCustomGrammar["default"];
  }
});
Object.defineProperty(exports, "termDefaultBNF", {
  enumerable: true,
  get: function get() {
    return _occamParsers.termDefaultCustonGrammarBNF;
  }
});
Object.defineProperty(exports, "statementDefaultBNF", {
  enumerable: true,
  get: function get() {
    return _occamParsers.statementDefaultCustonGrammarBNF;
  }
});
Object.defineProperty(exports, "expressionDefaultBNF", {
  enumerable: true,
  get: function get() {
    return _occamParsers.expressionDefaultCustonGrammarBNF;
  }
});
Object.defineProperty(exports, "metastatementDefaultBNF", {
  enumerable: true,
  get: function get() {
    return _occamParsers.metastatementDefaultCustonGrammarBNF;
  }
});
Object.defineProperty(exports, "defaultLexicalPattern", {
  enumerable: true,
  get: function get() {
    return _occamLexers.defaultCustomGrammarLexicalPattern;
  }
});

var _customGrammar = _interopRequireDefault(require("./customGrammar"));

var _lexers = _interopRequireDefault(require("./utilities/lexers"));

var _parsers = _interopRequireDefault(require("./utilities/parsers"));

var _combinedCustomGrammar = _interopRequireDefault(require("./combinedCustomGrammar"));

var _occamParsers = require("occam-parsers");

var _occamLexers = require("occam-lexers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxleGVyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9sZXhlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2NvbWJpbmVkQ3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgdGVybURlZmF1bHRDdXN0b25HcmFtbWFyQk5GIGFzIHRlcm1EZWZhdWx0Qk5GLFxuICAgICAgICAgc3RhdGVtZW50RGVmYXVsdEN1c3RvbkdyYW1tYXJCTkYgYXMgc3RhdGVtZW50RGVmYXVsdEJORixcbiAgICAgICAgIGV4cHJlc3Npb25EZWZhdWx0Q3VzdG9uR3JhbW1hckJORiBhcyBleHByZXNzaW9uRGVmYXVsdEJORixcbiAgICAgICAgIG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9uR3JhbW1hckJORiBhcyBtZXRhc3RhdGVtZW50RGVmYXVsdEJORiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuIGFzIGRlZmF1bHRMZXhpY2FsUGF0dGVybiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbiJdfQ==