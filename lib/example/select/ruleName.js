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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RuleNameSelect = /*#__PURE__*/ function(Select) {
    _inherits(RuleNameSelect, Select);
    function RuleNameSelect() {
        _classCallCheck(this, RuleNameSelect);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameSelect).apply(this, arguments));
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
_defineProperty(RuleNameSelect, "defaultProperties", {
    className: "rule-name",
    spellCheck: "false"
});
exports.default = RuleNameSelect;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSAgZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB0ZXJtTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1WYWx1ZSA9IHRlcm1OYW1lLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uTmFtZSA9IEVYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGV4cHJlc3Npb25WYWx1ZSA9IGV4cHJlc3Npb25OYW1lLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnRWYWx1ZSA9IHN0YXRlbWVudE5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFZhbHVlID0gbWV0YXN0YXRlbWVudE5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxvcHRpb24gdmFsdWU9e3Rlcm1WYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7dGVybU5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtleHByZXNzaW9uVmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge2V4cHJlc3Npb25OYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17c3RhdGVtZW50VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge3N0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXttZXRhc3RhdGVtZW50VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge21ldGFzdGF0ZW1lbnROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTmFtZVNlbGVjdCIsImdldFJ1bGVOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInJ1bGVOYW1lIiwiY2hpbGRFbGVtZW50cyIsInRlcm1OYW1lIiwidGVybVZhbHVlIiwiZXhwcmVzc2lvbk5hbWUiLCJleHByZXNzaW9uVmFsdWUiLCJzdGF0ZW1lbnROYW1lIiwic3RhdGVtZW50VmFsdWUiLCJtZXRhc3RhdGVtZW50TmFtZSIsIm1ldGFzdGF0ZW1lbnRWYWx1ZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRU8sR0FBVyxDQUFYLE9BQVc7QUFFc0UsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEdBLGNBQWMsaUJBQXBCLFFBQVE7Y0FBRkEsY0FBYzthQUFkQSxjQUFjOzhCQUFkQSxjQUFjO2dFQUFkQSxjQUFjOztpQkFBZEEsY0FBYzs7WUFDakNDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFFBQVEsR0FBR0YsS0FBSyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFM0IsTUFBTSxDQUFDRSxRQUFRO1lBQ2pCLENBQUM7OztZQUVEQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDQyxRQUFRLEdBWGtGLFVBQWlCLGlCQVkzR0MsU0FBUyxHQUFHRCxRQUFRLEVBQ3BCRSxjQUFjLEdBYjRFLFVBQWlCLHVCQWMzR0MsZUFBZSxHQUFHRCxjQUFjLEVBQ2hDRSxhQUFhLEdBZjZFLFVBQWlCLHNCQWdCM0dDLGNBQWMsR0FBR0QsYUFBYSxFQUM5QkUsaUJBQWlCLEdBakJ5RSxVQUFpQiwwQkFrQjNHQyxrQkFBa0IsR0FBR0QsaUJBQWlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVqRCxNQUFNLENBQUUsQ0FBQztzREFFTkUsQ0FBTTt3QkFBQ1osS0FBSyxFQUFFSyxTQUFTO3dCQUFFUSxRQUFRLEVBQVJBLElBQVE7dUJBQy9CVCxRQUFRO3NEQUVWUSxDQUFNO3dCQUFDWixLQUFLLEVBQUVPLGVBQWU7d0JBQUVNLFFBQVEsRUFBUkEsSUFBUTt1QkFDckNQLGNBQWM7c0RBRWhCTSxDQUFNO3dCQUFDWixLQUFLLEVBQUVTLGNBQWM7d0JBQUVJLFFBQVEsRUFBUkEsSUFBUTt1QkFDcENMLGFBQWE7c0RBRWZJLENBQU07d0JBQUNaLEtBQUssRUFBRVcsa0JBQWtCO3dCQUFFRSxRQUFRLEVBQVJBLElBQVE7dUJBQ3hDSCxpQkFBaUI7Z0JBR3RCLENBQUM7WUFDSCxDQUFDOzs7WUFFREksR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDLElBQUksRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXBELE1BQU0sQ0FBRSxDQUFDO29CQUNQaEIsV0FBVyxFQUFYQSxXQUFXO2dCQUNiLENBQUM7WUFDSCxDQUFDOzs7V0ExQ2tCRCxjQUFjO0VBSmhCLE9BQVc7Z0JBSVRBLGNBQWMsRUE0QzFCa0IsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQVc7SUFDdEJDLFVBQVUsRUFBRSxDQUFPO0FBQ3JCLENBQUM7a0JBL0NrQnBCLGNBQWMifQ==