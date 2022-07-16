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
                var typeName = _ruleNames.TYPE_RULE_NAME, termName = _ruleNames.TERM_RULE_NAME, expressionName = _ruleNames.EXPRESSION_RULE_NAME, statementName = _ruleNames.STATEMENT_RULE_NAME, metastatementName = _ruleNames.METASTATEMENT_RULE_NAME, typeValue = typeName, termValue = termName, expressionValue = expressionName, statementValue = statementName, metastatementValue = metastatementName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: typeValue,
                        selected: true
                    }, typeName),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBURVJNX1JVTEVfTkFNRSwgRVhQUkVTU0lPTl9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gIGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVTZWxlY3QgZXh0ZW5kcyBTZWxlY3Qge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSBUWVBFX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIGV4cHJlc3Npb25OYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50TmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlVmFsdWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgdGVybVZhbHVlID0gdGVybU5hbWUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25WYWx1ZSA9IGV4cHJlc3Npb25OYW1lLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRWYWx1ZSA9IHN0YXRlbWVudE5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRWYWx1ZSA9IG1ldGFzdGF0ZW1lbnROYW1lOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPXt0eXBlVmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge3R5cGVOYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybVZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHt0ZXJtTmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e2V4cHJlc3Npb25WYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7ZXhwcmVzc2lvbk5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtzdGF0ZW1lbnRWYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7c3RhdGVtZW50TmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e21ldGFzdGF0ZW1lbnRWYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7bWV0YXN0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlTmFtZVNlbGVjdCIsImdldFJ1bGVOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInJ1bGVOYW1lIiwiY2hpbGRFbGVtZW50cyIsInR5cGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJ0ZXJtTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwiZXhwcmVzc2lvbk5hbWUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsInN0YXRlbWVudE5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInR5cGVWYWx1ZSIsInRlcm1WYWx1ZSIsImV4cHJlc3Npb25WYWx1ZSIsInN0YXRlbWVudFZhbHVlIiwibWV0YXN0YXRlbWVudFZhbHVlIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLGNBQWM7OzsyREFKaEIsV0FBVzt5QkFFc0YsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0SCxJQUFBLEFBQU1BLGNBQWMsaUJBQXBCOzs7YUFBTUEsY0FBYzs7Ozs7O1lBQ2pDQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUUsRUFDdkJDLFFBQVEsR0FBR0YsS0FBSyxBQUFDLEVBQUMsR0FBRztnQkFFM0IsT0FBT0UsUUFBUSxDQUFDO2FBQ2pCOzs7WUFFREMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTUMsUUFBUSxHQUFHQyxVQUFjLGVBQUEsRUFDekJDLFFBQVEsR0FBR0MsVUFBYyxlQUFBLEVBQ3pCQyxjQUFjLEdBQUdDLFVBQW9CLHFCQUFBLEVBQ3JDQyxhQUFhLEdBQUdDLFVBQW1CLG9CQUFBLEVBQ25DQyxpQkFBaUIsR0FBR0MsVUFBdUIsd0JBQUEsRUFDM0NDLFNBQVMsR0FBR1YsUUFBUSxFQUNwQlcsU0FBUyxHQUFHVCxRQUFRLEVBQ3BCVSxlQUFlLEdBQUdSLGNBQWMsRUFDaENTLGNBQWMsR0FBR1AsYUFBYSxFQUM5QlEsa0JBQWtCLEdBQUdOLGlCQUFpQixBQUFDLEVBQUMsR0FBRztnQkFFakQsT0FBUTtrQ0FFTixvQkFBQ08sUUFBTTt3QkFBQ25CLEtBQUssRUFBRWMsU0FBUzt3QkFBRU0sUUFBUSxFQUFSQSxJQUFRO3VCQUMvQmhCLFFBQVEsQ0FDRjtrQ0FDVCxvQkFBQ2UsUUFBTTt3QkFBQ25CLEtBQUssRUFBRWUsU0FBUzt3QkFBRUssUUFBUSxFQUFSQSxJQUFRO3VCQUMvQmQsUUFBUSxDQUNGO2tDQUNULG9CQUFDYSxRQUFNO3dCQUFDbkIsS0FBSyxFQUFFZ0IsZUFBZTt3QkFBRUksUUFBUSxFQUFSQSxJQUFRO3VCQUNyQ1osY0FBYyxDQUNSO2tDQUNULG9CQUFDVyxRQUFNO3dCQUFDbkIsS0FBSyxFQUFFaUIsY0FBYzt3QkFBRUcsUUFBUSxFQUFSQSxJQUFRO3VCQUNwQ1YsYUFBYSxDQUNQO2tDQUNULG9CQUFDUyxRQUFNO3dCQUFDbkIsS0FBSyxFQUFFa0Isa0JBQWtCO3dCQUFFRSxRQUFRLEVBQVJBLElBQVE7dUJBQ3hDUixpQkFBaUIsQ0FDWDtpQkFFVixDQUFFO2FBQ0o7OztZQUVEUyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNdEIsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsR0FBRztnQkFFcEQsT0FBUTtvQkFDTnZCLFdBQVcsRUFBWEEsV0FBVztpQkFDWixDQUFFO2FBQ0o7Ozs7Q0FNRixDQXJEMkN3QixPQUFNLFFBQUEsQ0FxRGpEO0FBSkMsZ0JBakRtQnpCLGNBQWMsRUFpRDFCMEIsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxXQUFXO0lBQ3RCQyxVQUFVLEVBQUUsT0FBTztDQUNwQixDQUFBIn0=