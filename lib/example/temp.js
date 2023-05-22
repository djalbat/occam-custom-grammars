"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    temporaryLexer: function() {
        return temporaryLexer;
    },
    temporaryParser: function() {
        return temporaryParser;
    }
});
var _occamgrammarutilities = require("occam-grammar-utilities");
var _occamparsers = require("occam-parsers");
var _occamlexers = require("occam-lexers");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var _class;
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, rulesFromEntries = _occamlexers.lexerUtilities.rulesFromEntries;
var rules;
var entries = [
    {
        "unassigned": "."
    }
];
rules = rulesFromEntries(entries);
var temporaryLexer = _occamlexers.CommonLexer.fromRules((_class = /*#__PURE__*/ function(BasicLexer) {
    _inherits(_class, BasicLexer);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_occamlexers.BasicLexer), _define_property(_class, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken), _class), rules); ///
var bnf = "\n\n  U ::= S... <END_OF_LINE> ;\n\n  S ::= V\n  \n      | T\n  \n      | S X?\n                 \n      ;\n  \n  T ::= S A ;\n  \n  V ::= [unassigned] ;\n    \n";
rules = rulesFromBNF(bnf);
rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
var temporaryParser = _occamparsers.CommonParser.fromRules(_occamparsers.BasicParser, rules); ///

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RlbXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzLCBCYXNpY1BhcnNlciwgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGxleGVyVXRpbGl0aWVzLCBCYXNpY0xleGVyLCBDb21tb25MZXhlciwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmxldCBydWxlcztcblxuY29uc3QgZW50cmllcyA9IFtcbiAge1xuICAgIFwidW5hc3NpZ25lZFwiOiBcIi5cIlxuICB9XG5dO1xuXG5ydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbmV4cG9ydCBjb25zdCB0ZW1wb3JhcnlMZXhlciA9IENvbW1vbkxleGVyLmZyb21SdWxlcyhjbGFzcyBleHRlbmRzIEJhc2ljTGV4ZXIgeyBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuOyB9LCBydWxlcyk7IC8vL1xuXG5jb25zdCBibmYgPSBgXG5cbiAgVSA6Oj0gUy4uLiA8RU5EX09GX0xJTkU+IDtcblxuICBTIDo6PSBWXG4gIFxuICAgICAgfCBUXG4gIFxuICAgICAgfCBTIFg/XG4gICAgICAgICAgICAgICAgIFxuICAgICAgO1xuICBcbiAgVCA6Oj0gUyBBIDtcbiAgXG4gIFYgOjo9IFt1bmFzc2lnbmVkXSA7XG4gICAgXG5gO1xuXG5ydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5ydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbmV4cG9ydCBjb25zdCB0ZW1wb3JhcnlQYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEJhc2ljUGFyc2VyLCBydWxlcyk7IC8vL1xuIl0sIm5hbWVzIjpbInRlbXBvcmFyeUxleGVyIiwidGVtcG9yYXJ5UGFyc2VyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXMiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJCYXNpY0xleGVyIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiYm5mIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkNvbW1vblBhcnNlciIsIkJhc2ljUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtQmFBLGNBQWM7ZUFBZEE7O0lBd0JBQyxlQUFlO2VBQWZBOzs7cUNBekMwQjs0QkFDb0I7MkJBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNLEFBQUVDLGVBQWlCQyw4QkFBakJELGNBQ0YsQUFBRUUsbUJBQXFCQyw0QkFBckJEO0FBRVIsSUFBSUU7QUFFSixJQUFNQyxVQUFVO0lBQ2Q7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7QUFFREQsUUFBUUYsaUJBQWlCRztBQUVsQixJQUFNUCxpQkFBaUJRLHlCQUFZQyxrQ0FBVTs7Ozs7Ozs7RUFBY0MsMEJBQWEseUJBQU9DLGtCQUFpQkMsa0RBQThCTixRQUFRLEdBQUc7QUFFaEosSUFBTU8sTUFBTztBQWtCYlAsUUFBUUosYUFBYVc7QUFFckJQLFFBQVFRLElBQUFBLCtDQUF1QlIsUUFBUyxHQUFHO0FBRXBDLElBQU1MLGtCQUFrQmMsMkJBQWFOLFVBQVVPLDJCQUFhVixRQUFRLEdBQUcifQ==