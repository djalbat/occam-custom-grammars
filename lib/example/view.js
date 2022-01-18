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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgQ29tYmluZWRDdXN0b21HcmFtbWFyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IE5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L25hbWVcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcnVsZU5hbWVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9zdGFydFJ1bGVOYW1lXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IENvbWJpbmVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29tYmluZWRCTkZcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIlxuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBydWxlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuY29uc3QgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaW5pdGlhbENvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlTWFwID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gT2JqZWN0LnZhbHVlcyhjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlTWFwKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcoY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBjb21iaW5lZEJORiA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBydWxlTWFwID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgdGhpcy5zZXRDb21iaW5lZEJORihjb21iaW5lZEJORik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ29tYmluZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWFkT25seSA9IChuYW1lID09PSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSByZWFkT25seSA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIsXG4gICAgICAgICAgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Qk5GUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkocmVhZE9ubHkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb21iaW5lZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb21iaW5lZEJORlRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtrZXlVcEhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmVtb3ZlIG9yIHJlbmFtZSBpbnRlcm1lZGlhdGUgbm9kZXNcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudDtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbmA7Il0sIm5hbWVzIjpbImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiVmlldyIsImluaXRpYWxDb250ZW50Iiwia2V5VXBIYW5kbGVyIiwibmFtZSIsImdldE5hbWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlTWFwIiwiZ2V0UnVsZU1hcCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiT2JqZWN0IiwidmFsdWVzIiwibXVsdGlMaW5lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJzZXRDb21iaW5lZEJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJDb21iaW5lZEJORiIsImNoYW5nZUhhbmRsZXIiLCJyZWFkT25seSIsImN1c3RvbUdyYW1tYXIiLCJzZXRCTkZSZWFkT25seSIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIm9uQ2hhbmdlIiwib25LZXlVcCIsImNoZWNrZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldENvbnRlbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNrQixHQUF5QixDQUF6QixzQkFBeUI7QUFDTCxHQUFhLENBQWIsV0FBYTtBQUNjLEdBQVUsQ0FBVixNQUFVO0FBRW5GLEdBQWEsQ0FBYixVQUFhO0FBQ1osR0FBYyxDQUFkLFdBQWM7QUFDZCxHQUFlLENBQWYsS0FBZTtBQUNkLEdBQWdCLENBQWhCLFNBQWdCO0FBQ2hCLEdBQWdCLENBQWhCLElBQWdCO0FBQ2IsR0FBbUIsQ0FBbkIsU0FBbUI7QUFDbEIsR0FBb0IsQ0FBcEIsUUFBb0I7QUFDbEIsR0FBc0IsQ0FBdEIsVUFBc0I7QUFDckIsR0FBdUIsQ0FBdkIsY0FBdUI7QUFDdEIsR0FBd0IsQ0FBeEIsZUFBd0I7QUFDeEIsR0FBd0IsQ0FBeEIsWUFBd0I7QUFDbkIsR0FBNEIsQ0FBNUIseUJBQTRCO0FBQ2IsR0FBNEMsQ0FBNUMsZ0NBQTRDO0FBRW5FLEdBQWMsQ0FBZCxVQUFjO0FBQ2IsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDNEIsR0FBaUIsQ0FBakIsYUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBK0poRSxDQUcvQjs7Ozs7OztBQWhLQSxHQUFLLENBQUdBLHNDQUFzQyxHQXBCaUQsTUFBVSxpQkFvQmpHQSxzQ0FBc0MsRUFDdENDLHVDQUF1QyxHQXJCZ0QsTUFBVSxrQkFxQmpHQSx1Q0FBdUM7SUFFekNDLElBQUksaUJBQVYsUUFBUTtjQUFGQSxJQUFJ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