"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyLayout = require("easy-layout");
var _index = require("../index");
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _name = _interopRequireDefault(require("./select/name"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _ruleName = _interopRequireDefault(require("./select/ruleName"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = _interopRequireDefault(require("./input/startRuleName"));
var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));
var _florenceBNF = _interopRequireDefault(require("./textarea/florenceBNF"));
var _userDefinedCustomGrammar1 = _interopRequireDefault(require("./userDefinedCustomGrammar1"));
var _userDefinedCustomGrammar2 = _interopRequireDefault(require("./userDefinedCustomGrammar2"));
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
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
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
        "\n\n  padding: 1rem;\n  \n"
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
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "keyUpHandler",
            value: function keyUpHandler() {
                try {
                    var name = this.getName();
                    if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1) {
                        var bnf = this.getBNF(), ruleName = this.getRuleName(), lexicalPattern = this.getLexicalPattern();
                        _userDefinedCustomGrammar1.default.setBNF(ruleName, bnf);
                        _userDefinedCustomGrammar1.default.setLexicalPattern(lexicalPattern);
                    }
                    if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
                        var bnf1 = this.getBNF(), ruleName1 = this.getRuleName(), lexicalPattern1 = this.getLexicalPattern();
                        _userDefinedCustomGrammar2.default.setBNF(ruleName1, bnf1);
                        _userDefinedCustomGrammar2.default.setLexicalPattern(lexicalPattern1);
                    }
                    var customGrammars = [
                        _userDefinedCustomGrammar1.default,
                        _userDefinedCustomGrammar2.default
                    ], combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar), ruleMap = florenceParser.getRuleMap(), startRuleName = this.getStartRuleName(), startRule = ruleMap[startRuleName], content = this.getContent(), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens, startRule);
                    var parseTree = null;
                    if (node !== null) {
                        parseTree = node.asParseTree(tokens);
                    }
                    this.setParseTree(parseTree);
                    var florenceRules = (0, _rules).rulesFromParser(florenceParser), multiLine = true, rulesString = (0, _rules).rulesAsString(florenceRules, multiLine), florenceBNF = rulesString; ///
                    this.setFlorenceBNF(florenceBNF);
                } catch (error) {
                    console.log(error);
                    this.clearParseTree();
                    this.clearFlorenceBNF();
                }
            }
        },
        {
            key: "changeHandler",
            value: function changeHandler() {
                var readOnly, customGrammar;
                var name = this.getName(), ruleName = this.getRuleName();
                switch(name){
                    case _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME:
                        readOnly = true;
                        customGrammar = _index.defaultCustomGrammar;
                        break;
                    case _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1:
                        readOnly = false;
                        customGrammar = _userDefinedCustomGrammar1.default;
                        break;
                    case _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2:
                        readOnly = false;
                        customGrammar = _userDefinedCustomGrammar2.default;
                        break;
                }
                var bnf = customGrammar.getBNF(ruleName), lexicalPattern = customGrammar.getLexicalPattern();
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
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Florence BNF"), /*#__PURE__*/ React.createElement(_florenceBNF.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialContent = this.constructor.initialContent;
                var content = initialContent; ///
                this.setContent(content);
                this.changeHandler();
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "initialContent", "Rule (Explosion)\n  Conclusion\n    \u03C1 |- R::S\n  \n");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgQ29tYmluZWRDdXN0b21HcmFtbWFyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgRmxvcmVuY2VCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9mbG9yZW5jZUJORlwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMVwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMlwiO1xuXG5pbXBvcnQgeyBydWxlc0FzU3RyaW5nLCBydWxlc0Zyb21QYXJzZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSkge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yKSB7XG4gICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEsXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIHJ1bGVNYXAgPSBmbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBzdGFydFJ1bGUgPSBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICBjb25zdCBmbG9yZW5jZVJ1bGVzID0gcnVsZXNGcm9tUGFyc2VyKGZsb3JlbmNlUGFyc2VyKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcoZmxvcmVuY2VSdWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGZsb3JlbmNlQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyRmxvcmVuY2VCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIGxldCByZWFkT25seSwgY3VzdG9tR3JhbW1hcjtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUU6XG4gICAgICAgIHJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzE6XG4gICAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzI6XG4gICAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRmxvcmVuY2UgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RmxvcmVuY2VCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgY29uc3QgY29udGVudCA9IGluaXRpYWxDb250ZW50OyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBSdWxlIChFeHBsb3Npb24pXG4gIENvbmNsdXNpb25cbiAgICDPgSB8LSBSOjpTXG4gIFxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDsiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiVmlldyIsImtleVVwSGFuZGxlciIsIm5hbWUiLCJnZXROYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIiLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJzdGFydFJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJmbG9yZW5jZVJ1bGVzIiwicnVsZXNGcm9tUGFyc2VyIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJydWxlc0FzU3RyaW5nIiwiZmxvcmVuY2VCTkYiLCJzZXRGbG9yZW5jZUJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJGbG9yZW5jZUJORiIsImNoYW5nZUhhbmRsZXIiLCJyZWFkT25seSIsImN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJOYW1lU2VsZWN0Iiwib25DaGFuZ2UiLCJSdWxlTmFtZVNlbGVjdCIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJGbG9yZW5jZUJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNvbnN0cnVjdG9yIiwic2V0Q29udGVudCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVmLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUNzQyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFDYyxJQUFBLE1BQVUsV0FBVixVQUFVLENBQUE7QUFFbEYsSUFBQSxXQUFjLGtDQUFkLGNBQWMsRUFBQTtBQUNkLElBQUEsS0FBZSxrQ0FBZixlQUFlLEVBQUE7QUFDZCxJQUFBLFNBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNoQixJQUFBLElBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNiLElBQUEsU0FBbUIsa0NBQW5CLG1CQUFtQixFQUFBO0FBQ2xCLElBQUEsUUFBb0Isa0NBQXBCLG9CQUFvQixFQUFBO0FBQ2xCLElBQUEsVUFBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBQ3JCLElBQUEsY0FBdUIsa0NBQXZCLHVCQUF1QixFQUFB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