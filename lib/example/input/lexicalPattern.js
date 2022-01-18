"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _input = _interopRequireDefault(require("../input"));
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
var LexicalPatternInput = /*#__PURE__*/ function(Input) {
    _inherits(LexicalPatternInput, Input);
    var _super = _createSuper(LexicalPatternInput);
    function LexicalPatternInput() {
        _classCallCheck(this, LexicalPatternInput);
        return _super.apply(this, arguments);
    }
    _createClass(LexicalPatternInput, [
        {
            key: "getLexicalPattern",
            value: function getLexicalPattern() {
                var value = this.getValue(), lexicalPattern = value; ///
                return lexicalPattern;
            }
        },
        {
            key: "setLexicalPattern",
            value: function setLexicalPattern(lexicalPattern) {
                var value = lexicalPattern; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getLexicalPattern = this.getLexicalPattern.bind(this), setLexicalPattern = this.setLexicalPattern.bind(this), setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///;
                return {
                    getLexicalPattern: getLexicalPattern,
                    setLexicalPattern: setLexicalPattern,
                    setLexicalPatternReadOnly: setLexicalPatternReadOnly
                };
            }
        }
    ]);
    return LexicalPatternInput;
}(_input.default);
_defineProperty(LexicalPatternInput, "defaultProperties", {
    className: "lexical-pattern",
    spellCheck: "false"
});
exports.default = LexicalPatternInput;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L2xleGljYWxQYXR0ZXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxQYXR0ZXJuSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxQYXR0ZXJuLFxuICAgICAgc2V0TGV4aWNhbFBhdHRlcm4sXG4gICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxleGljYWwtcGF0dGVyblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJnZXRMZXhpY2FsUGF0dGVybiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsUGF0dGVybiIsInNldExleGljYWxQYXR0ZXJuIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFTSxHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUEEsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUZBLG1CQUFtQjs4QkFBbkJBLG1CQUFtQjthQUFuQkEsbUJBQW1COzhCQUFuQkEsbUJBQW1COzs7aUJBQW5CQSxtQkFBbUI7O1lBQ3RDQyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsY0FBYyxHQUFHRixLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVqQyxNQUFNLENBQUNFLGNBQWM7WUFDdkIsQ0FBQzs7O1lBRURDLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLENBQUNELGNBQWMsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLENBQUNGLEtBQUssR0FBR0UsY0FBYyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakMsSUFBSSxDQUFDRSxRQUFRLENBQUNKLEtBQUs7WUFDckIsQ0FBQzs7O1lBRURLLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUNOLGlCQUFpQixHQUFHLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQ3BESCxpQkFBaUIsR0FBRyxJQUFJLENBQUNBLGlCQUFpQixDQUFDRyxJQUFJLENBQUMsSUFBSSxHQUNwREMseUJBQXlCLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUNGLElBQUksQ0FBQyxJQUFJLEVBQUcsQ0FBSSxBQUFKLEVBQUksQUFBSixFQUFJO2dCQUVuRSxNQUFNLENBQUUsQ0FBQztvQkFDUFAsaUJBQWlCLEVBQWpCQSxpQkFBaUI7b0JBQ2pCSSxpQkFBaUIsRUFBakJBLGlCQUFpQjtvQkFDakJJLHlCQUF5QixFQUF6QkEseUJBQXlCO2dCQUMzQixDQUFDO1lBQ0gsQ0FBQzs7O1dBeEJrQlQsbUJBQW1CO0VBRnRCLE1BQVU7Z0JBRVBBLG1CQUFtQixFQTBCL0JXLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFpQjtJQUM1QkMsVUFBVSxFQUFFLENBQU87QUFDckIsQ0FBQztrQkE3QmtCYixtQkFBbUIifQ==