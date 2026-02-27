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
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NominalBNFTextarea extends _textarea.default {
    getNominalBNF() {
        const value = this.getValue(), nominalBNF = value; ///
        return nominalBNF;
    }
    setNominalBNF(nominalBNF) {
        const value = nominalBNF; ///
        this.setValue(value);
    }
    clearNominalBNF() {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    parentContext() {
        const getNominalBNF = this.getNominalBNF.bind(this), setNominalBNF = this.setNominalBNF.bind(this), clearNominalBNF = this.clearNominalBNF.bind(this);
        return {
            getNominalBNF,
            setNominalBNF,
            clearNominalBNF
        };
    }
    static defaultProperties = {
        className: "nominal-bnf",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(NominalBNFTextarea)`

  height: 48rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL25vbWluYWxCTkYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBOb21pbmFsQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldE5vbWluYWxCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbEJORiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBub21pbmFsQk5GO1xuICB9XG5cbiAgc2V0Tm9taW5hbEJORihub21pbmFsQk5GKSB7XG4gICAgY29uc3QgdmFsdWUgPSBub21pbmFsQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyTm9taW5hbEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXROb21pbmFsQk5GID0gdGhpcy5nZXROb21pbmFsQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Tm9taW5hbEJORiA9IHRoaXMuc2V0Tm9taW5hbEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyTm9taW5hbEJORiA9IHRoaXMuY2xlYXJOb21pbmFsQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldE5vbWluYWxCTkYsXG4gICAgICBzZXROb21pbmFsQk5GLFxuICAgICAgY2xlYXJOb21pbmFsQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5vbWluYWwtYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShOb21pbmFsQk5GVGV4dGFyZWEpYFxuXG4gIGhlaWdodDogNDhyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJOb21pbmFsQk5GVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldE5vbWluYWxCTkYiLCJ2YWx1ZSIsImdldFZhbHVlIiwibm9taW5hbEJORiIsInNldE5vbWluYWxCTkYiLCJzZXRWYWx1ZSIsImNsZWFyTm9taW5hbEJORiIsIkVNUFRZX1NUUklORyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4Q0E7OztlQUFBOzs7c0VBNUNzQjtpRUFFRDsyQkFFUTs7Ozs7O0FBRTdCLE1BQU1BLDJCQUEyQkMsaUJBQVE7SUFDdkNDLGdCQUFnQjtRQUNkLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUFPLEdBQUc7UUFFN0IsT0FBT0U7SUFDVDtJQUVBQyxjQUFjRCxVQUFVLEVBQUU7UUFDeEIsTUFBTUYsUUFBUUUsWUFBYSxHQUFHO1FBRTlCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtJQUNoQjtJQUVBSyxrQkFBa0I7UUFDaEIsTUFBTUwsUUFBUU0sdUJBQVk7UUFFMUIsSUFBSSxDQUFDRixRQUFRLENBQUNKO0lBQ2hCO0lBRUFPLGdCQUFnQjtRQUNkLE1BQU1SLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ1MsSUFBSSxDQUFDLElBQUksR0FDNUNMLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ0ssSUFBSSxDQUFDLElBQUksR0FDNUNILGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQ0csSUFBSSxDQUFDLElBQUk7UUFFdEQsT0FBUTtZQUNOVDtZQUNBSTtZQUNBRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSSxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNmLG1CQUFtQixDQUFDOzs7O0FBSTdDLENBQUMifQ==