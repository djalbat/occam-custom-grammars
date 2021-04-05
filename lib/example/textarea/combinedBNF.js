"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
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
var CombinedBNFTextarea = function(Textarea) {
    _inherits(CombinedBNFTextarea, _textarea.default);
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
                var value = "";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbWJpbmVkQk5GLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldENvbWJpbmVkQk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbWJpbmVkQk5GID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQk5GO1xuICB9XG5cbiAgc2V0Q29tYmluZWRCTkYoY29tYmluZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbWJpbmVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyQ29tYmluZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBcIlwiO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldENvbWJpbmVkQk5GID0gdGhpcy5nZXRDb21iaW5lZEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldENvbWJpbmVkQk5GID0gdGhpcy5zZXRDb21iaW5lZEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyQ29tYmluZWRCTkYgPSB0aGlzLmNsZWFyQ29tYmluZWRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29tYmluZWRCTkYsXG4gICAgICBzZXRDb21iaW5lZEJORixcbiAgICAgIGNsZWFyQ29tYmluZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29tYmluZWQtYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFUyxTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWIsbUJBQW1CLFlBQVMsUUFBUTtjQUFwQyxtQkFBbUIsRUFGbkIsU0FBYTthQUViLG1CQUFtQjs4QkFBbkIsbUJBQW1CO2dFQUFuQixtQkFBbUI7O2lCQUFuQixtQkFBbUI7O0FBQ3RDLGVBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7b0JBQ04sS0FBSyxRQUFRLFFBQVEsSUFDckIsV0FBVyxHQUFHLEtBQUssQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXZCLFdBQVc7Ozs7QUFHcEIsZUFBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFdBQVc7b0JBQ2xCLEtBQUssR0FBRyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3FCQUUxQixRQUFRLENBQUMsS0FBSzs7OztBQUdyQixlQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQjtvQkFDUixLQUFLO3FCQUVOLFFBQVEsQ0FBQyxLQUFLOzs7O0FBR3JCLGVBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsY0FBYyxRQUFRLGNBQWMsQ0FBQyxJQUFJLFFBQ3pDLGNBQWMsUUFBUSxjQUFjLENBQUMsSUFBSSxRQUN6QyxnQkFBZ0IsUUFBUSxnQkFBZ0IsQ0FBQyxJQUFJOztBQUdqRCxrQ0FBYyxFQUFkLGNBQWM7QUFDZCxrQ0FBYyxFQUFkLGNBQWM7QUFDZCxvQ0FBZ0IsRUFBaEIsZ0JBQWdCOzs7OztXQTVCRCxtQkFBbUI7RUFGbkIsU0FBYTtnQkFFYixtQkFBbUIsR0FnQy9CLGlCQUFpQjtBQUN0QixhQUFTLEdBQUUsWUFBYztBQUN6QixjQUFVLEdBQUUsS0FBTzs7a0JBbENGLG1CQUFtQiJ9