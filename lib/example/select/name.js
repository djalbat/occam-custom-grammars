"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _select = _interopRequireDefault(require("../select"));
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
                var defaultName = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, defaultValue = defaultName, userDefinedName = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME, userDefinedValue = userDefinedName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: defaultValue,
                        selected: true
                    }, defaultName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: userDefinedValue
                    }, userDefinedName), 
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
exports.default = NameSelect;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi8uLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBkZWZhdWx0TmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0TmFtZSwgLy8vXG4gICAgICAgICAgdXNlckRlZmluZWROYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICAgICAgdXNlckRlZmluZWRWYWx1ZSA9IHVzZXJEZWZpbmVkTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHtkZWZhdWx0TmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e3VzZXJEZWZpbmVkVmFsdWV9PlxuICAgICAgICB7dXNlckRlZmluZWROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldE5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiTmFtZVNlbGVjdCIsImdldE5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwibmFtZSIsImNoaWxkRWxlbWVudHMiLCJkZWZhdWx0TmFtZSIsImRlZmF1bHRWYWx1ZSIsInVzZXJEZWZpbmVkTmFtZSIsInVzZXJEZWZpbmVkVmFsdWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVPLEdBQVcsQ0FBWCxPQUFXO0FBRWdELEdBQW9CLENBQXBCLGFBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdFQSxVQUFVLGlCQUFoQixRQUFRO2NBQUZBLFVBQVU7OEJBQVZBLFVBQVU7YUFBVkEsVUFBVTs4QkFBVkEsVUFBVTs7O2lCQUFWQSxVQUFVOztZQUM3QkMsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULEdBQUssQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsSUFBSSxHQUFHRixLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV2QixNQUFNLENBQUNFLElBQUk7WUFDYixDQUFDOzs7WUFFREMsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQ0MsV0FBVyxHQVh5RCxhQUFvQiw4QkFZeEZDLFlBQVksR0FBR0QsV0FBVyxFQUMxQkUsZUFBZSxHQWJxRCxhQUFvQixtQ0FjeEZDLGdCQUFnQixHQUFHRCxlQUFlLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU3QyxNQUFNLENBQUUsQ0FBQztzREFFTkUsQ0FBTTt3QkFBQ1IsS0FBSyxFQUFFSyxZQUFZO3dCQUFFSSxRQUFRLEVBQVJBLElBQVE7dUJBQ2xDTCxXQUFXO3NEQUViSSxDQUFNO3dCQUFDUixLQUFLLEVBQUVPLGdCQUFnQjt1QkFDNUJELGVBQWU7Z0JBR3BCLENBQUM7WUFDSCxDQUFDOzs7WUFFREksR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDWSxJQUFJLENBQUMsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFNUMsTUFBTSxDQUFFLENBQUM7b0JBQ1BaLE9BQU8sRUFBUEEsT0FBTztnQkFDVCxDQUFDO1lBQ0gsQ0FBQzs7O1dBaENrQkQsVUFBVTtFQUpaLE9BQVc7Z0JBSVRBLFVBQVUsRUFrQ3RCYyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBTTtJQUNqQkMsVUFBVSxFQUFFLENBQU87QUFDckIsQ0FBQztrQkFyQ2tCaEIsVUFBVSJ9