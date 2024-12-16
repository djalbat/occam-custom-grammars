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
var _select = /*#__PURE__*/ _interop_require_default(require("../select"));
var _patternNames = require("../../patternNames");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var PatternNameSelect = /*#__PURE__*/ function(Select) {
    _inherits(PatternNameSelect, Select);
    function PatternNameSelect() {
        _class_call_check(this, PatternNameSelect);
        return _call_super(this, PatternNameSelect, arguments);
    }
    _create_class(PatternNameSelect, [
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
                    _patternNames.PROPERTY_PATTERN_NAME,
                    _patternNames.OPERATOR_PATTERN_NAME
                ], options = patternNames.map(function(patternName, index) {
                    var value = patternName, selected = index === 0;
                    return /*#__PURE__*/ React.createElement("option", {
                        value: value,
                        selected: selected
                    }, patternName);
                }), childElements = _to_consumable_array(options);
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
_define_property(PatternNameSelect, "defaultProperties", {
    className: "rule-name",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9wYXR0ZXJuTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBTWU1CT0xfUEFUVEVSTl9OQU1FLCBQUk9QRVJUWV9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9ICBmcm9tIFwiLi4vLi4vcGF0dGVybk5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdHRlcm5OYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0UGF0dGVybk5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcGF0dGVybk5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcGF0dGVybk5hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHBhdHRlcm5OYW1lcyA9IFtcbiAgICAgICAgICAgIFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgICAgU1lNQk9MX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICAgIFBST1BFUlRZX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICAgIE9QRVJBVE9SX1BBVFRFUk5fTkFNRVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3B0aW9ucyAgPSBwYXR0ZXJuTmFtZXMubWFwKChwYXR0ZXJuTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGF0dGVybk5hbWUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IChpbmRleCA9PT0gMCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dmFsdWV9IHNlbGVjdGVkPXtzZWxlY3RlZH0gPlxuICAgICAgICAgICAgICAgIHtwYXR0ZXJuTmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgICBdO1xuXG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGF0dGVybk5hbWUgPSB0aGlzLmdldFBhdHRlcm5OYW1lLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQYXR0ZXJuTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhdHRlcm5OYW1lU2VsZWN0IiwiZ2V0UGF0dGVybk5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwicGF0dGVybk5hbWUiLCJjaGlsZEVsZW1lbnRzIiwicGF0dGVybk5hbWVzIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiUFJPUEVSVFlfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwib3B0aW9ucyIsIm1hcCIsImluZGV4Iiwic2VsZWN0ZWQiLCJvcHRpb24iLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NkRBSkY7NEJBRW1GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkYsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsY0FBY0YsT0FBTyxHQUFHO2dCQUU5QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7b0JBQ2JDLCtCQUFpQjtvQkFDakJDLGlDQUFtQjtvQkFDbkJDLG1DQUFxQjtvQkFDckJDLG1DQUFxQjtpQkFDdEIsRUFDREMsVUFBV0wsYUFBYU0sR0FBRyxDQUFDLFNBQUNSLGFBQWFTO29CQUN4QyxJQUFNWCxRQUFRRSxhQUNSVSxXQUFZRCxVQUFVO29CQUU1QixxQkFFRSxvQkFBQ0U7d0JBQU9iLE9BQU9BO3dCQUFPWSxVQUFVQTt1QkFDN0JWO2dCQUlQLElBQ0FDLGdCQUNFLHFCQUFHTTtnQkFJWCxPQUFPTjtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1mLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ2dCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFMUQsT0FBUTtvQkFDTmhCLGdCQUFBQTtnQkFDRjtZQUNGOzs7V0F6Q21CRDtFQUEwQmtCLGVBQU07QUEyQ25ELGlCQTNDbUJsQixtQkEyQ1ptQixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=