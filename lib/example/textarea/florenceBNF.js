"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _constants = require("../../constants");
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: 48rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FlorenceBNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(FlorenceBNFTextarea, Textarea);
    var _super = _create_super(FlorenceBNFTextarea);
    function FlorenceBNFTextarea() {
        _class_call_check(this, FlorenceBNFTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(FlorenceBNFTextarea, [
        {
            key: "getFlorenceBNF",
            value: function getFlorenceBNF() {
                var value = this.getValue(), florenceBNF = value; ///
                return florenceBNF;
            }
        },
        {
            key: "setFlorenceBNF",
            value: function setFlorenceBNF(florenceBNF) {
                var value = florenceBNF; ///
                this.setValue(value);
            }
        },
        {
            key: "clearFlorenceBNF",
            value: function clearFlorenceBNF() {
                var value = _constants.EMPTY_STRING;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getFlorenceBNF = this.getFlorenceBNF.bind(this), setFlorenceBNF = this.setFlorenceBNF.bind(this), clearFlorenceBNF = this.clearFlorenceBNF.bind(this);
                return {
                    getFlorenceBNF: getFlorenceBNF,
                    setFlorenceBNF: setFlorenceBNF,
                    clearFlorenceBNF: clearFlorenceBNF
                };
            }
        }
    ]);
    return FlorenceBNFTextarea;
}(_textarea.default);
_define_property(FlorenceBNFTextarea, "defaultProperties", {
    className: "florence-bnf",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(FlorenceBNFTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2Zsb3JlbmNlQk5GLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRmxvcmVuY2VCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0RmxvcmVuY2VCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZmxvcmVuY2VCTkYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gZmxvcmVuY2VCTkY7XG4gIH1cblxuICBzZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORikge1xuICAgIGNvbnN0IHZhbHVlID0gZmxvcmVuY2VCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJGbG9yZW5jZUJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRGbG9yZW5jZUJORiA9IHRoaXMuZ2V0RmxvcmVuY2VCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRGbG9yZW5jZUJORiA9IHRoaXMuc2V0RmxvcmVuY2VCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhckZsb3JlbmNlQk5GID0gdGhpcy5jbGVhckZsb3JlbmNlQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEZsb3JlbmNlQk5GLFxuICAgICAgc2V0RmxvcmVuY2VCTkYsXG4gICAgICBjbGVhckZsb3JlbmNlQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZsb3JlbmNlLWJuZlwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRmxvcmVuY2VCTkZUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiA0OHJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkZsb3JlbmNlQk5GVGV4dGFyZWEiLCJnZXRGbG9yZW5jZUJORiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJmbG9yZW5jZUJORiIsInNldEZsb3JlbmNlQk5GIiwic2V0VmFsdWUiLCJjbGVhckZsb3JlbmNlQk5GIiwiRU1QVFlfU1RSSU5HIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7O29FQTVDc0I7K0RBRUQ7eUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLG9DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxjQUFjRixPQUFPLEdBQUc7Z0JBRTlCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUQsV0FBVztnQkFDeEIsSUFBTUYsUUFBUUUsYUFBYyxHQUFHO2dCQUUvQixJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7WUFDaEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsUUFBUU0sdUJBQVk7Z0JBRTFCLElBQUksQ0FBQ0YsUUFBUSxDQUFDSjtZQUNoQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNTLElBQUksQ0FBQyxJQUFJLEdBQzlDTCxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNLLElBQUksQ0FBQyxJQUFJLEdBQzlDSCxtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ0csSUFBSSxDQUFDLElBQUk7Z0JBRXhELE9BQVE7b0JBQ05ULGdCQUFBQTtvQkFDQUksZ0JBQUFBO29CQUNBRSxrQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBOUJJUDtFQUE0QlcsaUJBQVE7QUFnQ3hDLGlCQWhDSVgscUJBZ0NHWSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2YifQ==