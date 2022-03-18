"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  zoom: 1.5;\n  margin-right: 0.5rem;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RemoveOrRenameIntermediateNodesCheckbox = /*#__PURE__*/ function(Checkbox) {
    _inherits(RemoveOrRenameIntermediateNodesCheckbox, Checkbox);
    var _super = _createSuper(RemoveOrRenameIntermediateNodesCheckbox);
    function RemoveOrRenameIntermediateNodesCheckbox() {
        _classCallCheck(this, RemoveOrRenameIntermediateNodesCheckbox);
        return _super.apply(this, arguments);
    }
    _createClass(RemoveOrRenameIntermediateNodesCheckbox, [
        {
            key: "parentContext",
            value: function parentContext() {
                var isRemoveOrRenameIntermediateNodesCheckboxChecked = this.isChecked.bind(this); ///
                return {
                    isRemoveOrRenameIntermediateNodesCheckboxChecked: isRemoveOrRenameIntermediateNodesCheckboxChecked
                };
            }
        }
    ]);
    return RemoveOrRenameIntermediateNodesCheckbox;
}(_easy.Checkbox);
_defineProperty(RemoveOrRenameIntermediateNodesCheckbox, "defaultProperties", {
    className: "remove-or-rename-intermediate-nodes",
    spellCheck: "false"
});
var _default = (0, _easyWithStyle).default(RemoveOrRenameIntermediateNodesCheckbox)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcImVhc3lcIjtcblxuY2xhc3MgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGV4dGVuZHMgQ2hlY2tib3gge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVtb3ZlLW9yLXJlbmFtZS1pbnRlcm1lZGlhdGUtbm9kZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveClgXG5cbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCIsInBhcmVudENvbnRleHQiLCJpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJiaW5kIiwiQ2hlY2tib3giLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsSUFBQSxjQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFZCxJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKL0I7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7OzhCQUFBOzs7Ozs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7Ozs7O1FBcUJrRSw0RUFNbEU7Ozs7S0EzQkE7OztBQU1BLElBQUEsQUFBTUEsdUNBQXVDLGlCQWUxQyxBQWZIO2dFQU5BOzthQU1NQSx1Q0FBdUM7c0VBTjdDOzs7OztZQU9FQyxHQUFhLEVBQWJBLGVBQWE7WUNQZixPRE9FQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTUMsZ0RBQWdELEdBQUcsSUFBSSxDQUFDQyxTQUFTLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLEdBQUc7Z0JBRXZGLE9BQVE7b0JBQ05GLGdEQUFnRCxFQUFoREEsZ0RBQWdEO2lCQUNqRCxDQUFFO2FBQ0o7O01BYkg7O0NBbUJDLENBYnFERyxLQUFRLFVBYTdEO0FBSkMsZ0JBVElMLHVDQUF1QyxFQVNwQ00sbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxxQ0FBcUM7SUFDaERDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUMsQUFsQko7ZUFxQmVDLENBQUFBLEdBQUFBLGNBQVMsQUFBeUMsQ0FBQSxTQUF4Q1QsdUNBQXVDLENBQUM7MEJBckJqRSJ9