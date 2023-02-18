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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RlbXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzLCBCYXNpY1BhcnNlciwgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGxleGVyVXRpbGl0aWVzLCBCYXNpY0xleGVyLCBDb21tb25MZXhlciwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmxldCBydWxlcztcblxuY29uc3QgZW50cmllcyA9IFtcbiAge1xuICAgIFwidW5hc3NpZ25lZFwiOiBcIi5cIlxuICB9XG5dO1xuXG5ydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbmV4cG9ydCBjb25zdCB0ZW1wb3JhcnlMZXhlciA9IENvbW1vbkxleGVyLmZyb21SdWxlcyhjbGFzcyBleHRlbmRzIEJhc2ljTGV4ZXIgeyBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuOyB9LCBydWxlcyk7IC8vL1xuXG5jb25zdCBibmYgPSBgXG5cbiAgVSA6Oj0gUy4uLiA8RU5EX09GX0xJTkU+IDtcblxuICBTIDo6PSBWXG4gIFxuICAgICAgfCBUXG4gIFxuICAgICAgfCBTIFg/XG4gICAgICAgICAgICAgICAgIFxuICAgICAgO1xuICBcbiAgVCA6Oj0gUyBBIDtcbiAgXG4gIFYgOjo9IFt1bmFzc2lnbmVkXSA7XG4gICAgXG5gO1xuXG5ydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5ydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbmV4cG9ydCBjb25zdCB0ZW1wb3JhcnlQYXJzZXIgPSBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEJhc2ljUGFyc2VyLCBydWxlcyk7IC8vL1xuIl0sIm5hbWVzIjpbInRlbXBvcmFyeUxleGVyIiwidGVtcG9yYXJ5UGFyc2VyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXMiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJCYXNpY0xleGVyIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiYm5mIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkNvbW1vblBhcnNlciIsIkJhc2ljUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtQmFBLGNBQWM7ZUFBZEE7O0lBd0JBQyxlQUFlO2VBQWZBOzs7cUNBekMwQjs0QkFDb0I7MkJBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNLEFBQUVDLGVBQWlCQyw2QkFBZSxDQUFoQ0QsY0FDRixBQUFFRSxtQkFBcUJDLDJCQUFjLENBQW5DRDtBQUVSLElBQUlFO0FBRUosSUFBTUMsVUFBVTtJQUNkO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0FBRURELFFBQVFGLGlCQUFpQkc7QUFFbEIsSUFBTVAsaUJBQWlCUSx3QkFBVyxDQUFDQyxTQUFTLHlCQUFDOzs7Ozs7OztFQUFjQyx1QkFBVSxHQUFHLHdCQUFPQyxrQkFBaUJDLHNDQUF5QixZQUFLTixRQUFRLEdBQUc7QUFFaEosSUFBTU8sTUFBTztBQWtCYlAsUUFBUUosYUFBYVc7QUFFckJQLFFBQVFRLElBQUFBLDZDQUFzQixFQUFDUixRQUFTLEdBQUc7QUFFcEMsSUFBTUwsa0JBQWtCYywwQkFBWSxDQUFDTixTQUFTLENBQUNPLHlCQUFXLEVBQUVWLFFBQVEsR0FBRyJ9