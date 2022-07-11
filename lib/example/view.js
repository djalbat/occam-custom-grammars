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
                    var florenceRules = (0, _rules.rulesFromParser)(florenceParser), multiLine = true, rulesString = rulesAsString(florenceRules, multiLine), florenceBNF = rulesString; ///
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
_defineProperty(View, "initialContent", "Rule (Explosion)\n  Conclusion\n    ρ |- R::S\n  \n");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgQ29tYmluZWRDdXN0b21HcmFtbWFyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgRmxvcmVuY2VCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9mbG9yZW5jZUJORlwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMVwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMlwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21QYXJzZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMikge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMi5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMi5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLFxuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBydWxlTWFwID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgY29uc3QgZmxvcmVuY2VSdWxlcyA9IHJ1bGVzRnJvbVBhcnNlcihmbG9yZW5jZVBhcnNlciksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBmbG9yZW5jZUJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VCTkYoZmxvcmVuY2VCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5jbGVhckZsb3JlbmNlQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBsZXQgcmVhZE9ubHksIGN1c3RvbUdyYW1tYXI7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FOlxuICAgICAgICByZWFkT25seSA9IHRydWU7XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xOlxuICAgICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgICAgICBjdXN0b21HcmFtbWFyID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yOlxuICAgICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgICAgICBjdXN0b21HcmFtbWFyID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEZsb3JlbmNlIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEZsb3JlbmNlQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBpbml0aWFsQ29udGVudDsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgUnVsZSAoRXhwbG9zaW9uKVxuICBDb25jbHVzaW9uXG4gICAgz4EgfC0gUjo6U1xuICBcbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7Il0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJuYW1lIiwiZ2V0TmFtZSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEiLCJzZXRCTkYiLCJzZXRMZXhpY2FsUGF0dGVybiIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyIiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwic3RhcnRSdWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZmxvcmVuY2VSdWxlcyIsInJ1bGVzRnJvbVBhcnNlciIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiZmxvcmVuY2VCTkYiLCJzZXRGbG9yZW5jZUJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJGbG9yZW5jZUJORiIsImNoYW5nZUhhbmRsZXIiLCJyZWFkT25seSIsImN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJOYW1lU2VsZWN0Iiwib25DaGFuZ2UiLCJSdWxlTmFtZVNlbGVjdCIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJGbG9yZW5jZUJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNvbnN0cnVjdG9yIiwic2V0Q29udGVudCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFpTmIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQW5Ob0IsaUJBQWlCO29CQUVmLE1BQU07NEJBQ0MsZUFBZTswQkFDc0IsYUFBYTtxQkFDYyxVQUFVOytEQUVsRixjQUFjO3lEQUNkLGVBQWU7NkRBQ2QsZ0JBQWdCO3dEQUNoQixnQkFBZ0I7NkRBQ2IsbUJBQW1COzREQUNsQixvQkFBb0I7OERBQ2xCLHNCQUFzQjtrRUFDckIsdUJBQXVCO21FQUN0Qix3QkFBd0I7Z0VBQ3hCLHdCQUF3Qjs4RUFDbEIsNkJBQTZCOzhFQUM3Qiw2QkFBNkI7cUJBRW5DLG9CQUFvQjs0QkFDZ0UsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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