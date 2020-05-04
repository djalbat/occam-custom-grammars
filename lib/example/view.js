"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _occamGrammarUtilities = require("occam-grammar-utilities");

var _occamParsers = require("occam-parsers");

var _occamLexers = require("occam-lexers");

var _heading = _interopRequireDefault(require("./heading"));

var _column = _interopRequireDefault(require("./div/column"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _name = _interopRequireDefault(require("./select/name"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _ruleName = _interopRequireDefault(require("./select/ruleName"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));

var _combinedBNF = _interopRequireDefault(require("./textarea/combinedBNF"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _topmostRuleName = _interopRequireDefault(require("./input/topmostRuleName"));

var _combinedCustomGrammar = _interopRequireDefault(require("../combinedCustomGrammar"));

var _userDefinedCustomGrammar = _interopRequireDefault(require("../userDefinedCustomGrammar"));

var _rule = require("../utilities/rule");

var _rules = require("../utilities/rules");

var _lexers = require("../utilities/lexers");

var _parsers = require("../utilities/parsers");

var _constants = require("../constants");

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
            combinedCustomGrammar = _combinedCustomGrammar["default"].fromCustomGrammars(customGrammars),
            combinedCustomGrammarRules = combinedCustomGrammar.getRules(),
            multiLine = true,
            combinedCustomGrammarRulesString = (0, _rules.rulesAsString)(combinedCustomGrammarRules, multiLine),
            combinedBNF = combinedCustomGrammarRulesString,
            ///
        florenceLexer = (0, _lexers.florenceLexerFromCombinedCustomGrammar)(combinedCustomGrammar),
            florenceParser = (0, _parsers.florenceParserFromCombinedCustomGrammar)(combinedCustomGrammar),
            topmostRuleName = this.getTopmostRuleName(),
            rules = florenceParser.getRules(),
            topmostRule = (0, _rule.findRule)(topmostRuleName, rules),
            content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens, topmostRule);

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
          ruleName = this.getRuleName();
      var bnf, readOnly, lexicalPattern;

      if (name === _constants.DEFAULT_CUSTOM_GRAMMAR_NAME) {
        switch (ruleName) {
          case "term":
            bnf = _occamParsers.termDefaultCustomGrammarBNF;
            break;

          case "statement":
            bnf = _occamParsers.statementDefaultCustomGrammarBNF;
            break;

          case "expression":
            bnf = _occamParsers.expressionDefaultCustomGrammarBNF;
            break;

          case "metastatement":
            bnf = _occamParsers.metastatementDefaultCustomGrammarBNF;
            break;
        }

        lexicalPattern = _occamLexers.defaultCustomGrammarLexicalPattern;
        readOnly = true;
      } else {
        bnf = _userDefinedCustomGrammar["default"].getBNF(ruleName);
        lexicalPattern = _userDefinedCustomGrammar["default"].getLexicalPattern();
        readOnly = false;
      }

      this.setBNF(bnf);
      this.setBNFReadOnly(readOnly);
      this.setLexicalPattern(lexicalPattern);
      this.setLexicalPatternReadOnly(readOnly);
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "Grammar utilities example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Name"), /*#__PURE__*/React.createElement(_name["default"], {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Rule name"), /*#__PURE__*/React.createElement(_ruleName["default"], {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical pattern"), /*#__PURE__*/React.createElement(_lexicalPattern["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Topmost rule name"), /*#__PURE__*/React.createElement(_topmostRuleName["default"], {
        onKeyUp: keyUpHandler
      })), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Combined BNF"), /*#__PURE__*/React.createElement(_combinedBNF["default"], null)))];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
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

      exampleView.initialise(properties);
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsIm5hbWUiLCJnZXROYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyIsImdldFJ1bGVzIiwibXVsdGlMaW5lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInRvcG1vc3RSdWxlTmFtZSIsImdldFRvcG1vc3RSdWxlTmFtZSIsInJ1bGVzIiwidG9wbW9zdFJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJzZXRDb21iaW5lZEJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJDb21iaW5lZEJORiIsInJlYWRPbmx5IiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwidGVybURlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEJORiIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsInNldENvbnRlbnQiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBQ0YsRTs7Ozs7OzttQ0FFRjtBQUNiLFVBQUk7QUFDRixZQUFNQyxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQUFiOztBQUVBLFlBQUlELElBQUksS0FBS0UsMkNBQWIsRUFBK0M7QUFDN0MsY0FBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLGNBQ01DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBRGpCO0FBQUEsY0FFTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBRnZCOztBQUlBQywrQ0FBeUJDLE1BQXpCLENBQWdDTCxRQUFoQyxFQUEwQ0YsR0FBMUM7O0FBRUFNLCtDQUF5QkUsaUJBQXpCLENBQTJDSixjQUEzQztBQUNEOztBQUVELFlBQU1LLGNBQWMsR0FBRyxDQUNmSCxvQ0FEZSxDQUF2QjtBQUFBLFlBR01JLHFCQUFxQixHQUFHQyxrQ0FBc0JDLGtCQUF0QixDQUF5Q0gsY0FBekMsQ0FIOUI7QUFBQSxZQUlNSSwwQkFBMEIsR0FBR0gscUJBQXFCLENBQUNJLFFBQXRCLEVBSm5DO0FBQUEsWUFLTUMsU0FBUyxHQUFHLElBTGxCO0FBQUEsWUFNTUMsZ0NBQWdDLEdBQUcsMEJBQWNILDBCQUFkLEVBQTBDRSxTQUExQyxDQU56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QUQ7QUFBZ0IsUUFBQSxRQUFRLEVBQUVBO0FBQTFCLFFBUkYsZUFTRSxvQkFBQyxzQkFBRCwwQkFURixlQVlFLG9CQUFDLDBCQUFEO0FBQXFCLFFBQUEsT0FBTyxFQUFFRjtBQUE5QixRQVpGLGVBYUUsb0JBQUMsc0JBQUQsY0FiRixlQWdCRSxvQkFBQyxlQUFEO0FBQWEsUUFBQSxPQUFPLEVBQUVBO0FBQXRCLFFBaEJGLGVBaUJFLG9CQUFDLHNCQUFELDRCQWpCRixlQW9CRSxvQkFBQywyQkFBRDtBQUFzQixRQUFBLE9BQU8sRUFBRUE7QUFBL0IsUUFwQkYsQ0FERixlQXVCRSxvQkFBQyxvQkFBRCxPQXZCRixlQXdCRSxvQkFBQyxrQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCxrQkFERixlQUlFLG9CQUFDLG1CQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQUpGLGVBS0Usb0JBQUMsc0JBQUQscUJBTEYsZUFRRSxvQkFBQyxxQkFBRCxPQVJGLGVBU0Usb0JBQUMsc0JBQUQsdUJBVEYsZUFZRSxvQkFBQyx1QkFBRCxPQVpGLENBeEJGLENBTE0sQ0FBUjtBQThDRDs7OytCQUVVRCxVLEVBQVk7QUFDckIsV0FBS0ksYUFBTDtBQUVBLFVBQU01QixPQUFPLEdBQUcsS0FBSzZCLGNBQXJCO0FBRUEsV0FBS0MsVUFBTCxDQUFnQjlCLE9BQWhCO0FBRUEsV0FBSzJCLGFBQUw7QUFFQSxXQUFLRixZQUFMO0FBQ0Q7Ozs4QkFJZ0JNLEssRUFBT1AsVSxFQUFZO0FBQ2xDLFVBQU1RLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJQLFVBQXpCLENBQXBCOztBQUVBUSxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJYLFVBQXZCO0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7O0VBbEsrQkMsYTs7OztnQkFBYjdELEksYUEwSkYsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IENvbHVtbnNEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiBhcyB0ZXJtRGVmYXVsdEJORixcbiAgICAgICAgIHN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIGFzIHN0YXRlbWVudERlZmF1bHRCTkYsXG4gICAgICAgICBleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgYXMgZXhwcmVzc2lvbkRlZmF1bHRCTkYsXG4gICAgICAgICBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgYXMgbWV0YXN0YXRlbWVudERlZmF1bHRCTkYgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybiBhcyBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IE5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L25hbWVcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvcnVsZU5hbWVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBDb21iaW5lZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbWJpbmVkQk5GXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBUb3Btb3N0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC90b3Btb3N0UnVsZU5hbWVcIjtcbmltcG9ydCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2NvbWJpbmVkQ3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IGZpbmRSdWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBydWxlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xleGVyc1wiO1xuaW1wb3J0IHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGluaXRpYWxDb250ZW50ID0gXCJcIjtcblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgdG9wbW9zdFJ1bGVOYW1lID0gdGhpcy5nZXRUb3Btb3N0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIHRvcG1vc3RSdWxlID0gZmluZFJ1bGUodG9wbW9zdFJ1bGVOYW1lLCBydWxlcyksXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucywgdG9wbW9zdFJ1bGUpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIHRoaXMuc2V0Q29tYmluZWRCTkYoY29tYmluZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5jbGVhckNvbWJpbmVkQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBsZXQgYm5mLFxuICAgICAgICByZWFkT25seSxcbiAgICAgICAgbGV4aWNhbFBhdHRlcm47XG5cbiAgICBpZiAobmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJ0ZXJtXCIgOiBibmYgPSB0ZXJtRGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdGF0ZW1lbnRcIiA6IGJuZiA9IHN0YXRlbWVudERlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiZXhwcmVzc2lvblwiIDogYm5mID0gZXhwcmVzc2lvbkRlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlIFwibWV0YXN0YXRlbWVudFwiIDogYm5mID0gbWV0YXN0YXRlbWVudERlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IGRlZmF1bHRMZXhpY2FsUGF0dGVybjtcblxuICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibmYgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgR3JhbW1hciB1dGlsaXRpZXMgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBOYW1lXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIFRvcG1vc3QgcnVsZSBuYW1lXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxUb3Btb3N0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIENvbWJpbmVkIEJORlxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Q29tYmluZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudDtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==