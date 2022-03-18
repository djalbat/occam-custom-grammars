"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
var _constants = require("../../constants");
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
var CombinedBNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(CombinedBNFTextarea, Textarea);
    var _super = _createSuper(CombinedBNFTextarea);
    function CombinedBNFTextarea() {
        _classCallCheck(this, CombinedBNFTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(CombinedBNFTextarea, [
        {
            key: "getCombinedBNF",
            value: function getCombinedBNF() {
                var value = this.getValue(), combinedBNF = value; ///
                return combinedBNF;
            }
        },
        {
            key: "setCombinedBNF",
            value: function setCombinedBNF(combinedBNF) {
                var value = combinedBNF; ///
                this.setValue(value);
            }
        },
        {
            key: "clearCombinedBNF",
            value: function clearCombinedBNF() {
                var value = _constants.EMPTY_STRING;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getCombinedBNF = this.getCombinedBNF.bind(this), setCombinedBNF = this.setCombinedBNF.bind(this), clearCombinedBNF = this.clearCombinedBNF.bind(this);
                return {
                    getCombinedBNF: getCombinedBNF,
                    setCombinedBNF: setCombinedBNF,
                    clearCombinedBNF: clearCombinedBNF
                };
            }
        }
    ]);
    return CombinedBNFTextarea;
}(_textarea.default);
exports.default = CombinedBNFTextarea;
_defineProperty(CombinedBNFTextarea, "defaultProperties", {
    className: "combined-bnf",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbWJpbmVkQk5GLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Q29tYmluZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29tYmluZWRCTkYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gIH1cblxuICBzZXRDb21iaW5lZEJORihjb21iaW5lZEJORikge1xuICAgIGNvbnN0IHZhbHVlID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJDb21iaW5lZEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRDb21iaW5lZEJORiA9IHRoaXMuZ2V0Q29tYmluZWRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRDb21iaW5lZEJORiA9IHRoaXMuc2V0Q29tYmluZWRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhckNvbWJpbmVkQk5GID0gdGhpcy5jbGVhckNvbWJpbmVkQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbWJpbmVkQk5GLFxuICAgICAgc2V0Q29tYmluZWRCTkYsXG4gICAgICBjbGVhckNvbWJpbmVkQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbWJpbmVkLWJuZlwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQk5GVGV4dGFyZWEiLCJnZXRDb21iaW5lZEJORiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjb21iaW5lZEJORiIsInNldENvbWJpbmVkQk5GIiwic2V0VmFsdWUiLCJjbGVhckNvbWJpbmVkQk5GIiwiRU1QVFlfU1RSSU5HIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVxQixJQUFBLFNBQWEsa0NBQWIsYUFBYSxFQUFBO0FBRUwsSUFBQSxVQUFpQixXQUFqQixpQkFBaUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUo5QztzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxtQkFBbUIsaUJDTnJDLEFETVk7NENBTmY7O2FBTXFCQSxtQkFBbUI7a0RBTnhDOzs7OztZQU9FQyxHQUFjLEVBQWRBLGdCQUFjO1lFUGhCLE9GT0VBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUUsRUFDdkJDLFdBQVcsR0FBR0YsS0FBSyxBQUFDLEVBQUMsR0FBRztnQkFFOUIsT0FBT0UsV0FBVyxDQUFDO2FBQ3BCOzs7WUFFREMsR0FBYyxFQUFkQSxnQkFBYztZRWRoQixPRmNFQSxTQUFBQSxjQUFjLENBQUNELFdBQVcsRUFBRTtnQkFDMUIsSUFBTUYsS0FBSyxHQUFHRSxXQUFXLEFBQUMsRUFBRSxHQUFHO2dCQUUvQixJQUFJLENBQUNFLFFBQVEsQ0FBQ0osS0FBSyxDQUFDLENBQUM7YUFDdEI7OztZQUVESyxHQUFnQixFQUFoQkEsa0JBQWdCO1lFcEJsQixPRm9CRUEsU0FBQUEsZ0JBQWdCLEdBQUc7Z0JBQ2pCLElBQU1MLEtBQUssR0FBR00sVUFBWSxhQUFBLEFBQUM7Z0JBRTNCLElBQUksQ0FBQ0YsUUFBUSxDQUFDSixLQUFLLENBQUMsQ0FBQzthQUN0Qjs7O1lBRURPLEdBQWEsRUFBYkEsZUFBYTtZRTFCZixPRjBCRUEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1SLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUMvQ0wsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQy9DSCxnQkFBZ0IsR0FBRyxJQUFJLENBQUNBLGdCQUFnQixDQUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7Z0JBRTFELE9BQVE7b0JBQ05ULGNBQWMsRUFBZEEsY0FBYztvQkFDZEksY0FBYyxFQUFkQSxjQUFjO29CQUNkRSxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtpQkFDakIsQ0FBRTthQUNKOztNQXBDSDs7Q0EwQ0MsQ0FwQ2dESSxTQUFRLFNBb0N4RDtrQkFwQ29CWCxtQkFBbUIsQUFOeEM7QUFzQ0UsZ0JBaENtQkEsbUJBQW1CLEVBZ0MvQlksbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxjQUFjO0lBQ3pCQyxVQUFVLEVBQUUsT0FBTztDQUNwQixDQUFDLEFBekNKIn0=