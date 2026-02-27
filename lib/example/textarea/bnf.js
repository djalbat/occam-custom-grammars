"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BNFTextarea extends _textarea.default {
    getBNF() {
        const value = this.getValue(), bnf = value; ///
        return bnf;
    }
    setBNF(bnf) {
        const value = bnf;
        this.setValue(value);
    }
    parentContext() {
        const getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
        return {
            getBNF,
            setBNF
        };
    }
    static defaultProperties = {
        className: "bnf",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXRCTkYoYm5mKSB7XG4gICAgY29uc3QgdmFsdWUgPSBibmY7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQk5GVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldEJORiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRCTkYiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2lFQUZBOzs7Ozs7QUFFTixNQUFNQSxvQkFBb0JDLGlCQUFRO0lBQy9DQyxTQUFTO1FBQ1AsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLE1BQU1GLE9BQU8sR0FBRztRQUV0QixPQUFPRTtJQUNUO0lBRUFDLE9BQU9ELEdBQUcsRUFBRTtRQUNWLE1BQU1GLFFBQVFFO1FBRWQsSUFBSSxDQUFDRSxRQUFRLENBQUNKO0lBQ2hCO0lBRUFLLGdCQUFnQjtRQUNkLE1BQU1OLFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQzlCSCxTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUVwQyxPQUFRO1lBQ05QO1lBQ0FJO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKIn0=