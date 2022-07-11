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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _textarea = /*#__PURE__*/ _interopRequireDefault(require("../textarea"));
var _constants = require("../../constants");
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  height: 48rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FlorenceBNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(FlorenceBNFTextarea, Textarea);
    var _super = _createSuper(FlorenceBNFTextarea);
    function FlorenceBNFTextarea() {
        _classCallCheck(this, FlorenceBNFTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(FlorenceBNFTextarea, [
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
_defineProperty(FlorenceBNFTextarea, "defaultProperties", {
    className: "florence-bnf",
    spellCheck: "false"
});
var _default = (0, _easyWithStyle.default)(FlorenceBNFTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2Zsb3JlbmNlQk5GLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRmxvcmVuY2VCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0RmxvcmVuY2VCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZmxvcmVuY2VCTkYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gZmxvcmVuY2VCTkY7XG4gIH1cblxuICBzZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORikge1xuICAgIGNvbnN0IHZhbHVlID0gZmxvcmVuY2VCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJGbG9yZW5jZUJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRGbG9yZW5jZUJORiA9IHRoaXMuZ2V0RmxvcmVuY2VCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRGbG9yZW5jZUJORiA9IHRoaXMuc2V0RmxvcmVuY2VCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhckZsb3JlbmNlQk5GID0gdGhpcy5jbGVhckZsb3JlbmNlQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEZsb3JlbmNlQk5GLFxuICAgICAgc2V0RmxvcmVuY2VCTkYsXG4gICAgICBjbGVhckZsb3JlbmNlQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZsb3JlbmNlLWJuZlwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRmxvcmVuY2VCTkZUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiA0OHJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkZsb3JlbmNlQk5GVGV4dGFyZWEiLCJnZXRGbG9yZW5jZUJORiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJmbG9yZW5jZUJORiIsInNldEZsb3JlbmNlQk5GIiwic2V0VmFsdWUiLCJjbGVhckZsb3JlbmNlQk5GIiwiRU1QVFlfU1RSSU5HIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQThDYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBaERvQixpQkFBaUI7NkRBRWxCLGFBQWE7eUJBRUwsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSxtQkFBbUIsaUJBc0N0QixBQXRDSDs7O2FBQU1BLG1CQUFtQjs7Ozs7O1lBQ3ZCQyxHQUFjLEVBQWRBLGdCQUFjO21CQUFkQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxXQUFXLEdBQUdGLEtBQUssQUFBQyxFQUFDLEdBQUc7Z0JBRTlCLE9BQU9FLFdBQVcsQ0FBQzthQUNwQjs7O1lBRURDLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsQ0FBQ0QsV0FBVyxFQUFFO2dCQUMxQixJQUFNRixLQUFLLEdBQUdFLFdBQVcsQUFBQyxFQUFFLEdBQUc7Z0JBRS9CLElBQUksQ0FBQ0UsUUFBUSxDQUFDSixLQUFLLENBQUMsQ0FBQzthQUN0Qjs7O1lBRURLLEdBQWdCLEVBQWhCQSxrQkFBZ0I7bUJBQWhCQSxTQUFBQSxnQkFBZ0IsR0FBRztnQkFDakIsSUFBTUwsS0FBSyxHQUFHTSxVQUFZLGFBQUEsQUFBQztnQkFFM0IsSUFBSSxDQUFDRixRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFRE8sR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTVIsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQy9DTCxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDL0NILGdCQUFnQixHQUFHLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztnQkFFMUQsT0FBUTtvQkFDTlQsY0FBYyxFQUFkQSxjQUFjO29CQUNkSSxjQUFjLEVBQWRBLGNBQWM7b0JBQ2RFLGdCQUFnQixFQUFoQkEsZ0JBQWdCO2lCQUNqQixDQUFFO2FBQ0o7Ozs7Q0FNRixDQXBDaUNJLFNBQVEsUUFBQSxDQW9DekM7QUFKQyxnQkFoQ0lYLG1CQUFtQixFQWdDaEJZLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsY0FBYztJQUN6QkMsVUFBVSxFQUFFLE9BQU87Q0FDcEIsQ0FBQztJQUdKLFFBSUUsR0FKYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNmLG1CQUFtQixDQUFDIn0=