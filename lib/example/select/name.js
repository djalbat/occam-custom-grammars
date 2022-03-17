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
exports.default = NameSelect;
_defineProperty(NameSelect, "defaultProperties", {
    className: "name",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi8uLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBkZWZhdWx0TmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0TmFtZSwgLy8vXG4gICAgICAgICAgdXNlckRlZmluZWROYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICAgICAgdXNlckRlZmluZWRWYWx1ZSA9IHVzZXJEZWZpbmVkTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHtkZWZhdWx0TmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e3VzZXJEZWZpbmVkVmFsdWV9PlxuICAgICAgICB7dXNlckRlZmluZWROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldE5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiTmFtZVNlbGVjdCIsImdldE5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwibmFtZSIsImNoaWxkRWxlbWVudHMiLCJkZWZhdWx0TmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImRlZmF1bHRWYWx1ZSIsInVzZXJEZWZpbmVkTmFtZSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwidXNlckRlZmluZWRWYWx1ZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJTZWxlY3QiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRW1CLElBQUEsT0FBVywrQ0FBQTtBQUVnRCxJQUFBLGFBQW9CLGdDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBSmxHO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFNZSxJQUFBLEFBQU1BLFVBQVUsaUJDTjVCLEFETVk7aUNBTmY7O2FBTXFCQSxVQUFVO3lDQU4vQjs7Ozs7WUFPRUMsR0FBTyxXQUFBO1lFUFQsT0ZPRUEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUN2QkMsSUFBSSxHQUFHRixLQUFLLEFBQUMsRUFBQyxHQUFHO2dCQUV2QixPQUFPRSxJQUFJLENBQUM7YUFDYjs7O1lBRURDLEdBQWEsaUJBQUE7WUVkZixPRmNFQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTUMsV0FBVyxHQUFHQyxhQUEyQiw0QkFBQSxFQUN6Q0MsWUFBWSxHQUFHRixXQUFXLEVBQzFCRyxlQUFlLEdBQUdDLGFBQWdDLGlDQUFBLEVBQ2xEQyxnQkFBZ0IsR0FBR0YsZUFBZSxBQUFDLEVBQUMsR0FBRztnQkFFN0MsT0FBUTtrQ0FFTixvQkFBQ0csUUFBTTt3QkFBQ1YsS0FBSyxFQUFFTSxZQUFZO3dCQUFFSyxRQUFRLEVBQVJBLElBQVE7dUJBQ2xDUCxXQUFXLENBQ0w7a0NBQ1Qsb0JBQUNNLFFBQU07d0JBQUNWLEtBQUssRUFBRVMsZ0JBQWdCO3VCQUM1QkYsZUFBZSxDQUNUO2lCQUVWLENBQUU7YUFDSjs7O1lBRURLLEdBQWEsaUJBQUE7WUVoQ2YsT0ZnQ0VBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNYixPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNjLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLEdBQUc7Z0JBRTVDLE9BQVE7b0JBQ05kLE9BQU8sRUFBUEEsT0FBTztpQkFDUixDQUFFO2FBQ0o7O01BdENIOztDQTRDQyxDQXRDdUNlLE9BQU0sU0FzQzdDO2tCQXRDb0JoQixVQUFVLEFBTi9CO0FBd0NFLGdCQWxDbUJBLFVBQVUsdUJBa0NGO0lBQ3pCaUIsU0FBUyxFQUFFLE1BQU07SUFDakJDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUEsQUEzQ0gifQ==