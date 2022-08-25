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
                var termName = _ruleNames.TERM_RULE_NAME, statementName = _ruleNames.STATEMENT_RULE_NAME, metastatementName = _ruleNames.METASTATEMENT_RULE_NAME, termValue = termName, statementValue = statementName, metastatementValue = metastatementName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: termValue,
                        selected: true
                    }, termName),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9ICBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHRlcm1OYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50TmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtVmFsdWUgPSB0ZXJtTmFtZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VmFsdWUgPSBzdGF0ZW1lbnROYW1lLCAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50VmFsdWUgPSBtZXRhc3RhdGVtZW50TmFtZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybVZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHt0ZXJtTmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e3N0YXRlbWVudFZhbHVlfT5cbiAgICAgICAge3N0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXttZXRhc3RhdGVtZW50VmFsdWV9PlxuICAgICAgICB7bWV0YXN0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRSdWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1bGUtbmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lU2VsZWN0IiwiZ2V0UnVsZU5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwicnVsZU5hbWUiLCJjaGlsZEVsZW1lbnRzIiwidGVybU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInN0YXRlbWVudE5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInRlcm1WYWx1ZSIsInN0YXRlbWVudFZhbHVlIiwibWV0YXN0YXRlbWVudFZhbHVlIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLGNBQWM7OzsyREFKaEIsV0FBVzt5QkFFZ0QsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEFBQU1BLGNBQWMsaUJBQXBCO2NBQU1BLGNBQWM7OEJBQWRBLGNBQWM7YUFBZEEsY0FBYzs4QkFBZEEsY0FBYzs7O2lCQUFkQSxjQUFjOztZQUNqQ0MsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxRQUFRLEdBQUdGLEtBQUssQUFBQyxFQUFDLEdBQUc7Z0JBRTNCLE9BQU9FLFFBQVEsQ0FBQztZQUNsQixDQUFDOzs7WUFFREMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTUMsUUFBUSxHQUFHQyxVQUFjLGVBQUEsRUFDekJDLGFBQWEsR0FBR0MsVUFBbUIsb0JBQUEsRUFDbkNDLGlCQUFpQixHQUFHQyxVQUF1Qix3QkFBQSxFQUMzQ0MsU0FBUyxHQUFHTixRQUFRLEVBQ3BCTyxjQUFjLEdBQUdMLGFBQWEsRUFDOUJNLGtCQUFrQixHQUFHSixpQkFBaUIsQUFBQyxFQUFDLEdBQUc7Z0JBRWpELE9BQVE7a0NBRU4sb0JBQUNLLFFBQU07d0JBQUNiLEtBQUssRUFBRVUsU0FBUzt3QkFBRUksUUFBUSxFQUFSQSxJQUFRO3VCQUMvQlYsUUFBUSxDQUNGO2tDQUNULG9CQUFDUyxRQUFNO3dCQUFDYixLQUFLLEVBQUVXLGNBQWM7dUJBQzFCTCxhQUFhLENBQ1A7a0NBQ1Qsb0JBQUNPLFFBQU07d0JBQUNiLEtBQUssRUFBRVksa0JBQWtCO3VCQUM5QkosaUJBQWlCLENBQ1g7aUJBRVYsQ0FBRTtZQUNMLENBQUM7OztZQUVETyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNaEIsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUMsR0FBRztnQkFFcEQsT0FBUTtvQkFDTmpCLFdBQVcsRUFBWEEsV0FBVztpQkFDWixDQUFFO1lBQ0wsQ0FBQzs7O1dBckNrQkQsY0FBYztDQTJDbEMsQ0EzQzJDbUIsT0FBTSxRQUFBLENBMkNqRDtBQUpDLGdCQXZDbUJuQixjQUFjLEVBdUMxQm9CLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsV0FBVztJQUN0QkMsVUFBVSxFQUFFLE9BQU87Q0FDcEIsQ0FBQSJ9