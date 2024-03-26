"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NameSelect;
    }
});
var _select = /*#__PURE__*/ _interop_require_default(require("../select"));
var _grammarNames = require("../grammarNames");
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var NameSelect = /*#__PURE__*/ function(Select) {
    _inherits(NameSelect, Select);
    var _super = _create_super(NameSelect);
    function NameSelect() {
        _class_call_check(this, NameSelect);
        return _super.apply(this, arguments);
    }
    _create_class(NameSelect, [
        {
            key: "getName",
            value: function getName() {
                var value = this.getValue(), name = value; ///
                return name;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var names = [
                    _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME,
                    _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1,
                    _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2
                ], options = names.map(function(name, index) {
                    var value = name, selected = index === 0;
                    return /*#__PURE__*/ React.createElement("option", {
                        value: value,
                        selected: selected
                    }, name);
                }), childElements = _to_consumable_array(options);
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getName = this.getName.bind(this); ///
                return {
                    getName: getName
                };
            }
        }
    ]);
    return NameSelect;
}(_select.default);
_define_property(NameSelect, "defaultProperties", {
    className: "name",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIH0gZnJvbSBcIi4uL2dyYW1tYXJOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBuYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gW1xuICAgICAgICAgICAgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAgICAgICAgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSxcbiAgICAgICAgICAgIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBuYW1lcy5tYXAoKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5hbWUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IChpbmRleCA9PT0gMCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dmFsdWV9IHNlbGVjdGVkPXtzZWxlY3RlZH0gPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9IHRoaXMuZ2V0TmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOYW1lU2VsZWN0IiwiZ2V0TmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJuYW1lIiwiY2hpbGRFbGVtZW50cyIsIm5hbWVzIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiU2VsZWN0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzZEQUpGOzRCQUVpRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJHLElBQUEsQUFBTUEsMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxPQUFPRixPQUFPLEdBQUc7Z0JBRXZCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUTtvQkFDTkMseUNBQTJCO29CQUMzQkMsZ0RBQWtDO29CQUNsQ0MsZ0RBQWtDO2lCQUNuQyxFQUNEQyxVQUFVSixNQUFNSyxHQUFHLENBQUMsU0FBQ1AsTUFBTVE7b0JBQ3pCLElBQU1WLFFBQVFFLE1BQ1JTLFdBQVlELFVBQVU7b0JBRTVCLHFCQUVFLG9CQUFDRTt3QkFBT1osT0FBT0E7d0JBQU9XLFVBQVVBO3VCQUM3QlQ7Z0JBSVAsSUFDQUMsZ0JBQ0UscUJBQUdLO2dCQUdYLE9BQU9MO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWQsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ2UsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUU1QyxPQUFRO29CQUNOZixTQUFBQTtnQkFDRjtZQUNGOzs7V0F2Q21CRDtFQUFtQmlCLGVBQU07QUF5QzVDLGlCQXpDbUJqQixZQXlDWmtCLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2QifQ==