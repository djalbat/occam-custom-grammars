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
var _typePattern = /*#__PURE__*/ _interopRequireDefault(require("./input/typePattern"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interopRequireDefault(require("./input/startRuleName"));
var _florenceBNF = /*#__PURE__*/ _interopRequireDefault(require("./textarea/florenceBNF"));
var _operatorPattern = /*#__PURE__*/ _interopRequireDefault(require("./input/operatorPattern"));
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
                    var bnf = _this.getBNF(), ruleName = _this.getRuleName(), typePattern = _this.getTypePattern(), operatorPattern = _this.getOperatorPattern();
                    _userDefinedCustomGrammar1.default.setBNF(ruleName, bnf);
                    _userDefinedCustomGrammar1.default.setTypePattern(typePattern);
                    _userDefinedCustomGrammar1.default.setOperatorPattern(operatorPattern);
                }
                if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
                    var bnf1 = _this.getBNF(), ruleName1 = _this.getRuleName(), typePattern1 = _this.getTypePattern(), operatorPattern1 = _this.getOperatorPattern();
                    _userDefinedCustomGrammar2.default.setBNF(ruleName1, bnf1);
                    _userDefinedCustomGrammar2.default.setTypePattern(typePattern1);
                    _userDefinedCustomGrammar2.default.setOperatorPattern(operatorPattern1);
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
            var bnf = customGrammar.getBNF(ruleName), typePattern = customGrammar.getTypePattern(), operatorPattern = customGrammar.getOperatorPattern();
            _this.setBNF(bnf);
            _this.setBNFReadOnly(readOnly);
            _this.setTypePattern(typePattern);
            _this.setOperatorPattern(operatorPattern);
            _this.setTypePatternReadOnly(readOnly);
            _this.setOperatorPatternReadOnly(readOnly);
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
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Type pattern"), /*#__PURE__*/ React.createElement(_typePattern.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Operator pattern"), /*#__PURE__*/ React.createElement(_operatorPattern.default, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgQ29tYmluZWRDdXN0b21HcmFtbWFyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgVHlwZVBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC90eXBlUGF0dGVyblwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9zdGFydFJ1bGVOYW1lXCI7XG5pbXBvcnQgRmxvcmVuY2VCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9mbG9yZW5jZUJORlwiO1xuaW1wb3J0IE9wZXJhdG9yUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L29wZXJhdG9yUGF0dGVyblwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMVwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMlwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21QYXJzZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSkge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVBhdHRlcm4gPSB0aGlzLmdldFR5cGVQYXR0ZXJuKCksXG4gICAgICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IHRoaXMuZ2V0T3BlcmF0b3JQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRUeXBlUGF0dGVybih0eXBlUGF0dGVybik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRPcGVyYXRvclBhdHRlcm4ob3BlcmF0b3JQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy5nZXRUeXBlUGF0dGVybigpLFxuICAgICAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSB0aGlzLmdldE9wZXJhdG9yUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0VHlwZVBhdHRlcm4odHlwZVBhdHRlcm4pO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0T3BlcmF0b3JQYXR0ZXJuKG9wZXJhdG9yUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLFxuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBydWxlTWFwID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgY29uc3QgZmxvcmVuY2VSdWxlcyA9IHJ1bGVzRnJvbVBhcnNlcihmbG9yZW5jZVBhcnNlciksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBmbG9yZW5jZUJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VCTkYoZmxvcmVuY2VCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5jbGVhckZsb3JlbmNlQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCByZWFkT25seSwgY3VzdG9tR3JhbW1hcjtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUU6XG4gICAgICAgIHJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzE6XG4gICAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzI6XG4gICAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0VHlwZVBhdHRlcm4oKSxcbiAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldE9wZXJhdG9yUGF0dGVybigpO1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Qk5GUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5zZXRUeXBlUGF0dGVybih0eXBlUGF0dGVybik7XG5cbiAgICB0aGlzLnNldE9wZXJhdG9yUGF0dGVybihvcGVyYXRvclBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRUeXBlUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0T3BlcmF0b3JQYXR0ZXJuUmVhZE9ubHkocmVhZE9ubHkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFR5cGUgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFR5cGVQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE9wZXJhdG9yIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxPcGVyYXRvclBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEZsb3JlbmNlIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEZsb3JlbmNlQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBpbml0aWFsQ29udGVudDsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgUnVsZSAoRXhwbG9zaW9uKVxuICBDb25jbHVzaW9uXG4gICAgz4EgfC0gUjo6U1xuICBcbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm5hbWUiLCJnZXROYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJ0eXBlUGF0dGVybiIsImdldFR5cGVQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwiZ2V0T3BlcmF0b3JQYXR0ZXJuIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSIsInNldEJORiIsInNldFR5cGVQYXR0ZXJuIiwic2V0T3BlcmF0b3JQYXR0ZXJuIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIiLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJzdGFydFJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJmbG9yZW5jZVJ1bGVzIiwicnVsZXNGcm9tUGFyc2VyIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJmbG9yZW5jZUJORiIsInNldEZsb3JlbmNlQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckZsb3JlbmNlQk5GIiwiY2hhbmdlSGFuZGxlciIsInJlYWRPbmx5IiwiY3VzdG9tR3JhbW1hciIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwic2V0Qk5GUmVhZE9ubHkiLCJzZXRUeXBlUGF0dGVyblJlYWRPbmx5Iiwic2V0T3BlcmF0b3JQYXR0ZXJuUmVhZE9ubHkiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTmFtZVNlbGVjdCIsIm9uQ2hhbmdlIiwiUnVsZU5hbWVTZWxlY3QiLCJUeXBlUGF0dGVybklucHV0Iiwib25LZXlVcCIsIk9wZXJhdG9yUGF0dGVybklucHV0IiwiQk5GVGV4dGFyZWEiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJGbG9yZW5jZUJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNvbnN0cnVjdG9yIiwic2V0Q29udGVudCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFpT2IsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQW5Pb0IsaUJBQWlCO29CQUVmLE1BQU07NEJBQ0MsZUFBZTswQkFDc0IsYUFBYTtxQkFDYyxVQUFVOytEQUVsRixjQUFjO3lEQUNkLGVBQWU7NkRBQ2QsZ0JBQWdCO3dEQUNoQixnQkFBZ0I7NkRBQ2IsbUJBQW1COzREQUNsQixvQkFBb0I7Z0VBQ25CLHFCQUFxQjs4REFDcEIsc0JBQXNCO2tFQUNyQix1QkFBdUI7Z0VBQ3RCLHdCQUF3QjtvRUFDdkIseUJBQXlCOzhFQUNwQiw2QkFBNkI7OEVBQzdCLDZCQUE2QjtxQkFFbkMsb0JBQW9COzRCQUNnRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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