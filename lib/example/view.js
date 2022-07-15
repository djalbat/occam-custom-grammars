"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamParsers = require("occam-parsers");
var _easyLayout = require("easy-layout");
var _index = require("../index");
var _subHeading = /*#__PURE__*/ _interopRequireDefault(require("./subHeading"));
var _name = /*#__PURE__*/ _interopRequireDefault(require("./select/name"));
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./textarea/bnf"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("./select/ruleName"));
var _content = /*#__PURE__*/ _interopRequireDefault(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interopRequireDefault(require("./input/startRuleName"));
var _lexicalPattern = /*#__PURE__*/ _interopRequireDefault(require("./input/lexicalPattern"));
var _florenceBNF = /*#__PURE__*/ _interopRequireDefault(require("./textarea/florenceBNF"));
var _userDefinedCustomGrammar1 = /*#__PURE__*/ _interopRequireDefault(require("./userDefinedCustomGrammar1"));
var _userDefinedCustomGrammar2 = /*#__PURE__*/ _interopRequireDefault(require("./userDefinedCustomGrammar2"));
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
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var rulesAsString = _occamParsers.rulesUtilities.rulesAsString, florenceLexerFromCombinedCustomGrammar = _index.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _index.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyUpHandler", function(event, element) {
            try {
                var name = _this.getName();
                if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1) {
                    var bnf = _this.getBNF(), ruleName = _this.getRuleName(), lexicalPattern = _this.getLexicalPattern();
                    _userDefinedCustomGrammar1.default.setBNF(ruleName, bnf);
                    _userDefinedCustomGrammar1.default.setLexicalPattern(lexicalPattern);
                }
                if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
                    var bnf1 = _this.getBNF(), ruleName1 = _this.getRuleName(), lexicalPattern1 = _this.getLexicalPattern();
                    _userDefinedCustomGrammar2.default.setBNF(ruleName1, bnf1);
                    _userDefinedCustomGrammar2.default.setLexicalPattern(lexicalPattern1);
                }
                var customGrammars = [
                    _userDefinedCustomGrammar1.default,
                    _userDefinedCustomGrammar2.default
                ], combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar), ruleMap = florenceParser.getRuleMap(), startRuleName = _this.getStartRuleName(), startRule = ruleMap[startRuleName], content = _this.getContent(), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens, startRule);
                var parseTree = null;
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                _this.setParseTree(parseTree);
                var florenceRules = (0, _rules.rulesFromParser)(florenceParser), multiLine = true, rulesString = rulesAsString(florenceRules, multiLine), florenceBNF = rulesString; ///
                _this.setFlorenceBNF(florenceBNF);
            } catch (error) {
                console.log(error);
                _this.clearParseTree();
                _this.clearFlorenceBNF();
            }
        });
        _defineProperty(_assertThisInitialized(_this), "changeHandler", function(event, element) {
            var readOnly, customGrammar;
            var name = _this.getName(), ruleName = _this.getRuleName();
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
            _this.setBNF(bnf);
            _this.setBNFReadOnly(readOnly);
            _this.setLexicalPattern(lexicalPattern);
            _this.setLexicalPatternReadOnly(readOnly);
        });
        return _this;
    }
    _createClass(View, [
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
_defineProperty(View, "initialContent", "Rule (Explosion)\n  Conclusion\n    ρ |- R::S\n  \n");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgQ29tYmluZWRDdXN0b21HcmFtbWFyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgRmxvcmVuY2VCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9mbG9yZW5jZUJORlwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMVwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMlwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21QYXJzZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSkge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yKSB7XG4gICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEsXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIHJ1bGVNYXAgPSBmbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBzdGFydFJ1bGUgPSBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICBjb25zdCBmbG9yZW5jZVJ1bGVzID0gcnVsZXNGcm9tUGFyc2VyKGZsb3JlbmNlUGFyc2VyKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcoZmxvcmVuY2VSdWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGZsb3JlbmNlQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyRmxvcmVuY2VCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgbGV0IHJlYWRPbmx5LCBjdXN0b21HcmFtbWFyO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRTpcbiAgICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICBjdXN0b21HcmFtbWFyID0gZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMTpcbiAgICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjE7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMjpcbiAgICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjI7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Qk5GUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkocmVhZE9ubHkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBGbG9yZW5jZSBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxGbG9yZW5jZUJORlRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBjb25zdCBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFJ1bGUgKEV4cGxvc2lvbilcbiAgQ29uY2x1c2lvblxuICAgIM+BIHwtIFI6OlNcbiAgXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibmFtZSIsImdldE5hbWUiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyMiIsImN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImZsb3JlbmNlUnVsZXMiLCJydWxlc0Zyb21QYXJzZXIiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImZsb3JlbmNlQk5GIiwic2V0RmxvcmVuY2VCTkYiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImNsZWFyRmxvcmVuY2VCTkYiLCJjaGFuZ2VIYW5kbGVyIiwicmVhZE9ubHkiLCJjdXN0b21HcmFtbWFyIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJzZXRCTkZSZWFkT25seSIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTmFtZVNlbGVjdCIsIm9uQ2hhbmdlIiwiUnVsZU5hbWVTZWxlY3QiLCJMZXhpY2FsUGF0dGVybklucHV0Iiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiRmxvcmVuY2VCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJjb25zdHJ1Y3RvciIsInNldENvbnRlbnQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBaU5iLFNBSUU7OztlQUpGLFFBSUU7OztrRUFuTm9CLGlCQUFpQjtvQkFFZixNQUFNOzRCQUNDLGVBQWU7MEJBQ3NCLGFBQWE7cUJBQ2MsVUFBVTsrREFFbEYsY0FBYzt5REFDZCxlQUFlOzZEQUNkLGdCQUFnQjt3REFDaEIsZ0JBQWdCOzZEQUNiLG1CQUFtQjs0REFDbEIsb0JBQW9COzhEQUNsQixzQkFBc0I7a0VBQ3JCLHVCQUF1QjttRUFDdEIsd0JBQXdCO2dFQUN4Qix3QkFBd0I7OEVBQ2xCLDZCQUE2Qjs4RUFDN0IsNkJBQTZCO3FC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