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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9wYXR0ZXJuTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBTWU1CT0xfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSAgZnJvbSBcIi4uLy4uL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXR0ZXJuTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldFBhdHRlcm5OYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhdHRlcm5OYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhdHRlcm5OYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgICBUWVBFX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICAgIFNZTUJPTF9QQVRURVJOX05BTUUsXG4gICAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wdGlvbnMgID0gcGF0dGVybk5hbWVzLm1hcCgocGF0dGVybk5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhdHRlcm5OYW1lLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSAoaW5kZXggPT09IDApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBzZWxlY3RlZD17c2VsZWN0ZWR9ID5cbiAgICAgICAgICAgICAgICB7cGF0dGVybk5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgICAgXTtcblxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBhdHRlcm5OYW1lID0gdGhpcy5nZXRQYXR0ZXJuTmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGF0dGVybk5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXR0ZXJuTmFtZVNlbGVjdCIsImdldFBhdHRlcm5OYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdHRlcm5OYW1lIiwiY2hpbGRFbGVtZW50cyIsInBhdHRlcm5OYW1lcyIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsIm9wdGlvbnMiLCJtYXAiLCJpbmRleCIsInNlbGVjdGVkIiwib3B0aW9uIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJTZWxlY3QiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzZEQUpGOzRCQUU0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxjQUFjRixPQUFPLEdBQUc7Z0JBRTlCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtvQkFDYkMsK0JBQWlCO29CQUNqQkMsaUNBQW1CO29CQUNuQkMsbUNBQXFCO2lCQUN0QixFQUNEQyxVQUFXSixhQUFhSyxHQUFHLENBQUMsU0FBQ1AsYUFBYVE7b0JBQ3hDLElBQU1WLFFBQVFFLGFBQ1JTLFdBQVlELFVBQVU7b0JBRTVCLHFCQUVFLG9CQUFDRTt3QkFBT1osT0FBT0E7d0JBQU9XLFVBQVVBO3VCQUM3QlQ7Z0JBSVAsSUFDQUMsZ0JBQ0UscUJBQUdLO2dCQUlYLE9BQU9MO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWQsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDZSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRTFELE9BQVE7b0JBQ05mLGdCQUFBQTtnQkFDRjtZQUNGOzs7V0F4Q21CRDtFQUEwQmlCLGVBQU07QUEwQ25ELGlCQTFDbUJqQixtQkEwQ1prQixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkIn0=