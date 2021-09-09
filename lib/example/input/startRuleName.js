"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _input = _interopRequireDefault(require("../input"));
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
var StartRuleNameInput = /*#__PURE__*/ function(Input) {
    _inherits(StartRuleNameInput, Input);
    function StartRuleNameInput() {
        _classCallCheck(this, StartRuleNameInput);
        return _possibleConstructorReturn(this, _getPrototypeOf(StartRuleNameInput).apply(this, arguments));
    }
    _createClass(StartRuleNameInput, [
        {
            key: "getStartRuleName",
            value: function getStartRuleName() {
                var value = this.getValue(), startRuleName = value; ///
                return startRuleName;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getStartRuleName = this.getStartRuleName.bind(this);
                return {
                    getStartRuleName: getStartRuleName
                };
            }
        }
    ]);
    return StartRuleNameInput;
}(_input.default);
_defineProperty(StartRuleNameInput, "defaultProperties", {
    className: "start-rule-name",
    spellCheck: "false"
});
exports.default = StartRuleNameInput;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L3N0YXJ0UnVsZU5hbWUuanMiXSwibmFtZXMiOlsiSW5wdXQiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJnZXRTdGFydFJ1bGVOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInN0YXJ0UnVsZU5hbWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTSxHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVQLGtCQUFrQixpQkFBeEIsUUFBUTtjQUFGLGtCQUFrQjthQUFsQixrQkFBa0I7OEJBQWxCLGtCQUFrQjtnRUFBbEIsa0JBQWtCOztpQkFBbEIsa0JBQWtCOztZQUNyQyxHQUFnQixHQUFoQixnQkFBZ0I7bUJBQWhCLFFBQVEsQ0FBUixnQkFBZ0IsR0FBRyxDQUFDO2dCQUNsQixHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQ3JCLGFBQWEsR0FBRyxLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVoQyxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFFeEQsTUFBTSxDQUFFLENBQUM7b0JBQ1AsZ0JBQWdCLEVBQWhCLGdCQUFnQjtnQkFDbEIsQ0FBQztZQUNILENBQUM7OztXQWRrQixrQkFBa0I7RUFGckIsTUFBVTtnQkFFUCxrQkFBa0IsR0FnQjlCLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLGVBQWlCO0lBQzVCLFVBQVUsR0FBRSxLQUFPO0FBQ3JCLENBQUM7a0JBbkJrQixrQkFBa0IifQ==