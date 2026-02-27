"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VocabularyNameSelect;
    }
});
const _select = /*#__PURE__*/ _interop_require_default(require("../select"));
const _vocabularyNames = require("../../vocabularyNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class VocabularyNameSelect extends _select.default {
    getVocabularyName() {
        const value = this.getValue(), vocabularyName = value; ///
        return vocabularyName;
    }
    childElements() {
        const vocabularyNames = [
            _vocabularyNames.TYPE_VOCABULARY_NAME,
            _vocabularyNames.SYMBOL_VOCABULARY_NAME
        ], options = vocabularyNames.map((vocabularyName, index)=>{
            const value = vocabularyName, selected = index === 0;
            return /*#__PURE__*/ React.createElement("option", {
                value: value,
                selected: selected
            }, vocabularyName);
        }), childElements = [
            ...options
        ];
        return childElements;
    }
    parentContext() {
        const getVocabularyName = this.getVocabularyName.bind(this); ///
        return {
            getVocabularyName
        };
    }
    static defaultProperties = {
        className: "rule-name",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC92b2NhYnVsYXJ5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRZUEVfVk9DQUJVTEFSWV9OQU1FLCBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIH0gIGZyb20gXCIuLi8uLi92b2NhYnVsYXJ5TmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9jYWJ1bGFyeU5hbWVTZWxlY3QgZXh0ZW5kcyBTZWxlY3Qge1xuICBnZXRWb2NhYnVsYXJ5TmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICB2b2NhYnVsYXJ5TmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiB2b2NhYnVsYXJ5TmFtZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeU5hbWVzID0gW1xuICAgICAgICAgICAgVFlQRV9WT0NBQlVMQVJZX05BTUUsXG4gICAgICAgICAgICBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcHRpb25zICA9IHZvY2FidWxhcnlOYW1lcy5tYXAoKHZvY2FidWxhcnlOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2b2NhYnVsYXJ5TmFtZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gKGluZGV4ID09PSAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSA+XG4gICAgICAgICAgICAgICAge3ZvY2FidWxhcnlOYW1lfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgIF07XG5cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRWb2NhYnVsYXJ5TmFtZSA9IHRoaXMuZ2V0Vm9jYWJ1bGFyeU5hbWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFZvY2FidWxhcnlOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1bGUtbmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiVm9jYWJ1bGFyeU5hbWVTZWxlY3QiLCJTZWxlY3QiLCJnZXRWb2NhYnVsYXJ5TmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJ2b2NhYnVsYXJ5TmFtZSIsImNoaWxkRWxlbWVudHMiLCJ2b2NhYnVsYXJ5TmFtZXMiLCJUWVBFX1ZPQ0FCVUxBUllfTkFNRSIsIlNZTUJPTF9WT0NBQlVMQVJZX05BTUUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OytEQUpGO2lDQUUyQzs7Ozs7O0FBRS9DLE1BQU1BLDZCQUE2QkMsZUFBTTtJQUN0REMsb0JBQW9CO1FBQ2xCLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxpQkFBaUJGLE9BQU8sR0FBRztRQUVqQyxPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLGtCQUFrQjtZQUNoQkMscUNBQW9CO1lBQ3BCQyx1Q0FBc0I7U0FDdkIsRUFDREMsVUFBV0gsZ0JBQWdCSSxHQUFHLENBQUMsQ0FBQ04sZ0JBQWdCTztZQUM5QyxNQUFNVCxRQUFRRSxnQkFDUlEsV0FBWUQsVUFBVTtZQUU1QixxQkFFRSxvQkFBQ0U7Z0JBQU9YLE9BQU9BO2dCQUFPVSxVQUFVQTtlQUM3QlI7UUFJUCxJQUNBQyxnQkFBZ0I7ZUFDWEk7U0FDSjtRQUdQLE9BQU9KO0lBQ1Q7SUFFQVMsZ0JBQWdCO1FBQ2QsTUFBTWIsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNjLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUVoRSxPQUFRO1lBQ05kO1FBQ0Y7SUFDRjtJQUVBLE9BQU9lLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBQztBQUNIIn0=