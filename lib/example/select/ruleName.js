"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameSelect;
    }
});
var _select = /*#__PURE__*/ _interopRequireDefault(require("../select"));
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
                var termName = _ruleNames.TERM_RULE_NAME, expressionName = _ruleNames.EXPRESSION_RULE_NAME, statementName = _ruleNames.STATEMENT_RULE_NAME, metastatementName = _ruleNames.METASTATEMENT_RULE_NAME, termValue = termName, expressionValue = expressionName, statementValue = statementName, metastatementValue = metastatementName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: termValue,
                        selected: true
                    }, termName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: expressionValue
                    }, expressionName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: statementValue
                    }, statementName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: metastatementValue
                    }, metastatementName)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSAgZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB0ZXJtTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIGV4cHJlc3Npb25OYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50TmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtVmFsdWUgPSB0ZXJtTmFtZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvblZhbHVlID0gZXhwcmVzc2lvbk5hbWUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFZhbHVlID0gc3RhdGVtZW50TmFtZSwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFZhbHVlID0gbWV0YXN0YXRlbWVudE5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxvcHRpb24gdmFsdWU9e3Rlcm1WYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7dGVybU5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtleHByZXNzaW9uVmFsdWV9PlxuICAgICAgICB7ZXhwcmVzc2lvbk5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtzdGF0ZW1lbnRWYWx1ZX0+XG4gICAgICAgIHtzdGF0ZW1lbnROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17bWV0YXN0YXRlbWVudFZhbHVlfT5cbiAgICAgICAge21ldGFzdGF0ZW1lbnROYW1lfVxuICAgICAgPC9vcHRpb24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlTmFtZVNlbGVjdCIsImdldFJ1bGVOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInJ1bGVOYW1lIiwiY2hpbGRFbGVtZW50cyIsInRlcm1OYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJleHByZXNzaW9uTmFtZSIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwic3RhdGVtZW50TmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJtZXRhc3RhdGVtZW50TmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwidGVybVZhbHVlIiwiZXhwcmVzc2lvblZhbHVlIiwic3RhdGVtZW50VmFsdWUiLCJtZXRhc3RhdGVtZW50VmFsdWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiU2VsZWN0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFNUUEsY0FBYzs7OzJEQUpoQixXQUFXO3lCQUVzRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRHLElBQUEsQUFBTUEsY0FBYyxpQkFBcEI7OzthQUFNQSxjQUFjOzs7Ozs7WUFDakNDLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUN2QkMsUUFBUSxHQUFHRixLQUFLLEFBQUMsRUFBQyxHQUFHO2dCQUUzQixPQUFPRSxRQUFRLENBQUM7YUFDakI7OztZQUVEQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNQyxRQUFRLEdBQUdDLFVBQWMsZUFBQSxFQUN6QkMsY0FBYyxHQUFHQyxVQUFvQixxQkFBQSxFQUNyQ0MsYUFBYSxHQUFHQyxVQUFtQixvQkFBQSxFQUNuQ0MsaUJBQWlCLEdBQUdDLFVBQXVCLHdCQUFBLEVBQzNDQyxTQUFTLEdBQUdSLFFBQVEsRUFDcEJTLGVBQWUsR0FBR1AsY0FBYyxFQUNoQ1EsY0FBYyxHQUFHTixhQUFhLEVBQzlCTyxrQkFBa0IsR0FBR0wsaUJBQWlCLEFBQUMsRUFBQyxHQUFHO2dCQUVqRCxPQUFRO2tDQUVOLG9CQUFDTSxRQUFNO3dCQUFDaEIsS0FBSyxFQUFFWSxTQUFTO3dCQUFFSyxRQUFRLEVBQVJBLElBQVE7dUJBQy9CYixRQUFRLENBQ0Y7a0NBQ1Qsb0JBQUNZLFFBQU07d0JBQUNoQixLQUFLLEVBQUVhLGVBQWU7dUJBQzNCUCxjQUFjLENBQ1I7a0NBQ1Qsb0JBQUNVLFFBQU07d0JBQUNoQixLQUFLLEVBQUVjLGNBQWM7dUJBQzFCTixhQUFhLENBQ1A7a0NBQ1Qsb0JBQUNRLFFBQU07d0JBQUNoQixLQUFLLEVBQUVlLGtCQUFrQjt1QkFDOUJMLGlCQUFpQixDQUNYO2lCQUVWLENBQUU7YUFDSjs7O1lBRURRLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1uQixXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNvQixJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxHQUFHO2dCQUVwRCxPQUFRO29CQUNOcEIsV0FBVyxFQUFYQSxXQUFXO2lCQUNaLENBQUU7YUFDSjs7OztDQU1GLENBaEQyQ3FCLE9BQU0sUUFBQSxDQWdEakQ7QUFKQyxnQkE1Q21CdEIsY0FBYyxFQTRDMUJ1QixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFdBQVc7SUFDdEJDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUEifQ==