"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NameSelect;
    }
});
const _select = /*#__PURE__*/ _interop_require_default(require("../select"));
const _grammarNames = require("../grammarNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NameSelect extends _select.default {
    getName() {
        const value = this.getValue(), name = value; ///
        return name;
    }
    childElements() {
        const names = [
            _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME,
            _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME
        ], options = names.map((name, index)=>{
            const value = name, selected = index === 0;
            return /*#__PURE__*/ React.createElement("option", {
                value: value,
                selected: selected
            }, name);
        }), childElements = [
            ...options
        ];
        return childElements;
    }
    parentContext() {
        const getName = this.getName.bind(this); ///
        return {
            getName
        };
    }
    static defaultProperties = {
        className: "name",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBuYW1lcyA9IFtcbiAgICAgICAgICAgIERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgICAgICAgIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcHRpb25zID0gbmFtZXMubWFwKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBuYW1lLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSAoaW5kZXggPT09IDApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBzZWxlY3RlZD17c2VsZWN0ZWR9ID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldE5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldE5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9XG59XG4iXSwibmFtZXMiOlsiTmFtZVNlbGVjdCIsIlNlbGVjdCIsImdldE5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwibmFtZSIsImNoaWxkRWxlbWVudHMiLCJuYW1lcyIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwib3B0aW9ucyIsIm1hcCIsImluZGV4Iiwic2VsZWN0ZWQiLCJvcHRpb24iLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OzsrREFKRjs4QkFFMkQ7Ozs7OztBQUUvRCxNQUFNQSxtQkFBbUJDLGVBQU07SUFDNUNDLFVBQVU7UUFDUixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsT0FBT0YsT0FBTyxHQUFHO1FBRXZCLE9BQU9FO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsUUFBUTtZQUNOQyx5Q0FBMkI7WUFDM0JDLDhDQUFnQztTQUNqQyxFQUNEQyxVQUFVSCxNQUFNSSxHQUFHLENBQUMsQ0FBQ04sTUFBTU87WUFDekIsTUFBTVQsUUFBUUUsTUFDUlEsV0FBWUQsVUFBVTtZQUU1QixxQkFFRSxvQkFBQ0U7Z0JBQU9YLE9BQU9BO2dCQUFPVSxVQUFVQTtlQUM3QlI7UUFJUCxJQUNBQyxnQkFBZ0I7ZUFDWEk7U0FDSjtRQUVQLE9BQU9KO0lBQ1Q7SUFFQVMsZ0JBQWdCO1FBQ2QsTUFBTWIsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ2MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRTVDLE9BQVE7WUFDTmQ7UUFDRjtJQUNGO0lBRUEsT0FBT2Usb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFDO0FBQ0gifQ==