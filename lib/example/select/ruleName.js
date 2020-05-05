"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _select = _interopRequireDefault(require("../select"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RuleNameSelect = /*#__PURE__*/function (_Select) {
  _inherits(RuleNameSelect, _Select);

  var _super = _createSuper(RuleNameSelect);

  function RuleNameSelect() {
    _classCallCheck(this, RuleNameSelect);

    return _super.apply(this, arguments);
  }

  _createClass(RuleNameSelect, [{
    key: "childElements",
    value: function childElements(properties) {
      var termName = _constants.TERM_RULE_NAME,
          ///
      termValue = termName,
          ///
      expressionName = _constants.EXPRESSION_RULE_NAME,
          ///
      expressionValue = expressionName,
          ///
      statementName = _constants.STATEMENT_RULE_NAME,
          ///
      statementValue = statementName,
          ///
      metastatementName = _constants.METASTATEMENT_RULE_NAME,
          ///
      metastatementValue = metastatementName; ///

      return [/*#__PURE__*/React.createElement("option", {
        value: termValue,
        selected: true
      }, termName), /*#__PURE__*/React.createElement("option", {
        value: expressionValue,
        selected: true
      }, expressionName), /*#__PURE__*/React.createElement("option", {
        value: statementValue,
        selected: true
      }, statementName), /*#__PURE__*/React.createElement("option", {
        value: metastatementValue,
        selected: true
      }, metastatementName)];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getRuleName = this.getSelectedOptionValue.bind(this); ///

      return {
        getRuleName: getRuleName
      };
    }
  }]);

  return RuleNameSelect;
}(_select["default"]);

exports["default"] = RuleNameSelect;

_defineProperty(RuleNameSelect, "defaultProperties", {
  className: "rule-name",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lU2VsZWN0IiwicHJvcGVydGllcyIsInRlcm1OYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtVmFsdWUiLCJleHByZXNzaW9uTmFtZSIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwiZXhwcmVzc2lvblZhbHVlIiwic3RhdGVtZW50TmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJzdGF0ZW1lbnRWYWx1ZSIsIm1ldGFzdGF0ZW1lbnROYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJtZXRhc3RhdGVtZW50VmFsdWUiLCJnZXRSdWxlTmFtZSIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJiaW5kIiwiU2VsZWN0IiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7OztrQ0FDTEMsVSxFQUFZO0FBQ3hCLFVBQU1DLFFBQVEsR0FBR0MseUJBQWpCO0FBQUEsVUFBa0M7QUFDNUJDLE1BQUFBLFNBQVMsR0FBR0YsUUFEbEI7QUFBQSxVQUM0QjtBQUN0QkcsTUFBQUEsY0FBYyxHQUFHQywrQkFGdkI7QUFBQSxVQUU2QztBQUN2Q0MsTUFBQUEsZUFBZSxHQUFHRixjQUh4QjtBQUFBLFVBR3dDO0FBQ2xDRyxNQUFBQSxhQUFhLEdBQUdDLDhCQUp0QjtBQUFBLFVBSTRDO0FBQ3RDQyxNQUFBQSxjQUFjLEdBQUdGLGFBTHZCO0FBQUEsVUFLc0M7QUFDaENHLE1BQUFBLGlCQUFpQixHQUFHQyxrQ0FOMUI7QUFBQSxVQU1tRDtBQUM3Q0MsTUFBQUEsa0JBQWtCLEdBQUdGLGlCQVAzQixDQUR3QixDQVFzQjs7QUFFOUMsYUFBUSxjQUVOO0FBQVEsUUFBQSxLQUFLLEVBQUVQLFNBQWY7QUFBMEIsUUFBQSxRQUFRO0FBQWxDLFNBQ0dGLFFBREgsQ0FGTSxlQUtOO0FBQVEsUUFBQSxLQUFLLEVBQUVLLGVBQWY7QUFBZ0MsUUFBQSxRQUFRO0FBQXhDLFNBQ0dGLGNBREgsQ0FMTSxlQVFOO0FBQVEsUUFBQSxLQUFLLEVBQUVLLGNBQWY7QUFBK0IsUUFBQSxRQUFRO0FBQXZDLFNBQ0dGLGFBREgsQ0FSTSxlQVdOO0FBQVEsUUFBQSxLQUFLLEVBQUVLLGtCQUFmO0FBQW1DLFFBQUEsUUFBUTtBQUEzQyxTQUNHRixpQkFESCxDQVhNLENBQVI7QUFnQkQ7OztvQ0FFZTtBQUNkLFVBQU1HLFdBQVcsR0FBRyxLQUFLQyxzQkFBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBcEIsQ0FEYyxDQUM4Qzs7QUFFNUQsYUFBUTtBQUNORixRQUFBQSxXQUFXLEVBQVhBO0FBRE0sT0FBUjtBQUdEOzs7O0VBbkN5Q0csa0I7Ozs7Z0JBQXZCakIsYyx1QkFxQ1E7QUFDekJrQixFQUFBQSxTQUFTLEVBQUUsV0FEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEVYUFJFU1NJT05fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9ICBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGVybU5hbWUgPSBURVJNX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIHRlcm1WYWx1ZSA9IHRlcm1OYW1lLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uTmFtZSA9IEVYUFJFU1NJT05fUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uVmFsdWUgPSBleHByZXNzaW9uTmFtZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRWYWx1ZSA9IHN0YXRlbWVudE5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRWYWx1ZSA9IG1ldGFzdGF0ZW1lbnROYW1lOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPXt0ZXJtVmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge3Rlcm1OYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17ZXhwcmVzc2lvblZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHtleHByZXNzaW9uTmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e3N0YXRlbWVudFZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHtzdGF0ZW1lbnROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17bWV0YXN0YXRlbWVudFZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHttZXRhc3RhdGVtZW50TmFtZX1cbiAgICAgIDwvb3B0aW9uPixcblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRSdWxlTmFtZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdfQ==