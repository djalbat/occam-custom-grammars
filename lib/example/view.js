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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _occamparsers = require("occam-parsers");
var _easylayout = require("easy-layout");
var _index = require("../index");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./subHeading"));
var _name = /*#__PURE__*/ _interop_require_default(require("./select/name"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./textarea/bnf"));
var _pattern = /*#__PURE__*/ _interop_require_default(require("./input/pattern"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("./select/ruleName"));
var _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
var _patternName = /*#__PURE__*/ _interop_require_default(require("./select/patternName"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./input/startRuleName"));
var _florenceBNF = /*#__PURE__*/ _interop_require_default(require("./textarea/florenceBNF"));
var _userDefinedCustomGrammar1 = /*#__PURE__*/ _interop_require_default(require("./userDefinedCustomGrammar1"));
var _userDefinedCustomGrammar2 = /*#__PURE__*/ _interop_require_default(require("./userDefinedCustomGrammar2"));
var _rules = require("../utilities/rules");
var _grammarNames = require("./grammarNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var rulesAsString = _occamparsers.rulesUtilities.rulesAsString, florenceLexerFromCombinedCustomGrammar = _index.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _index.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
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
                ], combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
                var ruleMap = florenceParser.getRuleMap(), startRuleName = _this.getStartRuleName(), startRule = ruleMap[startRuleName], content = _this.getContent(), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens, startRule);
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
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
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
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this), changeHandler = this.changeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Custom grammar"), /*#__PURE__*/ React.createElement(_name.default, {
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
                    }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
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
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialStartRuleName", "");
_define_property(View, "initialContent", "Rule (blah)\n  Conclusion\n    A\n");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMsIGRlZmF1bHRDdXN0b21HcmFtbWFyLCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9wYXR0ZXJuXCI7XG5pbXBvcnQgUnVsZU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3J1bGVOYW1lXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXR0ZXJuTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcGF0dGVybk5hbWVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEZsb3JlbmNlQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvZmxvcmVuY2VCTkZcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjFcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjJcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tUGFyc2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHBhdHRlcm4gPSB0aGlzLmdldFBhdHRlcm4oKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB0aGlzLmdldFBhdHRlcm5OYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xKSB7XG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMikge1xuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMi5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEsXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZSA9IHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0sIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIGNvbnN0IGZsb3JlbmNlUnVsZXMgPSBydWxlc0Zyb21QYXJzZXIoZmxvcmVuY2VQYXJzZXIpLFxuICAgICAgICAgICAgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhmbG9yZW5jZVJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgZmxvcmVuY2VCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEZsb3JlbmNlQk5GKGZsb3JlbmNlQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJGbG9yZW5jZUJORigpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBsZXQgY3VzdG9tR3JhbW1hcjtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHRoaXMuZ2V0UGF0dGVybk5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUU6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xOlxuICAgICAgICBjdXN0b21HcmFtbWFyID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yOlxuICAgICAgICBjdXN0b21HcmFtbWFyID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSksXG4gICAgICAgICAgcGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSk7XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm4pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEN1c3RvbSBncmFtbWFyXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhdHRlcm5OYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEZsb3JlbmNlIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEZsb3JlbmNlQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBjb25zdCBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBSdWxlIChibGFoKVxuICBDb25jbHVzaW9uXG4gICAgQVxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibmFtZSIsImdldE5hbWUiLCJibmYiLCJnZXRCTkYiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwYXR0ZXJuTmFtZSIsImdldFBhdHRlcm5OYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIiLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJzdGFydFJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJmbG9yZW5jZVJ1bGVzIiwicnVsZXNGcm9tUGFyc2VyIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJmbG9yZW5jZUJORiIsInNldEZsb3JlbmNlQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckZsb3JlbmNlQk5GIiwiY2hhbmdlSGFuZGxlciIsImN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJOYW1lU2VsZWN0Iiwib25DaGFuZ2UiLCJSdWxlTmFtZVNlbGVjdCIsIkJORlRleHRhcmVhIiwib25LZXlVcCIsIlBhdHRlcm5OYW1lU2VsZWN0IiwiUGF0dGVybklucHV0IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiRmxvcmVuY2VCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5TUE7OztlQUFBOzs7b0VBdk1zQjtvQkFFRTs0QkFDTzswQkFDcUM7cUJBQzJCO2lFQUV4RTsyREFDQTsrREFDQzswREFDQTs4REFDQzsrREFDRTs4REFDQztrRUFDRTtnRUFDQTtvRUFDQztrRUFDQztnRkFDTTtnRkFDQTtxQkFFTjs0QkFDb0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEgsSUFBTSxBQUFFQSxnQkFBa0JDLDRCQUFjLENBQWhDRCxlQUNGLEFB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