"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VocabularyTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class VocabularyTextarea extends _textarea.default {
    getVocabulary() {
        const value = this.getValue(), vocabulary = value; ///
        return vocabulary;
    }
    setVocabulary(vocabulary) {
        const value = vocabulary; ///
        this.setValue(value);
    }
    parentContext() {
        const getVocabulary = this.getVocabulary.bind(this), setVocabulary = this.setVocabulary.bind(this);
        return {
            getVocabulary,
            setVocabulary
        };
    }
    static defaultProperties = {
        className: "vocabulary",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3ZvY2FidWxhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9jYWJ1bGFyeVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRWb2NhYnVsYXJ5KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdm9jYWJ1bGFyeTtcbiAgfVxuXG4gIHNldFZvY2FidWxhcnkodm9jYWJ1bGFyeSkge1xuICAgIGNvbnN0IHZhbHVlID0gdm9jYWJ1bGFyeTsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Vm9jYWJ1bGFyeSA9IHRoaXMuZ2V0Vm9jYWJ1bGFyeS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFZvY2FidWxhcnkgPSB0aGlzLnNldFZvY2FidWxhcnkuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Vm9jYWJ1bGFyeSxcbiAgICAgIHNldFZvY2FidWxhcnlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidm9jYWJ1bGFyeVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZvY2FidWxhcnlUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0Vm9jYWJ1bGFyeSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJ2b2NhYnVsYXJ5Iiwic2V0Vm9jYWJ1bGFyeSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLDJCQUEyQkMsaUJBQVE7SUFDdERDLGdCQUFnQjtRQUNkLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUFPLEdBQUc7UUFFN0IsT0FBT0U7SUFDVDtJQUVBQyxjQUFjRCxVQUFVLEVBQUU7UUFDeEIsTUFBTUYsUUFBUUUsWUFBWSxHQUFHO1FBRTdCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtJQUNoQjtJQUVBSyxnQkFBZ0I7UUFDZCxNQUFNTixnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQzVDSCxnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUNHLElBQUksQ0FBQyxJQUFJO1FBRWxELE9BQVE7WUFDTlA7WUFDQUk7UUFDRjtJQUNGO0lBRUEsT0FBT0ksb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0oifQ==