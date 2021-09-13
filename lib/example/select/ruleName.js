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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJURVJNX1JVTEVfTkFNRSIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwiUnVsZU5hbWVTZWxlY3QiLCJnZXRSdWxlTmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJydWxlTmFtZSIsImNoaWxkRWxlbWVudHMiLCJ0ZXJtTmFtZSIsInRlcm1WYWx1ZSIsImV4cHJlc3Npb25OYW1lIiwiZXhwcmVzc2lvblZhbHVlIiwic3RhdGVtZW50TmFtZSIsInN0YXRlbWVudFZhbHVlIiwibWV0YXN0YXRlbWVudE5hbWUiLCJtZXRhc3RhdGVtZW50VmFsdWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQVcsQ0FBWCxPQUFXO0FBRXNFLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhHLGNBQWMsaUJBQXBCLFFBQVE7Y0FBRixjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2pDLEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQ3JCLFFBQVEsR0FBRyxLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUUzQixNQUFNLENBQUMsUUFBUTtZQUNqQixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFFBQVEsR0FYa0YsVUFBaUIsaUJBWTNHLFNBQVMsR0FBRyxRQUFRLEVBQ3BCLGNBQWMsR0FiNEUsVUFBaUIsdUJBYzNHLGVBQWUsR0FBRyxjQUFjLEVBQ2hDLGFBQWEsR0FmNkUsVUFBaUIsc0JBZ0IzRyxjQUFjLEdBQUcsYUFBYSxFQUM5QixpQkFBaUIsR0FqQnlFLFVBQWlCLDBCQWtCM0csa0JBQWtCLEdBQUcsaUJBQWlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVqRCxNQUFNLENBQUUsQ0FBQzt1REFFTixNQUFNO3dCQUFDLEtBQUssRUFBRSxTQUFTO3dCQUFFLFFBQVEsRUFBUixJQUFRO3VCQUMvQixRQUFRO3VEQUVWLE1BQU07d0JBQUMsS0FBSyxFQUFFLGVBQWU7d0JBQUUsUUFBUSxFQUFSLElBQVE7dUJBQ3JDLGNBQWM7dURBRWhCLE1BQU07d0JBQUMsS0FBSyxFQUFFLGNBQWM7d0JBQUUsUUFBUSxFQUFSLElBQVE7dUJBQ3BDLGFBQWE7dURBRWYsTUFBTTt3QkFBQyxLQUFLLEVBQUUsa0JBQWtCO3dCQUFFLFFBQVEsRUFBUixJQUFRO3VCQUN4QyxpQkFBaUI7Z0JBR3RCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVwRCxNQUFNLENBQUUsQ0FBQztvQkFDUCxXQUFXLEVBQVgsV0FBVztnQkFDYixDQUFDO1lBQ0gsQ0FBQzs7O1dBMUNrQixjQUFjO0VBSmhCLE9BQVc7Z0JBSVQsY0FBYyxHQTRDMUIsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsU0FBVztJQUN0QixVQUFVLEdBQUUsS0FBTztBQUNyQixDQUFDO2tCQS9Da0IsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEVYUFJFU1NJT05fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9ICBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHRlcm1OYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybVZhbHVlID0gdGVybU5hbWUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25OYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZXhwcmVzc2lvblZhbHVlID0gZXhwcmVzc2lvbk5hbWUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudFZhbHVlID0gc3RhdGVtZW50TmFtZSwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50VmFsdWUgPSBtZXRhc3RhdGVtZW50TmFtZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybVZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHt0ZXJtTmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e2V4cHJlc3Npb25WYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7ZXhwcmVzc2lvbk5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtzdGF0ZW1lbnRWYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7c3RhdGVtZW50TmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e21ldGFzdGF0ZW1lbnRWYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7bWV0YXN0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufVxuIl19