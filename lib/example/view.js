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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsIlJvd3NEaXYiLCJDb2x1bW5zRGl2IiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwicGFyc2Vyc1V0aWxpdGllcyIsIkhlYWRpbmciLCJDb2x1bW5EaXYiLCJQYXJhZ3JhcGgiLCJTdWJIZWFkaW5nIiwiTmFtZVNlbGVjdCIsIlNpemVhYmxlRGl2IiwiQk5GVGV4dGFyZWEiLCJSdWxlTmFtZVNlbGVjdCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkNvbWJpbmVkQk5GVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiRU1QVFlfU1RSSU5HIiwicnVsZXNBc1N0cmluZyIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJWaWV3IiwiaW5pdGlhbENvbnRlbnQiLCJrZXlVcEhhbmRsZXIiLCJuYW1lIiwiZ2V0TmFtZSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtdWx0aUxpbmUiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyIsImNvbWJpbmVkQk5GIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwicnVsZU1hcCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwic3RhcnRSdWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsInNldENvbWJpbmVkQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckNvbWJpbmVkQk5GIiwiY2hhbmdlSGFuZGxlciIsInJlYWRPbmx5IiwiY3VzdG9tR3JhbW1hciIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwib25DaGFuZ2UiLCJvbktleVVwIiwiY2hlY2tlZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0Q29udGVudCIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVksR0FBTSxDQUFOLEtBQU07QUFDTSxHQUFhLENBQWIsV0FBYTtBQUNELEdBQXlCLENBQXpCLHNCQUF5QjtBQUNzQixHQUFVLENBQVYsTUFBVTtBQUVyRixHQUFXLENBQVgsUUFBVztBQUNULEdBQWMsQ0FBZCxPQUFjO0FBQ2QsR0FBYSxDQUFiLFVBQWE7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