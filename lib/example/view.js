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
var _ruleName = /*#__PURE__*/ _interop_require_default(require("./select/ruleName"));
var _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./input/startRuleName"));
var _nominalBNF = /*#__PURE__*/ _interop_require_default(require("./textarea/nominalBNF"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("./textarea/vocabulary"));
var _vocabularyName = /*#__PURE__*/ _interop_require_default(require("./select/vocabularyName"));
var _userDefined1 = /*#__PURE__*/ _interop_require_default(require("./customGrammar/userDefined1"));
var _userDefined2 = /*#__PURE__*/ _interop_require_default(require("./customGrammar/userDefined2"));
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
            // try {
            var bnf = _this.getBNF(), name = _this.getName(), ruleName = _this.getRuleName(), vocabulary = _this.getVocabulary(), vocabularyName = _this.getVocabularyName();
            if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1) {
                _userDefined1.default.setBNF(ruleName, bnf);
                _userDefined1.default.setVocabulary(vocabularyName, vocabulary);
            }
            if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
                _userDefined2.default.setBNF(ruleName, bnf);
                _userDefined2.default.setVocabulary(vocabularyName, vocabulary);
            }
            var customGrammars = [
                _userDefined1.default,
                _userDefined2.default
            ], combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);
            var ruleMap = nominalParser.getRuleMap(), startRuleName = _this.getStartRuleName(), startRule = ruleMap[startRuleName], content = _this.getContent(), tokens = nominalLexer.tokenise(content), node = nominalParser.parse(tokens, startRule);
            var parseTree = null;
            if (node !== null) {
                parseTree = node.asParseTree(tokens);
            }
            _this.setParseTree(parseTree);
            var nominalRules = (0, _rules.rulesFromParser)(nominalParser), multiLine = true, rulesString = rulesAsString(nominalRules, multiLine), nominalBNF = rulesString; ///
            _this.setNominalBNF(nominalBNF);
        // } catch (error) {
        //   console.log(error);
        //
        //   this.clearParseTree();
        //
        //   this.clearNominalBNF();
        // }
        }), _define_property(_this, "changeHandler", function(event, element) {
            var customGrammar;
            var name = _this.getName(), ruleName = _this.getRuleName(), vocabularyName = _this.getVocabularyName();
            switch(name){
                case _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME:
                    customGrammar = _index.defaultCustomGrammar;
                    break;
                case _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1:
                    customGrammar = _userDefined1.default;
                    break;
                case _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2:
                    customGrammar = _userDefined2.default;
                    break;
            }
            var bnf = customGrammar.getBNF(ruleName), vocabulary = customGrammar.getVocabulary(vocabularyName);
            _this.setBNF(bnf);
            _this.setVocabulary(vocabulary);
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
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Vocabulary"), /*#__PURE__*/ React.createElement(_vocabularyName.default, {
                        onChange: changeHandler
                    }), /*#__PURE__*/ React.createElement(_vocabulary.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                        onChange: changeHandler
                    }), /*#__PURE__*/ React.createElement(_bnf.default, {
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
_define_property(View, "initialContent", "Rule (Groups)\n  Conclusion\n    A\n");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMsIGRlZmF1bHRDdXN0b21HcmFtbWFyLCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBOb21pbmFsQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbm9taW5hbEJORlwiO1xuaW1wb3J0IFZvY2FidWxhcnlUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS92b2NhYnVsYXJ5XCI7XG5pbXBvcnQgVm9jYWJ1bGFyeU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3ZvY2FidWxhcnlOYW1lXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyL3VzZXJEZWZpbmVkMVwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIgZnJvbSBcIi4vY3VzdG9tR3JhbW1hci91c2VyRGVmaW5lZDJcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tUGFyc2VyIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIgfSBmcm9tIFwiLi9ncmFtbWFyTmFtZXNcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgdm9jYWJ1bGFyeSA9IHRoaXMuZ2V0Vm9jYWJ1bGFyeSgpLFxuICAgICAgICAgICAgdm9jYWJ1bGFyeU5hbWUgPSB0aGlzLmdldFZvY2FidWxhcnlOYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xKSB7XG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuc2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSwgdm9jYWJ1bGFyeSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yKSB7XG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIuc2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSwgdm9jYWJ1bGFyeSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxLFxuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IG5vbWluYWxQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBub21pbmFsTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gbm9taW5hbFBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxSdWxlcyA9IHJ1bGVzRnJvbVBhcnNlcihub21pbmFsUGFyc2VyKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcobm9taW5hbFJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgbm9taW5hbEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0Tm9taW5hbEJORihub21pbmFsQk5GKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJOb21pbmFsQk5GKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCBjdXN0b21HcmFtbWFyO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHZvY2FidWxhcnlOYW1lID0gdGhpcy5nZXRWb2NhYnVsYXJ5TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRTpcbiAgICAgICAgY3VzdG9tR3JhbW1hciA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzE6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzI6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gY3VzdG9tR3JhbW1hci5nZXRWb2NhYnVsYXJ5KHZvY2FidWxhcnlOYW1lKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldFZvY2FidWxhcnkodm9jYWJ1bGFyeSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ3VzdG9tIGdyYW1tYXJcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFZvY2FidWxhcnlcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxWb2NhYnVsYXJ5TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxWb2NhYnVsYXJ5VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTm9taW5hbCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxOb21pbmFsQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBjb25zdCBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBSdWxlIChHcm91cHMpXG4gIENvbmNsdXNpb25cbiAgICBBXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiYm5mIiwiZ2V0Qk5GIiwibmFtZSIsImdldE5hbWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwidm9jYWJ1bGFyeSIsImdldFZvY2FidWxhcnkiLCJ2b2NhYnVsYXJ5TmFtZSIsImdldFZvY2FidWxhcnlOYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEiLCJzZXRCTkYiLCJzZXRWb2NhYnVsYXJ5IiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjIiLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwic3RhcnRSdWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwibm9taW5hbFJ1bGVzIiwicnVsZXNGcm9tUGFyc2VyIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJub21pbmFsQk5GIiwic2V0Tm9taW5hbEJORiIsImNoYW5nZUhhbmRsZXIiLCJjdXN0b21HcmFtbWFyIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTmFtZVNlbGVjdCIsIm9uQ2hhbmdlIiwiVm9jYWJ1bGFyeU5hbWVTZWxlY3QiLCJWb2NhYnVsYXJ5VGV4dGFyZWEiLCJvbktleVVwIiwiUnVsZU5hbWVTZWxlY3QiLCJCTkZUZXh0YXJlYSIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk5vbWluYWxCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsInNldENvbnRlbnQiLCJzZXRTdGFydFJ1bGVOYW1lIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMk1BOzs7ZUFBQTs7O29FQXpNc0I7b0JBRUU7NEJBQ087MEJBQ3FDO3FCQUMyQjtpRUFFeEU7MkRBQ0E7K0RBQ0M7MERBQ0E7K0RBQ0c7OERBQ0M7Z0VBQ0U7b0VBQ0M7aUVBQ0E7aUVBQ0E7cUVBQ0U7bUVBQ0s7bUVBQ0E7cUJBRU47NEJBQ29GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBILElBQU0sQUFBRUEs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