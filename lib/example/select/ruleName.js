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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    key: "getRuleName",
    value: function getRuleName() {
      var value = this.getValue(),
          ruleName = value; ///

      return ruleName;
    }
  }, {
    key: "childElements",
    value: function childElements() {
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
      var getRuleName = this.getRuleName.bind(this); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lU2VsZWN0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInJ1bGVOYW1lIiwidGVybU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1WYWx1ZSIsImV4cHJlc3Npb25OYW1lIiwiRVhQUkVTU0lPTl9SVUxFX05BTUUiLCJleHByZXNzaW9uVmFsdWUiLCJzdGF0ZW1lbnROYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudFZhbHVlIiwibWV0YXN0YXRlbWVudE5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm1ldGFzdGF0ZW1lbnRWYWx1ZSIsImdldFJ1bGVOYW1lIiwiYmluZCIsIlNlbGVjdCIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7a0NBQ0w7QUFDWixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsUUFBUSxHQUFHRixLQURqQixDQURZLENBRVk7O0FBRXhCLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsUUFBUSxHQUFHQyx5QkFBakI7QUFBQSxVQUFrQztBQUM1QkMsTUFBQUEsU0FBUyxHQUFHRixRQURsQjtBQUFBLFVBQzRCO0FBQ3RCRyxNQUFBQSxjQUFjLEdBQUdDLCtCQUZ2QjtBQUFBLFVBRTZDO0FBQ3ZDQyxNQUFBQSxlQUFlLEdBQUdGLGNBSHhCO0FBQUEsVUFHd0M7QUFDbENHLE1BQUFBLGFBQWEsR0FBR0MsOEJBSnRCO0FBQUEsVUFJNEM7QUFDdENDLE1BQUFBLGNBQWMsR0FBR0YsYUFMdkI7QUFBQSxVQUtzQztBQUNoQ0csTUFBQUEsaUJBQWlCLEdBQUdDLGtDQU4xQjtBQUFBLFVBTW1EO0FBQzdDQyxNQUFBQSxrQkFBa0IsR0FBR0YsaUJBUDNCLENBRGMsQ0FRZ0M7O0FBRTlDLGFBQVEsY0FFTjtBQUFRLFFBQUEsS0FBSyxFQUFFUCxTQUFmO0FBQTBCLFFBQUEsUUFBUTtBQUFsQyxTQUNHRixRQURILENBRk0sZUFLTjtBQUFRLFFBQUEsS0FBSyxFQUFFSyxlQUFmO0FBQWdDLFFBQUEsUUFBUTtBQUF4QyxTQUNHRixjQURILENBTE0sZUFRTjtBQUFRLFFBQUEsS0FBSyxFQUFFSyxjQUFmO0FBQStCLFFBQUEsUUFBUTtBQUF2QyxTQUNHRixhQURILENBUk0sZUFXTjtBQUFRLFFBQUEsS0FBSyxFQUFFSyxrQkFBZjtBQUFtQyxRQUFBLFFBQVE7QUFBM0MsU0FDR0YsaUJBREgsQ0FYTSxDQUFSO0FBZ0JEOzs7b0NBRWU7QUFDZCxVQUFNRyxXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBcEIsQ0FEYyxDQUNtQzs7QUFFakQsYUFBUTtBQUNORCxRQUFBQSxXQUFXLEVBQVhBO0FBRE0sT0FBUjtBQUdEOzs7O0VBMUN5Q0Usa0I7Ozs7Z0JBQXZCbEIsYyx1QkE0Q1E7QUFDekJtQixFQUFBQSxTQUFTLEVBQUUsV0FEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEVYUFJFU1NJT05fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9ICBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHRlcm1OYW1lID0gVEVSTV9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICB0ZXJtVmFsdWUgPSB0ZXJtTmFtZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbk5hbWUgPSBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvblZhbHVlID0gZXhwcmVzc2lvbk5hbWUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VmFsdWUgPSBzdGF0ZW1lbnROYW1lLCAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50TmFtZSA9IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50VmFsdWUgPSBtZXRhc3RhdGVtZW50TmFtZTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybVZhbHVlfSBzZWxlY3RlZCA+XG4gICAgICAgIHt0ZXJtTmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e2V4cHJlc3Npb25WYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7ZXhwcmVzc2lvbk5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtzdGF0ZW1lbnRWYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7c3RhdGVtZW50TmFtZX1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e21ldGFzdGF0ZW1lbnRWYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7bWV0YXN0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufVxuIl19