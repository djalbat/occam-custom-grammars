"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentTextarea extends _textarea.default {
    getContent() {
        const value = this.getValue(), content = value; ///
        return content;
    }
    setContent(content) {
        const value = content;
        this.setValue(value);
    }
    parentContext() {
        const getContent = this.getContent.bind(this), setContent = this.setContent.bind(this);
        return {
            getContent,
            setContent
        };
    }
    static defaultProperties = {
        className: "content",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(ContentTextarea)`

  height: 12rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgQ29udGVudFRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gY29udGVudDtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Q29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb250ZW50LFxuICAgICAgc2V0Q29udGVudFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb250ZW50XCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb250ZW50VGV4dGFyZWEpYFxuXG4gIGhlaWdodDogMTJyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJDb250ZW50VGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldENvbnRlbnQiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7c0VBbENzQjtpRUFFRDs7Ozs7O0FBRXJCLE1BQU1BLHdCQUF3QkMsaUJBQVE7SUFDcENDLGFBQWE7UUFDWCxNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsVUFBVUYsT0FBTyxHQUFHO1FBRTFCLE9BQU9FO0lBQ1Q7SUFFQUMsV0FBV0QsT0FBTyxFQUFFO1FBQ2xCLE1BQU1GLFFBQVFFO1FBRWQsSUFBSSxDQUFDRSxRQUFRLENBQUNKO0lBQ2hCO0lBRUFLLGdCQUFnQjtRQUNkLE1BQU1OLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQ3RDSCxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUU1QyxPQUFRO1lBQ05QO1lBQ0FJO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IsZ0JBQWdCLENBQUM7Ozs7QUFJMUMsQ0FBQyJ9