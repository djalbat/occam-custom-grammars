"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartRuleNameInput;
    }
});
const _input = /*#__PURE__*/ _interop_require_default(require("../input"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StartRuleNameInput extends _input.default {
    getStartRuleName() {
        const value = this.getValue(), startRuleName = value; ///
        return startRuleName;
    }
    setStartRuleName(startRuleName) {
        const value = startRuleName; ///
        this.setValue(value);
    }
    parentContext() {
        const getStartRuleName = this.getStartRuleName.bind(this), setStartRuleName = this.setStartRuleName.bind(this);
        return {
            getStartRuleName,
            setStartRuleName
        };
    }
    static defaultProperties = {
        className: "start-rule-name",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L3N0YXJ0UnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRSdWxlTmFtZUlucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRTdGFydFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhcnRSdWxlTmFtZTtcbiAgfVxuXG4gIHNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc3RhcnRSdWxlTmFtZTsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRTdGFydFJ1bGVOYW1lID0gdGhpcy5zZXRTdGFydFJ1bGVOYW1lLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFN0YXJ0UnVsZU5hbWUsXG4gICAgICBzZXRTdGFydFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN0YXJ0LXJ1bGUtbmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIklucHV0IiwiZ2V0U3RhcnRSdWxlTmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJzdGFydFJ1bGVOYW1lIiwic2V0U3RhcnRSdWxlTmFtZSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7OERBRkg7Ozs7OztBQUVILE1BQU1BLDJCQUEyQkMsY0FBSztJQUNuREMsbUJBQW1CO1FBQ2pCLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxnQkFBZ0JGLE9BQU8sR0FBRztRQUVoQyxPQUFPRTtJQUNUO0lBRUFDLGlCQUFpQkQsYUFBYSxFQUFFO1FBQzlCLE1BQU1GLFFBQVFFLGVBQWdCLEdBQUc7UUFFakMsSUFBSSxDQUFDRSxRQUFRLENBQUNKO0lBQ2hCO0lBRUFLLGdCQUFnQjtRQUNkLE1BQU1OLG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQixDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUNsREgsbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNHLElBQUksQ0FBQyxJQUFJO1FBRXhELE9BQVE7WUFDTlA7WUFDQUk7UUFDRjtJQUNGO0lBRUEsT0FBT0ksb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0oifQ==