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
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _occamParsers = require("occam-parsers");
var _occamLexers = require("occam-lexers");
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
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var _class;
var rulesFromBNF = _occamParsers.parserUtilities.rulesFromBNF, rulesFromEntries = _occamLexers.lexerUtilities.rulesFromEntries;
var rules;
var entries = [
    {
        "unassigned": "."
    }
];
rules = rulesFromEntries(entries);
var temporaryLexer = _occamLexers.CommonLexer.fromRules((_class = /*#__PURE__*/ function(BasicLexer) {
    _inherits(_class, BasicLexer);
    var _super = _createSuper(_class);
    function _class() {
        _classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_occamLexers.BasicLexer), _defineProperty(_class, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken), _class), rules); ///
var bnf = "\n\n  U ::= S... <END_OF_LINE> ;\n\n  S ::= V\n  \n      | T\n  \n      | S X?\n                 \n      ;\n  \n  T ::= S A ;\n  \n  V ::= [unassigned] ;\n    \n";
rules = rulesFromBNF(bnf);
rules = (0, _occamGrammarUtilities.eliminateLeftRecursion)(rules); ///
var temporaryParser = _occamParsers.CommonParser.fromRules(_occamParsers.BasicParser, rules); ///

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcywgQmFzaWNQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcywgQmFzaWNMZXhlciwgQ29tbW9uTGV4ZXIsIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUVudHJpZXMgfSA9IGxleGVyVXRpbGl0aWVzO1xuXG5sZXQgcnVsZXM7XG5cbmNvbnN0IGVudHJpZXMgPSBbXG4gIHtcbiAgICBcInVuYXNzaWduZWRcIjogXCIuXCJcbiAgfVxuXTtcblxucnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpO1xuXG5leHBvcnQgY29uc3QgdGVtcG9yYXJ5TGV4ZXIgPSBDb21tb25MZXhlci5mcm9tUnVsZXMoY2xhc3MgZXh0ZW5kcyBCYXNpY0xleGVyIHsgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgfSwgcnVsZXMpOyAvLy9cblxuY29uc3QgYm5mID0gYFxuXG4gIFUgOjo9IFMuLi4gPEVORF9PRl9MSU5FPiA7XG5cbiAgUyA6Oj0gVlxuICBcbiAgICAgIHwgVFxuICBcbiAgICAgIHwgUyBYP1xuICAgICAgICAgICAgICAgICBcbiAgICAgIDtcbiAgXG4gIFQgOjo9IFMgQSA7XG4gIFxuICBWIDo6PSBbdW5hc3NpZ25lZF0gO1xuICAgIFxuYDtcblxucnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxucnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG5leHBvcnQgY29uc3QgdGVtcG9yYXJ5UGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhCYXNpY1BhcnNlciwgcnVsZXMpOyAvLy9cbiJdLCJuYW1lcyI6WyJ0ZW1wb3JhcnlMZXhlciIsInRlbXBvcmFyeVBhcnNlciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJsZXhlclV0aWxpdGllcyIsInJ1bGVzIiwiZW50cmllcyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwiQmFzaWNMZXhlciIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsImJuZiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJDb21tb25QYXJzZXIiLCJCYXNpY1BhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUJhQSxjQUFjO2VBQWRBOztJQXdCQUMsZUFBZTtlQUFmQTs7O3FDQXpDMEI7NEJBQ29COzJCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBTSxBQUFFQyxlQUFpQkMsNkJBQWUsQ0FBaENELGNBQ0YsQUFBRUUsbUJBQXFCQywyQkFBYyxDQUFuQ0Q7QUFFUixJQUFJRTtBQUVKLElBQU1DLFVBQVU7SUFDZDtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtBQUVERCxRQUFRRixpQkFBaUJHO0FBRWxCLElBQU1QLGlCQUFpQlEsd0JBQVcsQ0FBQ0MsU0FBUyx5QkFBQzs7Ozs7Ozs7RUFBY0MsdUJBQVUsR0FBRyx3QkFBT0Msa0JBQWlCQyxzQ0FBeUIsWUFBS04sUUFBUSxHQUFHO0FBRWhKLElBQU1PLE1BQU87QUFrQmJQLFFBQVFKLGFBQWFXO0FBRXJCUCxRQUFRUSxJQUFBQSw2Q0FBc0IsRUFBQ1IsUUFBUyxHQUFHO0FBRXBDLElBQU1MLGtCQUFrQmMsMEJBQVksQ0FBQ04sU0FBUyxDQUFDTyx5QkFBVyxFQUFFVixRQUFRLEdBQUcifQ==