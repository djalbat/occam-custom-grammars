"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PatternInput;
    }
});
var _input = /*#__PURE__*/ _interopRequireDefault(require("../input"));
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
var PatternInput = /*#__PURE__*/ function(Input) {
    _inherits(PatternInput, Input);
    var _super = _createSuper(PatternInput);
    function PatternInput() {
        _classCallCheck(this, PatternInput);
        return _super.apply(this, arguments);
    }
    _createClass(PatternInput, [
        {
            key: "getPattern",
            value: function getPattern() {
                var value = this.getValue(), pattern = value; ///
                return pattern;
            }
        },
        {
            key: "setPattern",
            value: function setPattern(pattern) {
                var value = pattern; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getPattern = this.getPattern.bind(this), setPattern = this.setPattern.bind(this);
                return {
                    getPattern: getPattern,
                    setPattern: setPattern
                };
            }
        }
    ]);
    return PatternInput;
}(_input.default);
_defineProperty(PatternInput, "defaultProperties", {
    className: "pattern",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L3BhdHRlcm4uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0dGVybklucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhdHRlcm4gPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfVxuXG4gIHNldFBhdHRlcm4ocGF0dGVybikge1xuICAgIGNvbnN0IHZhbHVlID0gcGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGF0dGVybiA9IHRoaXMuZ2V0UGF0dGVybi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFBhdHRlcm4gPSB0aGlzLnNldFBhdHRlcm4uYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGF0dGVybixcbiAgICAgIHNldFBhdHRlcm5cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGF0dGVyblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQYXR0ZXJuSW5wdXQiLCJnZXRQYXR0ZXJuIiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhdHRlcm4iLCJzZXRQYXR0ZXJuIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIklucHV0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsWUFBWTs7OzBEQUZmLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSxZQUFZLGlCQUFsQjs7O2FBQU1BLFlBQVk7Ozs7OztZQUMvQkMsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxPQUFPLEdBQUdGLEtBQUssQUFBQyxFQUFDLEdBQUc7Z0JBRTFCLE9BQU9FLE9BQU8sQ0FBQzthQUNoQjs7O1lBRURDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxDQUFDRCxPQUFPLEVBQUU7Z0JBQ2xCLElBQU1GLEtBQUssR0FBR0UsT0FBTyxBQUFDLEVBQUMsR0FBRztnQkFFMUIsSUFBSSxDQUFDRSxRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFREssR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTU4sVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3ZDSCxVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztnQkFFOUMsT0FBUTtvQkFDTlAsVUFBVSxFQUFWQSxVQUFVO29CQUNWSSxVQUFVLEVBQVZBLFVBQVU7aUJBQ1gsQ0FBRTthQUNKOzs7O0NBTUYsQ0E1QnlDSSxNQUFLLFFBQUEsQ0E0QjlDO0FBSkMsZ0JBeEJtQlQsWUFBWSxFQXdCeEJVLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsU0FBUztJQUNwQkMsVUFBVSxFQUFFLE9BQU87Q0FDcEIsQ0FBQyJ9