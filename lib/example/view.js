"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _occamGrammarUtilities = require("occam-grammar-utilities");

var _index = require("../index");

var _heading = _interopRequireDefault(require("./heading"));

var _column = _interopRequireDefault(require("./div/column"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _name = _interopRequireDefault(require("./select/name"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _ruleName = _interopRequireDefault(require("./select/ruleName"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _startRuleName = _interopRequireDefault(require("./input/startRuleName"));

var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));

var _combinedBNF = _interopRequireDefault(require("./textarea/combinedBNF"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _userDefinedCustomGrammar = _interopRequireDefault(require("./userDefinedCustomGrammar"));

var _rules = require("../utilities/rules");

var _constants = require("../constants");

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

var florenceLexerFromCombinedCustomGrammar = _index.lexersUtilities.florenceLexerFromCombinedCustomGrammar,
    florenceParserFromCombinedCustomGrammar = _index.parsersUtilities.florenceParserFromCombinedCustomGrammar;

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    var _this;

    _classCallCheck(this, View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "initialContent", "");

    return _this;
  }

  _createClass(View, [{
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var name = this.getName();

        if (name === _constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
          var bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

          _userDefinedCustomGrammar["default"].setBNF(ruleName, bnf);

          _userDefinedCustomGrammar["default"].setLexicalPattern(lexicalPattern);
        }

        var customGrammars = [_userDefinedCustomGrammar["default"]],
            combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            combinedCustomGrammarRuleMap = combinedCustomGrammar.getRuleMap(),
            combinedCustomGrammarRules = Object.values(combinedCustomGrammarRuleMap),
            multiLine = true,
            combinedCustomGrammarRulesString = (0, _rules.rulesAsString)(combinedCustomGrammarRules, multiLine),
            combinedBNF = combinedCustomGrammarRulesString,
            ///
        florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            ruleMap = florenceParser.getRuleMap(),
            startRuleName = this.getStartRuleName(),
            startRule = ruleMap[startRuleName],
            ///
        content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens, startRule);

        var parseTree = null;

        if (node !== null) {
          (0, _occamGrammarUtilities.removeOrRenameIntermediateNodes)(node);
          parseTree = node.asParseTree(tokens);
        }

        this.setParseTree(parseTree);
        this.setCombinedBNF(combinedBNF);
      } catch (error) {
        console.log(error);
        this.clearParseTree();
        this.clearCombinedBNF();
      }
    }
  }, {
    key: "changeHandler",
    value: function changeHandler() {
      var name = this.getName(),
          ruleName = this.getRuleName(),
          readOnly = name === _constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
          customGrammar = readOnly ? ///
      _index.defaultCustomGrammar : _userDefinedCustomGrammar["default"],
          bnf = customGrammar.getBNF(ruleName),
          lexicalPattern = customGrammar.getLexicalPattern();
      this.setBNF(bnf);
      this.setBNFReadOnly(readOnly);
      this.setLexicalPattern(lexicalPattern);
      this.setLexicalPatternReadOnly(readOnly);
    }
  }, {
    key: "childElements",
    value: function childElements() {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "Grammar utilities example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Name"), /*#__PURE__*/React.createElement(_name["default"], {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Rule name"), /*#__PURE__*/React.createElement(_ruleName["default"], {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical pattern"), /*#__PURE__*/React.createElement(_lexicalPattern["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Start rule name"), /*#__PURE__*/React.createElement(_startRuleName["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Combined BNF"), /*#__PURE__*/React.createElement(_combinedBNF["default"], null))))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var content = this.initialContent;
      this.setContent(content);
      this.changeHandler();
      this.keyUpHandler();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var exampleView = _easy.Element.fromClass(Class, properties);

      exampleView.initialise();
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiVmlldyIsIm5hbWUiLCJnZXROYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlTWFwIiwiZ2V0UnVsZU1hcCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiT2JqZWN0IiwidmFsdWVzIiwibXVsdGlMaW5lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsInNldENvbWJpbmVkQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckNvbWJpbmVkQk5GIiwicmVhZE9ubHkiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJjdXN0b21HcmFtbWFyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJzZXRCTkZSZWFkT25seSIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsInNldENvbnRlbnQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBRUEsc0NBQUYsR0FBNkNDLHNCQUE3QyxDQUFFRCxzQ0FBRjtBQUFBLElBQ0VFLHVDQURGLEdBQzhDQyx1QkFEOUMsQ0FDRUQsdUNBREY7O0lBR2VFLEk7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBQ0YsRTs7Ozs7OzttQ0FFRjtBQUNiLFVBQUk7QUFDRixZQUFNQyxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQUFiOztBQUVBLFlBQUlELElBQUksS0FBS0UsMkNBQWIsRUFBK0M7QUFDN0MsY0FBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLGNBQ01DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBRGpCO0FBQUEsY0FFTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBRnZCOztBQUlBQywrQ0FBeUJDLE1BQXpCLENBQWdDTCxRQUFoQyxFQUEwQ0YsR0FBMUM7O0FBRUFNLCtDQUF5QkUsaUJBQXpCLENBQTJDSixjQUEzQztBQUNEOztBQUVELFlBQU1LLGNBQWMsR0FBRyxDQUNmSCxvQ0FEZSxDQUF2QjtBQUFBLFlBR01JLHFCQUFxQixHQUFHQyw2QkFBc0JDLGtCQUF0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UUFBQSxPQUFPLEVBQUVGO0FBQTlCLFFBWkYsZUFhRSxvQkFBQyxzQkFBRCxjQWJGLGVBZ0JFLG9CQUFDLGVBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBRUE7QUFBdEIsUUFoQkYsZUFpQkUsb0JBQUMsc0JBQUQsMEJBakJGLGVBb0JFLG9CQUFDLHlCQUFEO0FBQW9CLFFBQUEsT0FBTyxFQUFFQTtBQUE3QixRQXBCRixDQURGLENBREYsZUF5QkUsb0JBQUMsb0JBQUQsT0F6QkYsZUEwQkUsb0JBQUMsa0JBQUQscUJBQ0Usb0JBQUMsbUJBQUQscUJBQ0Usb0JBQUMsc0JBQUQsa0JBREYsZUFJRSxvQkFBQyxtQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUE7QUFBMUIsUUFKRixlQUtFLG9CQUFDLHNCQUFELHFCQUxGLGVBUUUsb0JBQUMscUJBQUQsT0FSRixlQVNFLG9CQUFDLHNCQUFELHVCQVRGLGVBWUUsb0JBQUMsdUJBQUQsT0FaRixDQURGLENBMUJGLENBTE0sQ0FBUjtBQWtERDs7O2lDQUVZO0FBQ1gsV0FBS0csYUFBTDtBQUVBLFVBQU14QixPQUFPLEdBQUcsS0FBS3lCLGNBQXJCO0FBRUEsV0FBS0MsVUFBTCxDQUFnQjFCLE9BQWhCO0FBRUEsV0FBS3VCLGFBQUw7QUFFQSxXQUFLRixZQUFMO0FBQ0Q7Ozs4QkFJZ0JNLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQXBCOztBQUVBQyxNQUFBQSxXQUFXLENBQUNHLFVBQVo7QUFFQSxhQUFPSCxXQUFQO0FBQ0Q7Ozs7RUF0SitCQyxhOzs7O2dCQUFiN0QsSSxhQThJRixLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIENvbWJpbmVkQ3VzdG9tR3JhbW1hciwgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQ29tYmluZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb21iaW5lZEJORlwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBydWxlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaW5pdGlhbENvbnRlbnQgPSBcIlwiO1xuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZU1hcCA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyA9IE9iamVjdC52YWx1ZXMoY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZU1hcCksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgcnVsZU1hcCA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZSA9IHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0sIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgdGhpcy5zZXRDb21iaW5lZEJORihjb21iaW5lZEJORik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ29tYmluZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWFkT25seSA9IChuYW1lID09PSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSByZWFkT25seSA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIsXG4gICAgICAgICAgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Qk5GUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkocmVhZE9ubHkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgR3JhbW1hciB1dGlsaXRpZXMgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbWJpbmVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbWJpbmVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQ7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==