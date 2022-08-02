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
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./input/pattern"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("./select/ruleName"));
var _content = /*#__PURE__*/ _interopRequireDefault(require("./textarea/content"));
var _patternName = /*#__PURE__*/ _interopRequireDefault(require("./select/patternName"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interopRequireDefault(require("./input/startRuleName"));
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
                var name = _this.getName(), bnf = _this.getBNF(), pattern = _this.getPattern(), ruleName = _this.getRuleName(), patternName = _this.getPatternName();
                if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1) {
                    _userDefinedCustomGrammar1.default.setBNF(ruleName, bnf);
                    _userDefinedCustomGrammar1.default.setPattern(patternName, pattern);
                }
                if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
                    _userDefinedCustomGrammar2.default.setBNF(ruleName, bnf);
                    _userDefinedCustomGrammar2.default.setPattern(patternName, pattern);
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
            var customGrammar;
            var name = _this.getName(), ruleName = _this.getRuleName(), patternName = _this.getPatternName();
            switch(name){
                case _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME:
                    customGrammar = _index.defaultCustomGrammar;
                    break;
                case _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1:
                    customGrammar = _userDefinedCustomGrammar1.default;
                    break;
                case _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2:
                    customGrammar = _userDefinedCustomGrammar2.default;
                    break;
            }
            var bnf = customGrammar.getBNF(ruleName), pattern = customGrammar.getPattern(patternName);
            _this.setBNF(bnf);
            _this.setPattern(pattern);
        });
        return _this;
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this), changeHandler = this.changeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Custom grammar"), /*#__PURE__*/ React.createElement(_name.default, {
                        onChange: changeHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                        onChange: changeHandler
                    }), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Pattern"), /*#__PURE__*/ React.createElement(_patternName.default, {
                        onChange: changeHandler
                    }), /*#__PURE__*/ React.createElement(_pattern.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgQ29tYmluZWRDdXN0b21HcmFtbWFyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9wYXR0ZXJuXCI7XG5pbXBvcnQgUnVsZU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3J1bGVOYW1lXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXR0ZXJuTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcGF0dGVybk5hbWVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEZsb3JlbmNlQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvZmxvcmVuY2VCTkZcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjFcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjJcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tUGFyc2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIH0gZnJvbSBcIi4uL2dyYW1tYXJOYW1lc1wiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBwYXR0ZXJuID0gdGhpcy5nZXRQYXR0ZXJuKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSkge1xuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIpIHtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMi5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLFxuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBydWxlTWFwID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgY29uc3QgZmxvcmVuY2VSdWxlcyA9IHJ1bGVzRnJvbVBhcnNlcihmbG9yZW5jZVBhcnNlciksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBmbG9yZW5jZUJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VCTkYoZmxvcmVuY2VCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5jbGVhckZsb3JlbmNlQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCBjdXN0b21HcmFtbWFyO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRTpcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzE6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzI6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ3VzdG9tIGdyYW1tYXJcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGF0dGVybk5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8UGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRmxvcmVuY2UgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RmxvcmVuY2VCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgY29uc3QgY29udGVudCA9IGluaXRpYWxDb250ZW50OyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBSdWxlIChFeHBsb3Npb24pXG4gIENvbmNsdXNpb25cbiAgICDPgSB8LSBSOjpTXG4gIFxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibmFtZSIsImdldE5hbWUiLCJibmYiLCJnZXRCTkYiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwYXR0ZXJuTmFtZSIsImdldFBhdHRlcm5OYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIiLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJzdGFydFJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJmbG9yZW5jZVJ1bGVzIiwicnVsZXNGcm9tUGFyc2VyIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJmbG9yZW5jZUJORiIsInNldEZsb3JlbmNlQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckZsb3JlbmNlQk5GIiwiY2hhbmdlSGFuZGxlciIsImN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJOYW1lU2VsZWN0Iiwib25DaGFuZ2UiLCJSdWxlTmFtZVNlbGVjdCIsIkJORlRleHRhcmVhIiwib25LZXlVcCIsIlBhdHRlcm5OYW1lU2VsZWN0IiwiUGF0dGVybklucHV0IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiRmxvcmVuY2VCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJjb25zdHJ1Y3RvciIsInNldENvbnRlbnQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBb01iLFNBSUU7OztlQUpGLFFBSUU7OztrRUF0TW9CLGlCQUFpQjtvQkFFZixNQUFNOzRCQUNDLGVBQWU7MEJBQ3NCLGFBQWE7cUJBQ2MsVUFBVTsrREFFbEYsY0FBYzt5REFDZCxlQUFlOzZEQUNkLGdCQUFnQjt3REFDaEIsZ0JBQWdCOzREQUNmLGlCQUFpQjs2REFDZixtQkFBbUI7NERBQ2xCLG9CQUFvQjtnRUFDbEIsc0JBQXNCOzhEQUN0QixzQkFBc0I7a0VBQ3JCLHVCQUF1QjtnRUFDdEIsd0JBQXdCOzhFQUNsQiw2QkFBNkI7OEVBQzdCLDZCQUE2QjtxQkFFbkMsb0JBQW9COzRCQUNnRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySSxJQUFNLEFBQUVBLGFBQWEsR0FBS0MsYUFBYyxlQUFBLENBQWhDRCxhQUFhLEFBQW1CLEVBQ2xDLEFB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