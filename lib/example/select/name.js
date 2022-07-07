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
var _select = /*#__PURE__*/ _interopRequireDefault(require("../select"));
var _grammarNames = require("../../grammarNames");
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
var NameSelect = /*#__PURE__*/ function(Select) {
    _inherits(NameSelect, Select);
    var _super = _createSuper(NameSelect);
    function NameSelect() {
        _classCallCheck(this, NameSelect);
        return _super.apply(this, arguments);
    }
    _createClass(NameSelect, [
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
                var defaultName = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, userDefinedName1 = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, userDefinedName2 = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_2, defaultValue = defaultName, userDefinedValue1 = userDefinedName1, userDefinedValue2 = userDefinedName2; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: defaultValue,
                        selected: true
                    }, defaultName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: userDefinedValue1
                    }, userDefinedName1),
                    /*#__PURE__*/ React.createElement("option", {
                        value: userDefinedValue2
                    }, userDefinedName2)
                ];
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
_defineProperty(NameSelect, "defaultProperties", {
    className: "name",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9uYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yIH0gZnJvbSBcIi4uLy4uL2dyYW1tYXJOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBuYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGRlZmF1bHROYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAgICAgIHVzZXJEZWZpbmVkTmFtZTEgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLFxuICAgICAgICAgIHVzZXJEZWZpbmVkTmFtZTIgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8yLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHROYW1lLCAvLy9cbiAgICAgICAgICB1c2VyRGVmaW5lZFZhbHVlMSA9IHVzZXJEZWZpbmVkTmFtZTEsIC8vL1xuICAgICAgICAgIHVzZXJEZWZpbmVkVmFsdWUyID0gdXNlckRlZmluZWROYW1lMjsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHtkZWZhdWx0TmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e3VzZXJEZWZpbmVkVmFsdWUxfT5cbiAgICAgICAge3VzZXJEZWZpbmVkTmFtZTF9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXt1c2VyRGVmaW5lZFZhbHVlMn0+XG4gICAgICAgIHt1c2VyRGVmaW5lZE5hbWUyfVxuICAgICAgPC9vcHRpb24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9IHRoaXMuZ2V0TmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTmFtZVNlbGVjdCIsImdldE5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwibmFtZSIsImNoaWxkRWxlbWVudHMiLCJkZWZhdWx0TmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsInVzZXJEZWZpbmVkTmFtZTEiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xIiwidXNlckRlZmluZWROYW1lMiIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzIiLCJkZWZhdWx0VmFsdWUiLCJ1c2VyRGVmaW5lZFZhbHVlMSIsInVzZXJEZWZpbmVkVmFsdWUyIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLFVBQVU7OzsyREFKWixXQUFXOzRCQUVzRixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpILElBQUEsQUFBTUEsVUFBVSxpQkFBaEI7OzthQUFNQSxVQUFVOzs7Ozs7WUFDN0JDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUN2QkMsSUFBSSxHQUFHRixLQUFLLEFBQUMsRUFBQyxHQUFHO2dCQUV2QixPQUFPRSxJQUFJLENBQUM7YUFDYjs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1DLFdBQVcsR0FBR0MsYUFBMkIsNEJBQUEsRUFDekNDLGdCQUFnQixHQUFHQyxhQUFrQyxtQ0FBQSxFQUNyREMsZ0JBQWdCLEdBQUdDLGFBQWtDLG1DQUFBLEVBQ3JEQyxZQUFZLEdBQUdOLFdBQVcsRUFDMUJPLGlCQUFpQixHQUFHTCxnQkFBZ0IsRUFDcENNLGlCQUFpQixHQUFHSixnQkFBZ0IsQUFBQyxFQUFDLEdBQUc7Z0JBRS9DLE9BQVE7a0NBRU4sb0JBQUNLLFFBQU07d0JBQUNiLEtBQUssRUFBRVUsWUFBWTt3QkFBRUksUUFBUSxFQUFSQSxJQUFRO3VCQUNsQ1YsV0FBVyxDQUNMO2tDQUNULG9CQUFDUyxRQUFNO3dCQUFDYixLQUFLLEVBQUVXLGlCQUFpQjt1QkFDN0JMLGdCQUFnQixDQUNWO2tDQUNULG9CQUFDTyxRQUFNO3dCQUFDYixLQUFLLEVBQUVZLGlCQUFpQjt1QkFDN0JKLGdCQUFnQixDQUNWO2lCQUVWLENBQUU7YUFDSjs7O1lBRURPLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1oQixPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNpQixJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxHQUFHO2dCQUU1QyxPQUFRO29CQUNOakIsT0FBTyxFQUFQQSxPQUFPO2lCQUNSLENBQUU7YUFDSjs7OztDQU1GLENBM0N1Q2tCLE9BQU0sUUFBQSxDQTJDN0M7QUFKQyxnQkF2Q21CbkIsVUFBVSxFQXVDdEJvQixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLE1BQU07SUFDakJDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUEifQ==