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
var _temp = require("../temp");
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
            // try {
            // const name = this.getName(),
            //       bnf = this.getBNF(),
            //       pattern = this.getPattern(),
            //       ruleName = this.getRuleName(),
            //       patternName = this.getPatternName();
            // if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME_1) {
            //   userDefinedCustomGrammar1.setBNF(ruleName, bnf);
            //   userDefinedCustomGrammar1.setPattern(patternName, pattern);
            // }
            //
            // if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
            //   userDefinedCustomGrammar2.setBNF(ruleName, bnf);
            //   userDefinedCustomGrammar2.setPattern(patternName, pattern);
            // }
            // const customGrammars = [
            //         userDefinedCustomGrammar1,
            //         userDefinedCustomGrammar2
            //       ],
            //       combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            //       florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            //       florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            var ruleMap = _temp.florenceParser.getRuleMap(), startRuleName = _this.getStartRuleName(), startRule = ruleMap[startRuleName], content = _this.getContent(), tokens = _temp.florenceLexer.tokenise(content), node = _temp.florenceParser.parse(tokens, startRule);
            var parseTree = null;
            if (node !== null) {
                parseTree = node.asParseTree(tokens);
            }
            _this.setParseTree(parseTree);
            var florenceRules = (0, _rules.rulesFromParser)(_temp.florenceParser), multiLine = true, rulesString = rulesAsString(florenceRules, multiLine), florenceBNF = rulesString; ///
            _this.setFlorenceBNF(florenceBNF);
        // } catch (error) {
        //   console.log(error);
        //
        //   this.clearParseTree();
        //
        //   this.clearFlorenceBNF();
        // }
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
                var _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialStartRuleName = _this_constructor.initialStartRuleName;
                var content = initialContent, startRuleName = initialStartRuleName; ///
                this.setContent(content);
                this.setStartRuleName(startRuleName);
                this.changeHandler();
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "initialStartRuleName", "");
_defineProperty(View, "initialContent", "Axiom (PredecessorsOfSuccessorsOfNaturalNumbers)\n  n = predecessor(successor(n))\n");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMsIGRlZmF1bHRDdXN0b21HcmFtbWFyLCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9wYXR0ZXJuXCI7XG5pbXBvcnQgUnVsZU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3J1bGVOYW1lXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXR0ZXJuTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcGF0dGVybk5hbWVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEZsb3JlbmNlQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvZmxvcmVuY2VCTkZcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjFcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjJcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tUGFyc2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIH0gZnJvbSBcIi4uL2dyYW1tYXJOYW1lc1wiO1xuXG5pbXBvcnQgeyBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciB9IGZyb20gXCIuLi90ZW1wXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAvLyB0cnkge1xuICAgICAgLy8gY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgLy8gICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgIC8vICAgICAgIHBhdHRlcm4gPSB0aGlzLmdldFBhdHRlcm4oKSxcbiAgICAgIC8vICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgLy8gICAgICAgcGF0dGVybk5hbWUgPSB0aGlzLmdldFBhdHRlcm5OYW1lKCk7XG5cbiAgICAgIC8vIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xKSB7XG4gICAgICAvLyAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgICAgLy8gICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICAgICAgLy8gfVxuICAgICAgLy9cbiAgICAgIC8vIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yKSB7XG4gICAgICAvLyAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgICAgLy8gICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBjb25zdCBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgIC8vICAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSxcbiAgICAgIC8vICAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMlxuICAgICAgLy8gICAgICAgXSxcbiAgICAgIC8vICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgLy8gICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAvLyAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuXG4gICAgICBjb25zdCBydWxlTWFwID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgY29uc3QgZmxvcmVuY2VSdWxlcyA9IHJ1bGVzRnJvbVBhcnNlcihmbG9yZW5jZVBhcnNlciksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBmbG9yZW5jZUJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VCTkYoZmxvcmVuY2VCTkYpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhckZsb3JlbmNlQk5GKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCBjdXN0b21HcmFtbWFyO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRTpcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzE6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzI6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ3VzdG9tIGdyYW1tYXJcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGF0dGVybk5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8UGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgRmxvcmVuY2UgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8RmxvcmVuY2VCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiXCI7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYEF4aW9tIChQcmVkZWNlc3NvcnNPZlN1Y2Nlc3NvcnNPZk5hdHVyYWxOdW1iZXJzKVxuICBuID0gcHJlZGVjZXNzb3Ioc3VjY2Vzc29yKG4pKVxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicnVsZU1hcCIsImZsb3JlbmNlUGFyc2VyIiwiZ2V0UnVsZU1hcCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwic3RhcnRSdWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJmbG9yZW5jZUxleGVyIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImZsb3JlbmNlUnVsZXMiLCJydWxlc0Zyb21QYXJzZXIiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImZsb3JlbmNlQk5GIiwic2V0RmxvcmVuY2VCTkYiLCJjaGFuZ2VIYW5kbGVyIiwiY3VzdG9tR3JhbW1hciIsIm5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInBhdHRlcm5OYW1lIiwiZ2V0UGF0dGVybk5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIiLCJibmYiLCJnZXRCTkYiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInNldEJORiIsInNldFBhdHRlcm4iLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTmFtZVNlbGVjdCIsIm9uQ2hhbmdlIiwiUnVsZU5hbWVTZWxlY3QiLCJCTkZUZXh0YXJlYSIsIm9uS2V5VXAiLCJQYXR0ZXJuTmFtZVNlbGVjdCIsIlBhdHRlcm5JbnB1dCIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIkZsb3JlbmNlQk5GVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsInNldENvbnRlbnQiLCJzZXRTdGFydFJ1bGVOYW1lIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBME1BOzs7ZUFBQTs7O2tFQXhNc0I7b0JBRUU7NEJBQ087MEJBQ3FDO3FCQUMyQjsrREFFeEU7eURBQ0E7NkRBQ0M7d0RBQ0E7NERBQ0M7NkRBQ0U7NERBQ0M7Z0VBQ0U7OERBQ0E7a0VBQ0M7Z0VBQ0M7OEVBQ007OEVBQ0E7cUJBRU47NEJBQ29GO29CQUV0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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