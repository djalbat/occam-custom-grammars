"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _select = _interopRequireDefault(require("../select"));
var _grammarNames = require("../../grammarNames");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var NameSelect = /*#__PURE__*/ function(Select) {
    _inherits(NameSelect, Select);
    function NameSelect() {
        _classCallCheck(this, NameSelect);
        return _possibleConstructorReturn(this, _getPrototypeOf(NameSelect).apply(this, arguments));
    }
    _createClass(NameSelect, [
        {
            key: "getName",
            value: function getName() {
                var value = this.getValue(), name = value; ///
                return name;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var defaultName = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, defaultValue = defaultName, userDefinedName = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME, userDefinedValue = userDefinedName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: defaultValue,
                        selected: true
                    }, defaultName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: userDefinedValue
                    }, userDefinedName), 
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getName = this.getName.bind(this); ///
                return {
                    getName: getName
                };
            }
        }
    ]);
    return NameSelect;
}(_select.default);
_defineProperty(NameSelect, "defaultProperties", {
    className: "name",
    spellCheck: "false"
});
exports.default = NameSelect;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9uYW1lLmpzIl0sIm5hbWVzIjpbIlNlbGVjdCIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiTmFtZVNlbGVjdCIsImdldE5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwibmFtZSIsImNoaWxkRWxlbWVudHMiLCJkZWZhdWx0TmFtZSIsImRlZmF1bHRWYWx1ZSIsInVzZXJEZWZpbmVkTmFtZSIsInVzZXJEZWZpbmVkVmFsdWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQVcsQ0FBWCxPQUFXO0FBRWdELEdBQW9CLENBQXBCLGFBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdFLFVBQVUsaUJBQWhCLFFBQVE7Y0FBRixVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVO2dFQUFWLFVBQVU7O2lCQUFWLFVBQVU7O1lBQzdCLEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQ3JCLElBQUksR0FBRyxLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV2QixNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsV0FBVyxHQVh5RCxhQUFvQiw4QkFZeEYsWUFBWSxHQUFHLFdBQVcsRUFDMUIsZUFBZSxHQWJxRCxhQUFvQixtQ0FjeEYsZ0JBQWdCLEdBQUcsZUFBZSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFN0MsTUFBTSxDQUFFLENBQUM7dURBRU4sTUFBTTt3QkFBQyxLQUFLLEVBQUUsWUFBWTt3QkFBRSxRQUFRLEVBQVIsSUFBUTt1QkFDbEMsV0FBVzt1REFFYixNQUFNO3dCQUFDLEtBQUssRUFBRSxnQkFBZ0I7dUJBQzVCLGVBQWU7Z0JBR3BCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU1QyxNQUFNLENBQUUsQ0FBQztvQkFDUCxPQUFPLEVBQVAsT0FBTztnQkFDVCxDQUFDO1lBQ0gsQ0FBQzs7O1dBaENrQixVQUFVO0VBSlosT0FBVztnQkFJVCxVQUFVLEdBa0N0QixpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxJQUFNO0lBQ2pCLFVBQVUsR0FBRSxLQUFPO0FBQ3JCLENBQUM7a0JBckNrQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL3NlbGVjdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4uLy4uL2dyYW1tYXJOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBuYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGRlZmF1bHROYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHROYW1lLCAvLy9cbiAgICAgICAgICB1c2VyRGVmaW5lZE5hbWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgICAgICB1c2VyRGVmaW5lZFZhbHVlID0gdXNlckRlZmluZWROYW1lOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPXtkZWZhdWx0VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge2RlZmF1bHROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17dXNlckRlZmluZWRWYWx1ZX0+XG4gICAgICAgIHt1c2VyRGVmaW5lZE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9IHRoaXMuZ2V0TmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdfQ==