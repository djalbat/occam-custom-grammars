'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var easy = require('easy');

var constants = require('../../constants');

var InputElement = easy.InputElement,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME;

var NameSelect = /*#__PURE__*/function (_InputElement) {
  _inherits(NameSelect, _InputElement);

  var _super = _createSuper(NameSelect);

  function NameSelect() {
    _classCallCheck(this, NameSelect);

    return _super.apply(this, arguments);
  }

  _createClass(NameSelect, [{
    key: "getSelectedOptionValue",
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var defaultName = DEFAULT_CUSTOM_GRAMMAR_NAME,
          ///
      defaultValue = defaultName,
          ///
      userDefinedName = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
          ///
      userDefinedValue = userDefinedName; ///

      return [/*#__PURE__*/React.createElement("option", {
        value: defaultValue,
        selected: true
      }, defaultName), /*#__PURE__*/React.createElement("option", {
        value: userDefinedValue
      }, userDefinedName)];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getName = this.getSelectedOptionValue.bind(this); ///

      return {
        getName: getName
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(NameSelect, properties);
    }
  }]);

  return NameSelect;
}(InputElement);

Object.assign(NameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'name',
    spellCheck: false
  }
});
module.exports = NameSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJjb25zdGFudHMiLCJJbnB1dEVsZW1lbnQiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIk5hbWVTZWxlY3QiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJkZWZhdWx0TmFtZSIsImRlZmF1bHRWYWx1ZSIsInVzZXJEZWZpbmVkTmFtZSIsInVzZXJEZWZpbmVkVmFsdWUiLCJnZXROYW1lIiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsImJpbmQiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUF6Qjs7QUFFTSxJQUFFRSxZQUFGLEdBQW1CSCxJQUFuQixDQUFFRyxZQUFGO0FBQUEsSUFDRUMsMkJBREYsR0FDb0VGLFNBRHBFLENBQ0VFLDJCQURGO0FBQUEsSUFDK0JDLGdDQUQvQixHQUNvRUgsU0FEcEUsQ0FDK0JHLGdDQUQvQjs7SUFHQUMsVTs7Ozs7Ozs7Ozs7Ozs2Q0FDcUI7QUFDdkIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxtQkFBbUIsR0FBR0YsVUFBVSxDQUFDRyxLQUR2QyxDQUR1QixDQUV1Qjs7QUFFOUMsYUFBT0QsbUJBQVA7QUFDRDs7O2tDQUVhRSxVLEVBQVk7QUFDeEIsVUFBTUMsV0FBVyxHQUFHUiwyQkFBcEI7QUFBQSxVQUFrRDtBQUM1Q1MsTUFBQUEsWUFBWSxHQUFHRCxXQURyQjtBQUFBLFVBQ2tDO0FBQzVCRSxNQUFBQSxlQUFlLEdBQUdULGdDQUZ4QjtBQUFBLFVBRTBEO0FBQ3BEVSxNQUFBQSxnQkFBZ0IsR0FBR0QsZUFIekIsQ0FEd0IsQ0FJa0I7O0FBRTFDLGFBQVEsY0FFTjtBQUFRLFFBQUEsS0FBSyxFQUFFRCxZQUFmO0FBQTZCLFFBQUEsUUFBUTtBQUFyQyxTQUF1Q0QsV0FBdkMsQ0FGTSxlQUdOO0FBQVEsUUFBQSxLQUFLLEVBQUVHO0FBQWYsU0FBa0NELGVBQWxDLENBSE0sQ0FBUjtBQU1EOzs7b0NBRWU7QUFDZCxVQUFNRSxPQUFPLEdBQUcsS0FBS0Msc0JBQUwsQ0FBNEJDLElBQTVCLENBQWlDLElBQWpDLENBQWhCLENBRGMsQ0FDMEM7O0FBRXhELGFBQVE7QUFDTkYsUUFBQUEsT0FBTyxFQUFQQTtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkwsVSxFQUFZO0FBQUUsYUFBT1IsWUFBWSxDQUFDZ0IsY0FBYixDQUE0QmIsVUFBNUIsRUFBd0NLLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUE5QjFFUixZOztBQWlDekJpQixNQUFNLENBQUNDLE1BQVAsQ0FBY2YsVUFBZCxFQUEwQjtBQUN4QmdCLEVBQUFBLE9BQU8sRUFBRSxRQURlO0FBRXhCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLE1BRE07QUFFakJDLElBQUFBLFVBQVUsRUFBRTtBQUZLO0FBRkssQ0FBMUI7QUFRQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckIsVUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBOYW1lU2VsZWN0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IGRvbUVsZW1lbnQudmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBkZWZhdWx0TmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgIC8vL1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHROYW1lLCAvLy9cbiAgICAgICAgICB1c2VyRGVmaW5lZE5hbWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgLy8vXG4gICAgICAgICAgdXNlckRlZmluZWRWYWx1ZSA9IHVzZXJEZWZpbmVkTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBzZWxlY3RlZD57ZGVmYXVsdE5hbWV9PC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17dXNlckRlZmluZWRWYWx1ZX0+e3VzZXJEZWZpbmVkTmFtZX08L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhOYW1lU2VsZWN0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgc3BlbGxDaGVjazogZmFsc2VcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmFtZVNlbGVjdDtcbiJdfQ==