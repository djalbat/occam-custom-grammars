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
    florenceLexer: function() {
        return florenceLexer;
    },
    florenceParser: function() {
        return florenceParser;
    }
});
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
        "special": "^(?:,|::|:|\\|-|\\|=|\\(|\\)|\\[|\\]|\\.\\.\\.)"
    },
    {
        "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
rules = rulesFromEntries(entries);
var florenceLexer = _occamLexers.CommonLexer.fromRules((_class = /*#__PURE__*/ function(BasicLexer) {
    _inherits(_class, BasicLexer);
    var _super = _createSuper(_class);
    function _class() {
        _classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    return _class;
}(_occamLexers.BasicLexer), _defineProperty(_class, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken), _class), rules); ///
var bnf = ' \n      \n  document                             ::=   axiom ;\n\n  axiom                                ::=   "Axiom" "(" label ")" <END_OF_LINE> consequence ;\n  \n  consequence                          ::=   unqualifiedStatement ;\n  \n  unqualifiedStatement!                ::=   statement... <END_OF_LINE> ;\n  \n  argument                             ::=   term | type ;\n  \n  label                                ::=   [name] ;\n  \n  statement!                           ::=   argument "=" argument\n  \n                                         |   statement ( inclusion | substitution )?\n                                                    \n                                         ;\n     \n';
rules = rulesFromBNF(bnf);
var florenceParser = _occamParsers.CommonParser.fromRules(_occamParsers.BasicParser, rules); ///

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcywgQmFzaWNQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcywgQmFzaWNMZXhlciwgQ29tbW9uTGV4ZXIsIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUVudHJpZXMgfSA9IGxleGVyVXRpbGl0aWVzO1xuXG5sZXQgcnVsZXM7XG5cbmNvbnN0IGVudHJpZXMgPSBbXG4gIHtcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw6Onw6fFxcXFx8LXxcXFxcfD18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwuKVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJeW0EtWmEtes6RLc6pzrEtz4lfMC05XStcIlxuICB9LFxuICB7XG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXG4gIH1cbl07XG5cbnJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuZXhwb3J0IGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBDb21tb25MZXhlci5mcm9tUnVsZXMoY2xhc3MgZXh0ZW5kcyBCYXNpY0xleGVyIHsgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgfSwgcnVsZXMpOyAvLy9cblxuY29uc3QgYm5mID0gYCBcbiAgICAgIFxuICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgYXhpb20gO1xuXG4gIGF4aW9tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkF4aW9tXCIgXCIoXCIgbGFiZWwgXCIpXCIgPEVORF9PRl9MSU5FPiBjb25zZXF1ZW5jZSA7XG4gIFxuICBjb25zZXF1ZW5jZSAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgO1xuICBcbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQhICAgICAgICAgICAgICAgIDo6PSAgIHN0YXRlbWVudC4uLiA8RU5EX09GX0xJTkU+IDtcbiAgXG4gIGFyZ3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtIHwgdHlwZSA7XG4gIFxuICBsYWJlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW25hbWVdIDtcbiAgXG4gIHN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudFxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHN0YXRlbWVudCAoIGluY2x1c2lvbiB8IHN1YnN0aXR1dGlvbiApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgIFxuYDtcblxucnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuZXhwb3J0IGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhCYXNpY1BhcnNlciwgcnVsZXMpOyAvLy9cbiJdLCJuYW1lcyI6WyJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwibGV4ZXJVdGlsaXRpZXMiLCJydWxlcyIsImVudHJpZXMiLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsIkJhc2ljTGV4ZXIiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJibmYiLCJDb21tb25QYXJzZXIiLCJCYXNpY1BhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0JhQSxhQUFhO2VBQWJBOztJQTBCQUMsY0FBYztlQUFkQTs7OzRCQWhEOEM7MkJBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNLEFBQUVDLGVBQWlCQyw2QkFBZSxDQUFoQ0QsY0FDRixBQUFFRSxtQkFBcUJDLDJCQUFjLENBQW5DRDtBQUVSLElBQUlFO0FBRUosSUFBTUMsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtBQUVERCxRQUFRRixpQkFBaUJHO0FBRWxCLElBQU1QLGdCQUFnQlEsd0JBQVcsQ0FBQ0MsU0FBUyx5QkFBQzs7Ozs7Ozs7RUFBY0MsdUJBQVUsR0FBRyx3QkFBT0Msa0JBQWlCQyxzQ0FBeUIsWUFBS04sUUFBUSxHQUFHO0FBRS9JLElBQU1PLE1BQU87QUFzQmJQLFFBQVFKLGFBQWFXO0FBRWQsSUFBTVosaUJBQWlCYSwwQkFBWSxDQUFDTCxTQUFTLENBQUNNLHlCQUFXLEVBQUVULFFBQVEsR0FBRyJ9