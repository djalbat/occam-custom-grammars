"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _easyLayout = require("easy-layout");
var _index = require("../index");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  padding: 1rem;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var florenceLexerFromCombinedCustomGrammar = _index.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _index.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
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
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
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
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCIuLi9zcmMvY29tYmluZWRDdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIENvbWJpbmVkQ3VzdG9tR3JhbW1hciwgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9uYW1lXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgUnVsZU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3J1bGVOYW1lXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBDb21iaW5lZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbWJpbmVkQk5GXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzXCJcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGluaXRpYWxDb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZU1hcCA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyA9IE9iamVjdC52YWx1ZXMoY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZU1hcCksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgcnVsZU1hcCA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZSA9IHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0sIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIHRoaXMuc2V0Q29tYmluZWRCTkYoY29tYmluZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5jbGVhckNvbWJpbmVkQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSAobmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gcmVhZE9ubHkgPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLFxuICAgICAgICAgIGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29tYmluZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29tYmluZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17a2V5VXBIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQ7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG5gOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRlZmF1bHRDdXN0b21HcmFtbWFyIGZyb20gXCIuL2RlZmF1bHRDdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmluZFJ1bGVCeVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBydWxlc0Zyb21CTkYsIHJ1bGVNYXBGcm9tUnVsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCB7IGxleGljYWxQYXR0ZXJuc0Zyb21DdXN0b21HcmFtbWFycywgYm5mc0Zyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJzXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgRVhQUkVTU0lPTl9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlsdGVyLCB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobGV4aWNhbFBhdHRlcm4sIHJ1bGVNYXApIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuICBcbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFJ1bGVzID0gbWV0YXN0YXRlbWVudFJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgc3RhdGVtZW50UnVsZXMgPSBzdGF0ZW1lbnRSdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGV4cHJlc3Npb25SdWxlcyA9IGV4cHJlc3Npb25SdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIHRlcm1SdWxlcyA9IHRlcm1SdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm5Gcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgLi4ubWV0YXN0YXRlbWVudFJ1bGVzLFxuICAgICAgICAgICAgLi4uc3RhdGVtZW50UnVsZXMsXG4gICAgICAgICAgICAuLi5leHByZXNzaW9uUnVsZXMsXG4gICAgICAgICAgICAuLi50ZXJtUnVsZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIobGV4aWNhbFBhdHRlcm4sIHJ1bGVNYXApO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWV0YXN0YXRlbWVudFJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBtZXRhc3RhdGVtZW50UnVsZU5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICBtZXRhc3RhdGVtZW50UnVsZXMgPSBydWxlc0Zyb21SdWxlTmFtZUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihtZXRhc3RhdGVtZW50UnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gbWV0YXN0YXRlbWVudFJ1bGVzO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRSdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3Qgc3RhdGVtZW50UnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgIHN0YXRlbWVudFJ1bGVzID0gcnVsZXNGcm9tUnVsZU5hbWVDdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoc3RhdGVtZW50UnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gc3RhdGVtZW50UnVsZXM7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25SdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgZXhwcmVzc2lvblJ1bGVOYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvblJ1bGVzID0gcnVsZXNGcm9tUnVsZU5hbWVDdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoZXhwcmVzc2lvblJ1bGVOYW1lLCBjdXN0b21HcmFtbWFycyk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25SdWxlcztcbn1cblxuZnVuY3Rpb24gdGVybVJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCB0ZXJtUnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICB0ZXJtUnVsZXMgPSBydWxlc0Zyb21SdWxlTmFtZUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORih0ZXJtUnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gdGVybVJ1bGVzO1xufVxuXG5mdW5jdGlvbiBsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBsZXhpY2FsUGF0dGVybnMgPSBsZXhpY2FsUGF0dGVybnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuID0gZGVmYXVsdEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgZGVmYXVsdExleGljYWxQYXR0ZXJuID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgbGV4aWNhbFBhdHRlcm5zLnJldmVyc2UoKTtcblxuICBsZXhpY2FsUGF0dGVybnMucHVzaChkZWZhdWx0TGV4aWNhbFBhdHRlcm4pO1xuXG4gIGZpbHRlcihsZXhpY2FsUGF0dGVybnMsIChsZXhpY2FsUGF0dGVybikgPT4ge1xuICAgIGlmIChsZXhpY2FsUGF0dGVybiAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxleGljYWxQYXR0ZXJuc1N0cmluZyA9IGxleGljYWxQYXR0ZXJucy5qb2luKFwifFwiKSwgLy8vXG4gICAgICAgIGxleGljYWxQYXR0ZXJuID0gYF4oPzoke2xleGljYWxQYXR0ZXJuc1N0cmluZ30pYDtcblxuICByZXR1cm4gbGV4aWNhbFBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIHJlbWFpbmluZ1J1bGVzRnJvbVJ1bGVzQW5kTWFpblJ1bGUocnVsZXMsIG1haW5SdWxlKSB7XG4gIGNvbnN0IHJlbWFpbmluZ1J1bGVzID0gcnVsZXMuZmlsdGVyKChydWxlKSA9PiB7XG4gICAgaWYgKHJ1bGUgIT09IG1haW5SdWxlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZW1haW5pbmdSdWxlcztcbn1cblxuZnVuY3Rpb24gbWFpblJ1bGVGcm9tUnVsZU5hbWVEZWZhdWx0Qk5GQW5kQk5GcyhydWxlTmFtZSwgYm5mcykge1xuICBjb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IGRlZmF1bHRDdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSksXG4gICAgICAgIGRlZmF1bHRCTkYgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgLy8vXG4gICAgICAgIGRlZmF1bHRSdWxlcyA9IHJ1bGVzRnJvbUJORihkZWZhdWx0Qk5GKSxcbiAgICAgICAgZGVmYXVsdE1haW5SdWxlID0gZmluZFJ1bGVCeVJ1bGVOYW1lKHJ1bGVOYW1lLCBkZWZhdWx0UnVsZXMpLFxuICAgICAgICBkZWZhdWx0TWFpblJ1bGVEZWZpbml0aW9ucyA9IGRlZmF1bHRNYWluUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGJuZnMuZm9yRWFjaCgoYm5mKSA9PiB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBtYWluUnVsZSA9IGZpbmRSdWxlQnlSdWxlTmFtZShydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIG1haW5SdWxlRGVmaW5pdGlvbnMgPSAobWFpblJ1bGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluUnVsZS5nZXREZWZpbml0aW9ucygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgdW5zaGlmdChkZWZhdWx0TWFpblJ1bGVEZWZpbml0aW9ucywgbWFpblJ1bGVEZWZpbml0aW9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IG1haW5SdWxlID0gZGVmYXVsdE1haW5SdWxlOyAvLy9cblxuICByZXR1cm4gbWFpblJ1bGU7XG59XG5cbmZ1bmN0aW9uIHJlbWFpbmluZ1J1bGVzRnJvbVJ1bGVOYW1lRGVmYXVsdEJORkFuZEJORnMocnVsZU5hbWUsIGJuZnMpIHtcbiAgY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpLFxuICAgICAgICBkZWZhdWx0Qk5GID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYsIC8vL1xuICAgICAgICBkZWZhdWx0UnVsZXMgPSBydWxlc0Zyb21CTkYoZGVmYXVsdEJORiksXG4gICAgICAgIGRlZmF1bHRNYWluUnVsZSA9IGZpbmRSdWxlQnlSdWxlTmFtZShydWxlTmFtZSwgZGVmYXVsdFJ1bGVzKSxcbiAgICAgICAgZGVmYXVsdFJlbWFpbmluZ1J1bGVzID0gcmVtYWluaW5nUnVsZXNGcm9tUnVsZXNBbmRNYWluUnVsZShkZWZhdWx0UnVsZXMsIGRlZmF1bHRNYWluUnVsZSk7XG5cbiAgYm5mcy5mb3JFYWNoKChibmYpID0+IHtcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpLFxuICAgICAgICAgIG1haW5SdWxlID0gZmluZFJ1bGVCeVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlcyksXG4gICAgICAgICAgcmVtYWluaW5nUnVsZXMgPSByZW1haW5pbmdSdWxlc0Zyb21SdWxlc0FuZE1haW5SdWxlKHJ1bGVzLCBtYWluUnVsZSk7XG5cbiAgICB1bnNoaWZ0KGRlZmF1bHRSZW1haW5pbmdSdWxlcywgcmVtYWluaW5nUnVsZXMpO1xuICB9KTtcblxuICBjb25zdCByZW1haW5pbmdSdWxlcyA9IGRlZmF1bHRSZW1haW5pbmdSdWxlczsgLy8vXG5cbiAgcmV0dXJuIHJlbWFpbmluZ1J1bGVzO1xufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21SdWxlTmFtZUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihydWxlTmFtZSwgY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgYm5mcyA9IGJuZnNGcm9tUnVsZU5hbWVBbmRDdXN0b21HcmFtbWFycyhydWxlTmFtZSwgY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICBtYWluUnVsZSA9IG1haW5SdWxlRnJvbVJ1bGVOYW1lRGVmYXVsdEJORkFuZEJORnMocnVsZU5hbWUsIGJuZnMpLFxuICAgICAgICByZW1haW5pbmdSdWxlcyA9IHJlbWFpbmluZ1J1bGVzRnJvbVJ1bGVOYW1lRGVmYXVsdEJORkFuZEJORnMocnVsZU5hbWUsIGJuZnMpLFxuICAgICAgICBydWxlcyA9IFtdLmNvbmNhdChtYWluUnVsZSkuY29uY2F0KHJlbWFpbmluZ1J1bGVzKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiVmlldyIsImluaXRpYWxDb250ZW50IiwiRU1QVFlfU1RSSU5HIiwia2V5VXBIYW5kbGVyIiwibmFtZSIsImdldE5hbWUiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtdWx0aUxpbmUiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyIsInJ1bGVzQXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwic2V0Q29tYmluZWRCTkYiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImNsZWFyQ29tYmluZWRCTkYiLCJjaGFuZ2VIYW5kbGVyIiwicmVhZE9ubHkiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJjdXN0b21HcmFtbWFyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJzZXRCTkZSZWFkT25seSIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTmFtZVNlbGVjdCIsIm9uQ2hhbmdlIiwiUnVsZU5hbWVTZWxlY3QiLCJMZXhpY2FsUGF0dGVybklucHV0Iiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiQ29tYmluZWRCTkZUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCIsImNoZWNrZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldENvbnRlbnQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9w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