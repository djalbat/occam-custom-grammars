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
                var typeName = _patternNames.TYPE_PATTERN_NAME, operatorName = _patternNames.OPERATOR_PATTERN_NAME, typeValue = typeName, operatorValue = operatorName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: typeValue,
                        selected: true
                    }, typeName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: operatorValue
                    }, operatorName)
                ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9wYXR0ZXJuTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSAgZnJvbSBcIi4uLy4uL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXR0ZXJuTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldFBhdHRlcm5OYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhdHRlcm5OYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhdHRlcm5OYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIG9wZXJhdG9yTmFtZSA9IE9QRVJBVE9SX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICB0eXBlVmFsdWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgb3BlcmF0b3JWYWx1ZSA9IG9wZXJhdG9yTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17dHlwZVZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHt0eXBlTmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e29wZXJhdG9yVmFsdWV9PlxuICAgICAgICB7b3BlcmF0b3JOYW1lfVxuICAgICAgPC9vcHRpb24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGF0dGVybk5hbWUgPSB0aGlzLmdldFBhdHRlcm5OYW1lLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQYXR0ZXJuTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQYXR0ZXJuTmFtZVNlbGVjdCIsImdldFBhdHRlcm5OYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdHRlcm5OYW1lIiwiY2hpbGRFbGVtZW50cyIsInR5cGVOYW1lIiwiVFlQRV9QQVRURVJOX05BTUUiLCJvcGVyYXRvck5hbWUiLCJPUEVSQVRPUl9QQVRURVJOX05BTUUiLCJ0eXBlVmFsdWUiLCJvcGVyYXRvclZhbHVlIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLGlCQUFpQjs7OzJEQUpuQixXQUFXOzRCQUU0QixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsaUJBQWlCLGlCQUF2QjtjQUFNQSxpQkFBaUI7OEJBQWpCQSxpQkFBaUI7YUFBakJBLGlCQUFpQjs4QkFBakJBLGlCQUFpQjs7O2lCQUFqQkEsaUJBQWlCOztZQUNwQ0MsR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUN2QkMsV0FBVyxHQUFHRixLQUFLLEFBQUMsRUFBQyxHQUFHO2dCQUU5QixPQUFPRSxXQUFXLENBQUM7WUFDckIsQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1DLFFBQVEsR0FBR0MsYUFBaUIsa0JBQUEsRUFDNUJDLFlBQVksR0FBR0MsYUFBcUIsc0JBQUEsRUFDcENDLFNBQVMsR0FBR0osUUFBUSxFQUNwQkssYUFBYSxHQUFHSCxZQUFZLEFBQUMsRUFBQyxHQUFHO2dCQUV2QyxPQUFRO2tDQUVOLG9CQUFDSSxRQUFNO3dCQUFDVixLQUFLLEVBQUVRLFNBQVM7d0JBQUVHLFFBQVEsRUFBUkEsSUFBUTt1QkFDL0JQLFFBQVEsQ0FDRjtrQ0FDVCxvQkFBQ00sUUFBTTt3QkFBQ1YsS0FBSyxFQUFFUyxhQUFhO3VCQUN6QkgsWUFBWSxDQUNOO2lCQUVWLENBQUU7WUFDTCxDQUFDOzs7WUFFRE0sR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTWIsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDYyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxHQUFHO2dCQUUxRCxPQUFRO29CQUNOZCxjQUFjLEVBQWRBLGNBQWM7aUJBQ2YsQ0FBRTtZQUNMLENBQUM7OztXQWhDa0JELGlCQUFpQjtDQXNDckMsQ0F0QzhDZ0IsT0FBTSxRQUFBLENBc0NwRDtBQUpDLGdCQWxDbUJoQixpQkFBaUIsRUFrQzdCaUIsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxXQUFXO0lBQ3RCQyxVQUFVLEVBQUUsT0FBTztDQUNwQixDQUFBIn0=