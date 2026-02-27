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
const _select = /*#__PURE__*/ _interop_require_default(require("../select"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleNameSelect extends _select.default {
    getRuleName() {
        const value = this.getValue(), ruleName = value; ///
        return ruleName;
    }
    childElements() {
        const ruleNames = [
            _ruleNames.TERM_RULE_NAME,
            _ruleNames.STATEMENT_RULE_NAME
        ], options = ruleNames.map((ruleName, index)=>{
            const value = ruleName, selected = index === 2;
            return /*#__PURE__*/ React.createElement("option", {
                value: value,
                selected: selected
            }, ruleName);
        }), childElements = [
            ...options
        ];
        return childElements;
    }
    parentContext() {
        const getRuleName = this.getRuleName.bind(this); ///
        return {
            getRuleName
        };
    }
    static defaultProperties = {
        className: "rule-name",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FIH0gIGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVTZWxlY3QgZXh0ZW5kcyBTZWxlY3Qge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gW1xuICAgICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgICBTVEFURU1FTlRfUlVMRV9OQU1FXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcHRpb25zID0gcnVsZU5hbWVzLm1hcCgocnVsZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSAoaW5kZXggPT09IDIpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBzZWxlY3RlZD17c2VsZWN0ZWR9ID5cbiAgICAgICAgICAgICAgICB7cnVsZU5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRSdWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1bGUtbmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVTZWxlY3QiLCJTZWxlY3QiLCJnZXRSdWxlTmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJydWxlTmFtZSIsImNoaWxkRWxlbWVudHMiLCJydWxlTmFtZXMiLCJURVJNX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OytEQUpGOzJCQUVrQzs7Ozs7O0FBRXRDLE1BQU1BLHVCQUF1QkMsZUFBTTtJQUNoREMsY0FBYztRQUNaLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxXQUFXRixPQUFPLEdBQUc7UUFFM0IsT0FBT0U7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxZQUFZO1lBQ1ZDLHlCQUFjO1lBQ2RDLDhCQUFtQjtTQUNwQixFQUNEQyxVQUFVSCxVQUFVSSxHQUFHLENBQUMsQ0FBQ04sVUFBVU87WUFDakMsTUFBTVQsUUFBUUUsVUFDUlEsV0FBWUQsVUFBVTtZQUU1QixxQkFFRSxvQkFBQ0U7Z0JBQU9YLE9BQU9BO2dCQUFPVSxVQUFVQTtlQUM3QlI7UUFJUCxJQUNBQyxnQkFBZ0I7ZUFDWEk7U0FDSjtRQUVQLE9BQU9KO0lBQ1Q7SUFFQVMsZ0JBQWdCO1FBQ2QsTUFBTWIsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ2MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRXBELE9BQVE7WUFDTmQ7UUFDRjtJQUNGO0lBRUEsT0FBT2Usb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFDO0FBQ0gifQ==