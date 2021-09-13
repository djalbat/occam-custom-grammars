"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var CombinedBNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(CombinedBNFTextarea, Textarea);
    function CombinedBNFTextarea() {
        _classCallCheck(this, CombinedBNFTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(CombinedBNFTextarea).apply(this, arguments));
    }
    _createClass(CombinedBNFTextarea, [
        {
            key: "getCombinedBNF",
            value: function getCombinedBNF() {
                var value = this.getValue(), combinedBNF = value; ///
                return combinedBNF;
            }
        },
        {
            key: "setCombinedBNF",
            value: function setCombinedBNF(combinedBNF) {
                var value = combinedBNF; ///
                this.setValue(value);
            }
        },
        {
            key: "clearCombinedBNF",
            value: function clearCombinedBNF() {
                var value = _constants.EMPTY_STRING;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getCombinedBNF = this.getCombinedBNF.bind(this), setCombinedBNF = this.setCombinedBNF.bind(this), clearCombinedBNF = this.clearCombinedBNF.bind(this);
                return {
                    getCombinedBNF: getCombinedBNF,
                    setCombinedBNF: setCombinedBNF,
                    clearCombinedBNF: clearCombinedBNF
                };
            }
        }
    ]);
    return CombinedBNFTextarea;
}(_textarea.default);
_defineProperty(CombinedBNFTextarea, "defaultProperties", {
    className: "combined-bnf",
    spellCheck: "false"
});
exports.default = CombinedBNFTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbWJpbmVkQk5GLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiRU1QVFlfU1RSSU5HIiwiQ29tYmluZWRCTkZUZXh0YXJlYSIsImdldENvbWJpbmVkQk5GIiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbWJpbmVkQk5GIiwic2V0Q29tYmluZWRCTkYiLCJzZXRWYWx1ZSIsImNsZWFyQ29tYmluZWRCTkYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUyxHQUFhLENBQWIsU0FBYTtBQUVMLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpCLG1CQUFtQixpQkFBekIsUUFBUTtjQUFGLG1CQUFtQjthQUFuQixtQkFBbUI7OEJBQW5CLG1CQUFtQjtnRUFBbkIsbUJBQW1COztpQkFBbkIsbUJBQW1COztZQUN0QyxHQUFjLEdBQWQsY0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFDckIsV0FBVyxHQUFHLEtBQUssQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTlCLE1BQU0sQ0FBQyxXQUFXO1lBQ3BCLENBQUM7OztZQUVELEdBQWMsR0FBZCxjQUFjO21CQUFkLFFBQVEsQ0FBUixjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLEdBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLENBQUM7OztZQUVELEdBQWdCLEdBQWhCLGdCQUFnQjttQkFBaEIsUUFBUSxDQUFSLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQyxLQUFLLEdBakJjLFVBQWlCO2dCQW1CMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksR0FDOUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksR0FDOUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUV4RCxNQUFNLENBQUUsQ0FBQztvQkFDUCxjQUFjLEVBQWQsY0FBYztvQkFDZCxjQUFjLEVBQWQsY0FBYztvQkFDZCxnQkFBZ0IsRUFBaEIsZ0JBQWdCO2dCQUNsQixDQUFDO1lBQ0gsQ0FBQzs7O1dBOUJrQixtQkFBbUI7RUFKbkIsU0FBYTtnQkFJYixtQkFBbUIsR0FnQy9CLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLFlBQWM7SUFDekIsVUFBVSxHQUFFLEtBQU87QUFDckIsQ0FBQztrQkFuQ2tCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Q29tYmluZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29tYmluZWRCTkYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gIH1cblxuICBzZXRDb21iaW5lZEJORihjb21iaW5lZEJORikge1xuICAgIGNvbnN0IHZhbHVlID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJDb21iaW5lZEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRDb21iaW5lZEJORiA9IHRoaXMuZ2V0Q29tYmluZWRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRDb21iaW5lZEJORiA9IHRoaXMuc2V0Q29tYmluZWRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhckNvbWJpbmVkQk5GID0gdGhpcy5jbGVhckNvbWJpbmVkQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbWJpbmVkQk5GLFxuICAgICAgc2V0Q29tYmluZWRCTkYsXG4gICAgICBjbGVhckNvbWJpbmVkQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbWJpbmVkLWJuZlwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl19