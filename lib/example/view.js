"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _easyLayout = require("easy-layout");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _index = require("../index");
var _heading = _interopRequireDefault(require("./heading"));
var _column = _interopRequireDefault(require("./div/column"));
var _paragraph = _interopRequireDefault(require("./paragraph"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _name = _interopRequireDefault(require("./select/name"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _ruleName = _interopRequireDefault(require("./select/ruleName"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = _interopRequireDefault(require("./input/startRuleName"));
var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));
var _combinedBNF = _interopRequireDefault(require("./textarea/combinedBNF"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
var _userDefinedCustomGrammar = _interopRequireDefault(require("./userDefinedCustomGrammar"));
var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));
var _constants = require("../constants");
var _rules = require("../utilities/rules");
var _grammarNames = require("../grammarNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
var florenceLexerFromCombinedCustomGrammar = _index.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _index.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var View = /*#__PURE__*/ function(Element1) {
    _inherits(View, Element1);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "initialContent", _constants.EMPTY_STRING);
        return _this;
    }
    _createClass(View, [
        {
            key: "keyUpHandler",
            value: function keyUpHandler() {
                try {
                    var name = this.getName();
                    if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
                        var bnf = this.getBNF(), ruleName = this.getRuleName(), lexicalPattern = this.getLexicalPattern();
                        _userDefinedCustomGrammar.default.setBNF(ruleName, bnf);
                        _userDefinedCustomGrammar.default.setLexicalPattern(lexicalPattern);
                    }
                    var customGrammars = [
                        _userDefinedCustomGrammar.default
                    ], combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars), combinedCustomGrammarRuleMap = combinedCustomGrammar.getRuleMap(), combinedCustomGrammarRules = Object.values(combinedCustomGrammarRuleMap), multiLine = true, combinedCustomGrammarRulesString = (0, _rules).rulesAsString(combinedCustomGrammarRules, multiLine), combinedBNF = combinedCustomGrammarRulesString, florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar), ruleMap = florenceParser.getRuleMap(), startRuleName = this.getStartRuleName(), startRule = ruleMap[startRuleName], content = this.getContent(), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens, startRule);
                    var parseTree = null;
                    if (node !== null) {
                        var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();
                        if (removeOrRenameIntermediateNodesCheckboxChecked) {
                            (0, _occamGrammarUtilities).removeOrRenameIntermediateNodes(node);
                        }
                        parseTree = node.asParseTree(tokens);
                    }
                    this.setParseTree(parseTree);
                    this.setCombinedBNF(combinedBNF);
                } catch (error) {
                    console.log(error);
                    this.clearParseTree();
                    this.clearCombinedBNF();
                }
            }
        },
        {
            key: "changeHandler",
            value: function changeHandler() {
                var name = this.getName(), ruleName = this.getRuleName(), readOnly = name === _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, customGrammar = readOnly ? _index.defaultCustomGrammar : _userDefinedCustomGrammar.default, bnf = customGrammar.getBNF(ruleName), lexicalPattern = customGrammar.getLexicalPattern();
                this.setBNF(bnf);
                this.setBNFReadOnly(readOnly);
                this.setLexicalPattern(lexicalPattern);
                this.setLexicalPatternReadOnly(readOnly);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this), changeHandler = this.changeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_heading.default, null, "Custom grammars example"),
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Name"), /*#__PURE__*/ React.createElement(_name.default, {
                        onChange: changeHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                        onChange: changeHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical pattern"), /*#__PURE__*/ React.createElement(_lexicalPattern.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule name"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
                        onKeyUp: keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_vertical.default, null), /*#__PURE__*/ React.createElement(_column.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Combined BNF"), /*#__PURE__*/ React.createElement(_combinedBNF.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_removeOrRenameIntermediateNodes.default, {
                        onChange: keyUpHandler,
                        checked: true
                    }), "Remove or rename intermediate nodes"))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var content = this.initialContent;
                this.setContent(content);
                this.changeHandler();
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIENvbWJpbmVkQ3VzdG9tR3JhbW1hciwgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IE5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L25hbWVcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcnVsZU5hbWVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9zdGFydFJ1bGVOYW1lXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IENvbWJpbmVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29tYmluZWRCTkZcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi91c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXJcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiXG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJ1bGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4uL2dyYW1tYXJOYW1lc1wiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBpbml0aWFsQ29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVNYXAgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMgPSBPYmplY3QudmFsdWVzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVNYXApLFxuICAgICAgICAgICAgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIHJ1bGVNYXAgPSBmbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBzdGFydFJ1bGUgPSBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICB0aGlzLnNldENvbWJpbmVkQk5GKGNvbWJpbmVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJDb21iaW5lZEJORigpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gKG5hbWUgPT09IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IHJlYWRPbmx5ID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcixcbiAgICAgICAgICBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBDdXN0b20gZ3JhbW1hcnMgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbWJpbmVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbWJpbmVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2tleVVwSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgICBSZW1vdmUgb3IgcmVuYW1lIGludGVybWVkaWF0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmluaXRpYWxDb250ZW50O1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVksR0FBTSxDQUFOLEtBQU07QUFDTSxH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