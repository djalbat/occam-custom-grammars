"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OperatorPatternInput;
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
var OperatorPatternInput = /*#__PURE__*/ function(Input) {
    _inherits(OperatorPatternInput, Input);
    var _super = _createSuper(OperatorPatternInput);
    function OperatorPatternInput() {
        _classCallCheck(this, OperatorPatternInput);
        return _super.apply(this, arguments);
    }
    _createClass(OperatorPatternInput, [
        {
            key: "getOperatorPattern",
            value: function getOperatorPattern() {
                var value = this.getValue(), operatorPattern = value; ///
                return operatorPattern;
            }
        },
        {
            key: "setOperatorPattern",
            value: function setOperatorPattern(operatorPattern) {
                var value = operatorPattern; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getOperatorPattern = this.getOperatorPattern.bind(this), setOperatorPattern = this.setOperatorPattern.bind(this), setOperatorPatternReadOnly = this.setReadOnly.bind(this); ///;
                return {
                    getOperatorPattern: getOperatorPattern,
                    setOperatorPattern: setOperatorPattern,
                    setOperatorPatternReadOnly: setOperatorPatternReadOnly
                };
            }
        }
    ]);
    return OperatorPatternInput;
}(_input.default);
_defineProperty(OperatorPatternInput, "defaultProperties", {
    className: "operator-pattern",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L29wZXJhdG9yUGF0dGVybi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYXRvclBhdHRlcm5JbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0T3BlcmF0b3JQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBvcGVyYXRvclBhdHRlcm47XG4gIH1cblxuICBzZXRPcGVyYXRvclBhdHRlcm4ob3BlcmF0b3JQYXR0ZXJuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBvcGVyYXRvclBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE9wZXJhdG9yUGF0dGVybiA9IHRoaXMuZ2V0T3BlcmF0b3JQYXR0ZXJuLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0T3BlcmF0b3JQYXR0ZXJuID0gdGhpcy5zZXRPcGVyYXRvclBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRPcGVyYXRvclBhdHRlcm5SZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgLy8vO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRPcGVyYXRvclBhdHRlcm4sXG4gICAgICBzZXRPcGVyYXRvclBhdHRlcm4sXG4gICAgICBzZXRPcGVyYXRvclBhdHRlcm5SZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvcGVyYXRvci1wYXR0ZXJuXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk9wZXJhdG9yUGF0dGVybklucHV0IiwiZ2V0T3BlcmF0b3JQYXR0ZXJuIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm9wZXJhdG9yUGF0dGVybiIsInNldE9wZXJhdG9yUGF0dGVybiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJzZXRPcGVyYXRvclBhdHRlcm5SZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQUlRQSxvQkFBb0I7OzswREFGdkIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLG9CQUFvQixpQkFBMUI7OzthQUFNQSxvQkFBb0I7Ozs7OztZQUN2Q0MsR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBbEJBLFNBQUFBLGtCQUFrQixHQUFHO2dCQUNuQixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUUsRUFDdkJDLGVBQWUsR0FBR0YsS0FBSyxBQUFDLEVBQUMsR0FBRztnQkFFbEMsT0FBT0UsZUFBZSxDQUFDO2FBQ3hCOzs7WUFFREMsR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBbEJBLFNBQUFBLGtCQUFrQixDQUFDRCxlQUFlLEVBQUU7Z0JBQ2xDLElBQU1GLEtBQUssR0FBR0UsZUFBZSxBQUFDLEVBQUMsR0FBRztnQkFFbEMsSUFBSSxDQUFDRSxRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFREssR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTU4sa0JBQWtCLEdBQUcsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN2REgsa0JBQWtCLEdBQUcsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN2REMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLElBQUk7Z0JBRXBFLE9BQVE7b0JBQ05QLGtCQUFrQixFQUFsQkEsa0JBQWtCO29CQUNsQkksa0JBQWtCLEVBQWxCQSxrQkFBa0I7b0JBQ2xCSSwwQkFBMEIsRUFBMUJBLDBCQUEwQjtpQkFDM0IsQ0FBRTthQUNKOzs7O0NBTUYsQ0E5QmlERSxNQUFLLFFBQUEsQ0E4QnREO0FBSkMsZ0JBMUJtQlgsb0JBQW9CLEVBMEJoQ1ksbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0JDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUMifQ==