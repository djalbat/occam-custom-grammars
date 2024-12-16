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
_define_property(View, "initialContent", "Rule (foo)\n  Conclusion\n    u is contained in P\n  \nAxiom (bar)\n  x is defined\n");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMsIGRlZmF1bHRDdXN0b21HcmFtbWFyLCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9wYXR0ZXJuXCI7XG5pbXBvcnQgUnVsZU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3J1bGVOYW1lXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXR0ZXJuTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcGF0dGVybk5hbWVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IE5vbWluYWxCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ub21pbmFsQk5GXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSBmcm9tIFwiLi91c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMiBmcm9tIFwiLi91c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbVBhcnNlciB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBwYXR0ZXJuID0gdGhpcy5nZXRQYXR0ZXJuKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSkge1xuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMS5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIpIHtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMi5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLFxuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IG5vbWluYWxQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBub21pbmFsTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gbm9taW5hbFBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxSdWxlcyA9IHJ1bGVzRnJvbVBhcnNlcihub21pbmFsUGFyc2VyKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcobm9taW5hbFJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgbm9taW5hbEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0Tm9taW5hbEJORihub21pbmFsQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJOb21pbmFsQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCBjdXN0b21HcmFtbWFyO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRTpcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzE6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzI6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ3VzdG9tIGdyYW1tYXJcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGF0dGVybk5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8UGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTm9taW5hbCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOb21pbmFsQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBjb25zdCBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBSdWxlIChmb28pXG4gIENvbmNsdXNpb25cbiAgICB1IGlzIGNvbnRhaW5lZCBpbiBQXG4gIFxuQXhpb20gKGJhcilcbiAgeCBpcyBkZWZpbmVkXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibmFtZSIsImdldE5hbWUiLCJibmYiLCJnZXRCTkYiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwYXR0ZXJuTmFtZSIsImdldFBhdHRlcm5OYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIiLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwic3RhcnRSdWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwibm9taW5hbFJ1bGVzIiwicnVsZXNGcm9tUGFyc2VyIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJub21pbmFsQk5GIiwic2V0Tm9taW5hbEJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJOb21pbmFsQk5GIiwiY2hhbmdlSGFuZGxlciIsImN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJOYW1lU2VsZWN0Iiwib25DaGFuZ2UiLCJSdWxlTmFtZVNlbGVjdCIsIkJORlRleHRhcmVhIiwib25LZXlVcCIsIlBhdHRlcm5OYW1lU2VsZWN0IiwiUGF0dGVybklucHV0IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTm9taW5hbEJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJzZXRDb250ZW50Iiwic2V0U3RhcnRSdWxlTmFtZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRNQTs7O2VBQUE7OztvRUExTXNCO29CQUVFOzRCQUNPOzBCQUNxQztxQkFDMkI7aUVBRXhFOzJEQUNBOytEQUNDOzBEQUNBOzhEQUNDOytEQUNFOzhEQUNDO2tFQUNFO2dFQUNBO29FQUNDO2lFQUNBO2dGQUNPO2dGQUNBO3FCQUVOOzRCQUNvRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwSCxJQUFNLEFBQUVBLGdCQUFrQkMsNEJBQWMsQ0FBaENE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