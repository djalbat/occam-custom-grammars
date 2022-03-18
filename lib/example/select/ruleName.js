"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _select = _interopRequireDefault(require("../select"));
var _ruleNames = require("../../ruleNames");
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
var RuleNameSelect = /*#__PURE__*/ function(Select) {
    _inherits(RuleNameSelect, Select);
    var _super = _createSuper(RuleNameSelect);
    function RuleNameSelect() {
        _classCallCheck(this, RuleNameSelect);
        return _super.apply(this, arguments);
    }
    _createClass(RuleNameSelect, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var value = this.getValue(), ruleName = value; ///
                return ruleName;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var termName = _ruleNames.TERM_RULE_NAME, termValue = termName, expressionName = _ruleNames.EXPRESSION_RULE_NAME, expressionValue = expressionName, statementName = _ruleNames.STATEMENT_RULE_NAME, statementValue = statementName, metastatementName = _ruleNames.METASTATEMENT_RULE_NAME, metastatementValue = metastatementName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: termValue,
                        selected: true
                    }, termName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: expressionValue,
                        selected: true
                    }, expressionName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: statementValue,
                        selected: true
                    }, statementName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: metastatementValue,
                        selected: true
                    }, metastatementName), 
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getRuleName = this.getRuleName.bind(this); ///
                return {
                    getRuleName: getRuleName
                };
            }
        }
    ]);
    return RuleNameSelect;
}(_select.default);
exports.default = RuleNameSelect;
_defineProperty(RuleNameSelect, "defaultProperties", {
    className: "rule-name",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSAgZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB0ZXJtTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1WYWx1ZSA9IHRlcm1OYW1lLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uTmFtZSA9IEVYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGV4cHJlc3Npb25WYWx1ZSA9IGV4cHJlc3Npb25OYW1lLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnRWYWx1ZSA9IHN0YXRlbWVudE5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFZhbHVlID0gbWV0YXN0YXRlbWVudE5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxvcHRpb24gdmFsdWU9e3Rlcm1WYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7dGVybU5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtleHByZXNzaW9uVmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge2V4cHJlc3Npb25OYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17c3RhdGVtZW50VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge3N0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXttZXRhc3RhdGVtZW50VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge21ldGFzdGF0ZW1lbnROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTmFtZVNlbGVjdCIsImdldFJ1bGVOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInJ1bGVOYW1lIiwiY2hpbGRFbGVtZW50cyIsInRlcm1OYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtVmFsdWUiLCJleHByZXNzaW9uTmFtZSIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwiZXhwcmVzc2lvblZhbHVlIiwic3RhdGVtZW50TmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJzdGF0ZW1lbnRWYWx1ZSIsIm1ldGFzdGF0ZW1lbnROYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJtZXRhc3RhdGVtZW50VmFsdWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiU2VsZWN0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRW1CLElBQUEsT0FBVyxrQ0FBWCxXQUFXLEVBQUE7QUFFc0UsSUFBQSxVQUFpQixXQUFqQixpQkFBaUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUpySDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxjQUFjLGlCQ05oQyxBRE1ZO3FDQU5mOzthQU1xQkEsY0FBYzs2Q0FObkM7Ozs7O1lBT0VDLEdBQVcsRUFBWEEsYUFBVztZRVBiLE9GT0VBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUUsRUFDdkJDLFFBQVEsR0FBR0YsS0FBSyxBQUFDLEVBQUMsR0FBRztnQkFFM0IsT0FBT0UsUUFBUSxDQUFDO2FBQ2pCOzs7WUFFREMsR0FBYSxFQUFiQSxlQUFhO1lFZGYsT0ZjRUEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1DLFFBQVEsR0FBR0MsVUFBYyxlQUFBLEVBQ3pCQyxTQUFTLEdBQUdGLFFBQVEsRUFDcEJHLGNBQWMsR0FBR0MsVUFBb0IscUJBQUEsRUFDckNDLGVBQWUsR0FBR0YsY0FBYyxFQUNoQ0csYUFBYSxHQUFHQyxVQUFtQixvQkFBQSxFQUNuQ0MsY0FBYyxHQUFHRixhQUFhLEVBQzlCRyxpQkFBaUIsR0FBR0MsVUFBdUIsd0JBQUEsRUFDM0NDLGtCQUFrQixHQUFHRixpQkFBaUIsQUFBQyxFQUFDLEdBQUc7Z0JBRWpELE9BQVE7a0NBRU4sb0JBQUNHLFFBQU07d0JBQUNoQixLQUFLLEVBQUVNLFNBQVM7d0JBQUVXLFFBQVEsRUFBUkEsSUFBUTt1QkFDL0JiLFFBQVEsQ0FDRjtrQ0FDVCxvQkFBQ1ksUUFBTTt3QkFBQ2hCLEtBQUssRUFBRVMsZUFBZTt3QkFBRVEsUUFBUSxFQUFSQSxJQUFRO3VCQUNyQ1YsY0FBYyxDQUNSO2tDQUNULG9CQUFDUyxRQUFNO3dCQUFDaEIsS0FBSyxFQUFFWSxjQUFjO3dCQUFFSyxRQUFRLEVBQVJBLElBQVE7dUJBQ3BDUCxhQUFhLENBQ1A7a0NBQ1Qsb0JBQUNNLFFBQU07d0JBQUNoQixLQUFLLEVBQUVlLGtCQUFrQjt3QkFBRUUsUUFBUSxFQUFSQSxJQUFRO3VCQUN4Q0osaUJBQWlCLENBQ1g7aUJBRVYsQ0FBRTthQUNKOzs7WUFFREssR0FBYSxFQUFiQSxlQUFhO1lFMUNmLE9GMENFQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTW5CLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ29CLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLEdBQUc7Z0JBRXBELE9BQVE7b0JBQ05wQixXQUFXLEVBQVhBLFdBQVc7aUJBQ1osQ0FBRTthQUNKOztNQWhESDs7Q0FzREMsQ0FoRDJDcUIsT0FBTSxTQWdEakQ7a0JBaERvQnRCLGNBQWMsQUFObkM7QUFrREUsZ0JBNUNtQkEsY0FBYyxFQTRDMUJ1QixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFdBQVc7SUFDdEJDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUEsQUFyREgifQ==