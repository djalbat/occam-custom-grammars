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
var _nominalBNF = /*#__PURE__*/ _interop_require_default(require("./textarea/nominalBNF"));
var _userDefinedCustomGrammar1 = /*#__PURE__*/ _interop_require_default(require("./userDefinedCustomGrammar1"));
var _userDefinedCustomGrammar2 = /*#__PURE__*/ _interop_require_default(require("./userDefinedCustomGrammar2"));
var _rules = require("./utilities/rules");
var _grammarNames = require("./grammarNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var rulesAsString = _occamparsers.rulesUtilities.rulesAsString, nominalLexerFromCombinedCustomGrammar = _index.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _index.parsersUtilities.nominalParserFromCombinedCustomGrammar;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
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
                ], combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);
                var ruleMap = nominalParser.getRuleMap(), startRuleName = _this.getStartRuleName(), startRule = ruleMap[startRuleName], content = _this.getContent(), tokens = nominalLexer.tokenise(content), node = nominalParser.parse(tokens, startRule);
                var parseTree = null;
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                _this.setParseTree(parseTree);
                var nominalRules = (0, _rules.rulesFromParser)(nominalParser), multiLine = true, rulesString = rulesAsString(nominalRules, multiLine), nominalBNF = rulesString; ///
                _this.setNominalBNF(nominalBNF);
            } catch (error) {
                console.log(error);
                _this.clearParseTree();
                _this.clearNominalBNF();
            }
        }), _define_property(_this, "changeHandler", function(event, element) {
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
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nominal BNF"), /*#__PURE__*/ React.createElement(_nominalBNF.default, null))))
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
_define_property(View, "initialContent", "Rule (blah)\n  Conclusion\n    u is omitted from P\n  \nAxiom (blah)\n  x = x is contained in x\n");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMsIGRlZmF1bHRDdXN0b21HcmFtbWFyLCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9wYXR0ZXJuXCI7XG5pbXBvcnQgUnVsZU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3J1bGVOYW1lXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXR0ZXJuTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcGF0dGVybk5hbWVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IE5vbWluYWxCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ub21pbmFsQk5GXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSBmcm9tIFwiLi91c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMiBmcm9tIFwiLi91c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbVBhcnNlciB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBwYXR0ZXJuID0gdGhpcy5nZXRQYXR0ZXJuKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSkge1xuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIpIHtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMi5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLFxuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IG5vbWluYWxQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBub21pbmFsTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gbm9taW5hbFBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxSdWxlcyA9IHJ1bGVzRnJvbVBhcnNlcihub21pbmFsUGFyc2VyKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcobm9taW5hbFJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgbm9taW5hbEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0Tm9taW5hbEJORihub21pbmFsQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJOb21pbmFsQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCBjdXN0b21HcmFtbWFyO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRTpcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzE6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzI6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ3VzdG9tIGdyYW1tYXJcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGF0dGVybk5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8UGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTm9taW5hbCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOb21pbmFsQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBjb25zdCBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBSdWxlIChibGFoKVxuICBDb25jbHVzaW9uXG4gICAgdSBpcyBvbWl0dGVkIGZyb20gUFxuICBcbkF4aW9tIChibGFoKVxuICB4ID0geCBpcyBjb250YWluZWQgaW4geFxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm5hbWUiLCJnZXROYW1lIiwiYm5mIiwiZ2V0Qk5GIiwicGF0dGVybiIsImdldFBhdHRlcm4iLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicGF0dGVybk5hbWUiLCJnZXRQYXR0ZXJuTmFtZSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIiwic2V0Qk5GIiwic2V0UGF0dGVybiIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyIiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJub21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsIm5vbWluYWxSdWxlcyIsInJ1bGVzRnJvbVBhcnNlciIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwibm9taW5hbEJORiIsInNldE5vbWluYWxCTkYiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImNsZWFyTm9taW5hbEJORiIsImNoYW5nZUhhbmRsZXIiLCJjdXN0b21HcmFtbWFyIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTmFtZVNlbGVjdCIsIm9uQ2hhbmdlIiwiUnVsZU5hbWVTZWxlY3QiLCJCTkZUZXh0YXJlYSIsIm9uS2V5VXAiLCJQYXR0ZXJuTmFtZVNlbGVjdCIsIlBhdHRlcm5JbnB1dCIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk5vbWluYWxCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0TUE7OztlQUFBOzs7b0VBMU1zQjtvQkFFRTs0QkFDTzswQkFDcUM7cUJBQzJCO2lFQUV4RTsyREFDQTsrREFDQzswREFDQTs4REFDQzsrREFDRTs4REFDQztrRUFDRTtnRUFDQTtvRUFDQztpRUFDQTtnRkFDTztnRkFDQTtxQkFFTjs0QkFDb0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEgsSUFBTSxBQUFFQSxnQkFBa0JD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