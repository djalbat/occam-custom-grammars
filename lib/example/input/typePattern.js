"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypePatternInput;
    }
});
var _input = /*#__PURE__*/ _interopRequireDefault(require("../input"));
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
var TypePatternInput = /*#__PURE__*/ function(Input) {
    _inherits(TypePatternInput, Input);
    var _super = _createSuper(TypePatternInput);
    function TypePatternInput() {
        _classCallCheck(this, TypePatternInput);
        return _super.apply(this, arguments);
    }
    _createClass(TypePatternInput, [
        {
            key: "getTypePattern",
            value: function getTypePattern() {
                var value = this.getValue(), typePattern = value; ///
                return typePattern;
            }
        },
        {
            key: "setTypePattern",
            value: function setTypePattern(typePattern) {
                var value = typePattern; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getTypePattern = this.getTypePattern.bind(this), setTypePattern = this.setTypePattern.bind(this), setTypePatternReadOnly = this.setReadOnly.bind(this); ///;
                return {
                    getTypePattern: getTypePattern,
                    setTypePattern: setTypePattern,
                    setTypePatternReadOnly: setTypePatternReadOnly
                };
            }
        }
    ]);
    return TypePatternInput;
}(_input.default);
_defineProperty(TypePatternInput, "defaultProperties", {
    className: "type-pattern",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L3R5cGVQYXR0ZXJuLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVQYXR0ZXJuSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldFR5cGVQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQYXR0ZXJuO1xuICB9XG5cbiAgc2V0VHlwZVBhdHRlcm4odHlwZVBhdHRlcm4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRUeXBlUGF0dGVybiA9IHRoaXMuZ2V0VHlwZVBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRUeXBlUGF0dGVybiA9IHRoaXMuc2V0VHlwZVBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRUeXBlUGF0dGVyblJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFR5cGVQYXR0ZXJuLFxuICAgICAgc2V0VHlwZVBhdHRlcm4sXG4gICAgICBzZXRUeXBlUGF0dGVyblJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInR5cGUtcGF0dGVyblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUeXBlUGF0dGVybklucHV0IiwiZ2V0VHlwZVBhdHRlcm4iLCJ2YWx1ZSIsImdldFZhbHVlIiwidHlwZVBhdHRlcm4iLCJzZXRUeXBlUGF0dGVybiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJzZXRUeXBlUGF0dGVyblJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJJbnB1dCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBSVFBLGdCQUFnQjs7OzBEQUZuQixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsZ0JBQWdCLGlCQUF0Qjs7O2FBQU1BLGdCQUFnQjs7Ozs7O1lBQ25DQyxHQUFjLEVBQWRBLGdCQUFjO21CQUFkQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxXQUFXLEdBQUdGLEtBQUssQUFBQyxFQUFDLEdBQUc7Z0JBRTlCLE9BQU9FLFdBQVcsQ0FBQzthQUNwQjs7O1lBRURDLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsQ0FBQ0QsV0FBVyxFQUFFO2dCQUMxQixJQUFNRixLQUFLLEdBQUdFLFdBQVcsQUFBQyxFQUFDLEdBQUc7Z0JBRTlCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSixLQUFLLENBQUMsQ0FBQzthQUN0Qjs7O1lBRURLLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1OLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUMvQ0gsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQy9DQyxzQkFBc0IsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsSUFBSTtnQkFFaEUsT0FBUTtvQkFDTlAsY0FBYyxFQUFkQSxjQUFjO29CQUNkSSxjQUFjLEVBQWRBLGNBQWM7b0JBQ2RJLHNCQUFzQixFQUF0QkEsc0JBQXNCO2lCQUN2QixDQUFFO2FBQ0o7Ozs7Q0FNRixDQTlCNkNFLE1BQUssUUFBQSxDQThCbEQ7QUFKQyxnQkExQm1CWCxnQkFBZ0IsRUEwQjVCWSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLGNBQWM7SUFDekJDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUMifQ==