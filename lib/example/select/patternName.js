"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PatternNameSelect;
    }
});
var _select = /*#__PURE__*/ _interopRequireDefault(require("../select"));
var _patternNames = require("../../patternNames");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
var PatternNameSelect = /*#__PURE__*/ function(Select) {
    _inherits(PatternNameSelect, Select);
    var _super = _createSuper(PatternNameSelect);
    function PatternNameSelect() {
        _classCallCheck(this, PatternNameSelect);
        return _super.apply(this, arguments);
    }
    _createClass(PatternNameSelect, [
        {
            key: "getPatternName",
            value: function getPatternName() {
                var value = this.getValue(), patternName = value; ///
                return patternName;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var patternNames = [
                    _patternNames.TYPE_PATTERN_NAME,
                    _patternNames.SYMBOL_PATTERN_NAME,
                    _patternNames.OPERATOR_PATTERN_NAME
                ], options = patternNames.map(function(patternName, index) {
                    var value = patternName, selected = index === 0;
                    return /*#__PURE__*/ React.createElement("option", {
                        value: value,
                        selected: selected
                    }, patternName);
                }), childElements = _toConsumableArray(options);
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getPatternName = this.getPatternName.bind(this); ///
                return {
                    getPatternName: getPatternName
                };
            }
        }
    ]);
    return PatternNameSelect;
}(_select.default);
_defineProperty(PatternNameSelect, "defaultProperties", {
    className: "rule-name",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9wYXR0ZXJuTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBTWU1CT0xfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSAgZnJvbSBcIi4uLy4uL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXR0ZXJuTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldFBhdHRlcm5OYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhdHRlcm5OYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhdHRlcm5OYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgICBUWVBFX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICAgIFNZTUJPTF9QQVRURVJOX05BTUUsXG4gICAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wdGlvbnMgID0gcGF0dGVybk5hbWVzLm1hcCgocGF0dGVybk5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhdHRlcm5OYW1lLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSAoaW5kZXggPT09IDApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBzZWxlY3RlZD17c2VsZWN0ZWR9ID5cbiAgICAgICAgICAgICAgICB7cGF0dGVybk5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgICAgXTtcblxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGF0dGVybk5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUGF0dGVybk5hbWVTZWxlY3QiLCJnZXRQYXR0ZXJuTmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwYXR0ZXJuTmFtZSIsImNoaWxkRWxlbWVudHMiLCJwYXR0ZXJuTmFtZXMiLCJUWVBFX1BBVFRFUk5fTkFNRSIsIlNZTUJPTF9QQVRURVJOX05BTUUiLCJPUEVSQVRPUl9QQVRURVJOX05BTUUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiU2VsZWN0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKRjs0QkFFNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxjQUFjRixPQUFPLEdBQUc7Z0JBRTlCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLGVBQWU7b0JBQ2JDLCtCQUFpQjtvQkFDakJDLGlDQUFtQjtvQkFDbkJDLG1DQUFxQjtpQkFDdEIsRUFDREMsVUFBV0osYUFBYUssR0FBRyxDQUFDLFNBQUNQLGFBQWFRLE9BQVU7b0JBQ2xELElBQU1WLFFBQVFFLGFBQ1JTLFdBQVlELFVBQVU7b0JBRTVCLHFCQUVFLG9CQUFDRTt3QkFBT1osT0FBT0E7d0JBQU9XLFVBQVVBO3VCQUM3QlQ7Z0JBSVAsSUFDQUMsZ0JBQ0UsbUJBQUdLO2dCQUlYLE9BQU9MO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1kLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ2UsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUxRCxPQUFRO29CQUNOZixnQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBeENtQkQ7RUFBMEJpQixlQUFNO0FBMENuRCxnQkExQ21CakIsbUJBMENaa0IscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7QUFDZCJ9