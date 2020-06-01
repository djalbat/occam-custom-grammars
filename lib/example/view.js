"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _occamGrammarUtilities = require("occam-grammar-utilities");

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

var _defaultCustomGrammar = _interopRequireDefault(require("../defaultCustomGrammar"));

var _combinedCustomGrammar = _interopRequireDefault(require("../combinedCustomGrammar"));

var _userDefinedCustomGrammar = _interopRequireDefault(require("./userDefinedCustomGrammar"));

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
          ruleName = this.getRuleName(),
          readOnly = name === _constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
          customGrammar = readOnly ? ///
      _defaultCustomGrammar["default"] : _userDefinedCustomGrammar["default"],
          bnf = customGrammar.getBNF(ruleName),
          lexicalPattern = customGrammar.getLexicalPattern();
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
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "Grammar utilities example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Name"), /*#__PURE__*/React.createElement(_name["default"], {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Rule name"), /*#__PURE__*/React.createElement(_ruleName["default"], {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical pattern"), /*#__PURE__*/React.createElement(_lexicalPattern["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Topmost rule name"), /*#__PURE__*/React.createElement(_topmostRuleName["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Combined BNF"), /*#__PURE__*/React.createElement(_combinedBNF["default"], null))))];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsIm5hbWUiLCJnZXROYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyIsImdldFJ1bGVzIiwibXVsdGlMaW5lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInRvcG1vc3RSdWxlTmFtZSIsImdldFRvcG1vc3RSdWxlTmFtZSIsInJ1bGVzIiwidG9wbW9zdFJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJzZXRDb21iaW5lZEJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJDb21iaW5lZEJORiIsInJlYWRPbmx5IiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiY3VzdG9tR3JhbW1hciIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwic2V0Qk5GUmVhZE9ubHkiLCJzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5IiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJjaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Q29udGVudCIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7OztxRUFDRixFOzs7Ozs7O21DQUVGO0FBQ2IsVUFBSTtBQUNGLFlBQU1DLElBQUksR0FBRyxLQUFLQyxPQUFMLEVBQWI7O0FBRUEsWUFBSUQsSUFBSSxLQUFLRSwyQ0FBYixFQUErQztBQUM3QyxjQUFNQyxHQUFHLEdBQUcsS0FBS0MsTUFBTCxFQUFaO0FBQUEsY0FDTUMsUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFEakI7QUFBQSxjQUVNQyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsRUFGdkI7O0FBSUFDLCtDQUF5QkMsTUFBekIsQ0FBZ0NMLFFBQWhDLEVBQTBDRixHQUExQzs7QUFFQU0sK0NBQXlCRSxpQkFBekIsQ0FBMkNKLGNBQTNDO0FBQ0Q7O0FBRUQsWUFBTUssY0FBYyxHQUFHLENBQ2ZILG9DQURlLENBQXZCO0FBQUEsWUFHTUkscUJBQXFCLEdBQUdDLGtDQUFzQkMsa0JBQXRCLENBQXlDSCxjQUF6QyxDQUg5QjtBQUFBLFlBSU1JLDBCQUEwQixHQUFHSCxxQkFBcUIsQ0FBQ0ksUUFBdEIsRUFKbkM7QUFBQSxZQUtNQyxTQUFTLEdBQUcsSUFMbEI7QUFBQSxZQU1NQyxnQ0FBZ0MsR0FBRywwQkFBY0gsMEJBQWQsRUFBMENFLFNBQTFDLENBTnpDO0FBQUEsWUFPTUUsV0FBVyxHQUFHRCxnQ0FQcEI7QUFBQSxZQU91RDtBQUNqREUsUUFBQUEsYUFBYSxHQUFHLG9EQUF1Q1IscUJBQXZDLENBUnRCO0FBQUEsWUFTTVMsY0FBYyxHQUFHLHNEQUF3Q1QscUJBQXhDLENBVHZCO0FBQUEsWUFVTVUsZUFBZSxHQUFHLEtBQUtDLGtCQUFMLEVBVnhCO0FBQUEsWUFXTUMsS0FBSyxHQUFHSCxjQUFjLENBQUNMLFFBQWYsRUFYZDtBQUFBLFlBWU1TLFdBQVcsR0FBRyxvQkFBU0gsZUFBVCxFQUEwQkUsS0FBMUIsQ0FacEI7QUFBQSxZQWFNRSxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQWJoQjtBQUFBLFlBY01DLE1BQU0sR0FBR1IsYUFBYSxDQUFDUyxRQUFkLENBQXVCSCxPQUF2QixDQWRmO0FBQUEsWUFlTUksSUFBSSxHQUFHVCxjQUFjLENBQUNVLEtBQWYsQ0FBcUJILE1BQXJCLEVBQTZCSCxXQUE3QixDQWZiOztBQWlCQSxZQUFJTyxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsWUFBSUYsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsc0VBQWdDQSxJQUFoQztBQUVBRSxVQUFBQSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csV0FBTCxDQUFpQkwsTUFBakIsQ0FBWjtBQUNEOztBQUVELGFBQUtNLFlBQUwsQ0FBa0JGLFNBQWxCO0FBRUEsYUFBS0csY0FBTCxDQUFvQmhCLFdBQXBCO0FBQ0QsT0F6Q0QsQ0F5Q0UsT0FBT2lCLEtBQVAsRUFBYztBQUNkQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLGFBQUtHLGNBQUw7QUFFQSxhQUFLQyxnQkFBTDtBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLFVBQU16QyxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUksUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFEakI7QUFBQSxVQUVNb0MsUUFBUSxHQUFJMUMsSUFBSSxLQUFLMkMsc0NBRjNCO0FBQUEsVUFHTUMsYUFBYSxHQUFHRixRQUFRLEdBQUk7QUFDVkcsc0NBRE0sR0FFSnBDLG9DQUwxQjtBQUFBLFVBTU1OLEdBQUcsR0FBR3lDLGFBQWEsQ0FBQ3hDLE1BQWQsQ0FBcUJDLFFBQXJCLENBTlo7QUFBQSxVQU9NRSxjQUFjLEdBQUdxQyxhQUFhLENBQUNwQyxpQkFBZCxFQVB2QjtBQVNBLFdBQUtFLE1BQUwsQ0FBWVAsR0FBWjtBQUVBLFdBQUsyQyxjQUFMLENBQW9CSixRQUFwQjtBQUVBLFdBQUsvQixpQkFBTCxDQUF1QkosY0FBdkI7QUFFQSxXQUFLd0MseUJBQUwsQ0FBK0JMLFFBQS9CO0FBQ0Q7OztrQ0FFYU0sVSxFQUFZO0FBQ3hCLFVBQU1DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUFBLFVBQ01DLGFBQWEsR0FBRyxLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUR0QjtBQUdBLGFBQVEsY0FFTixvQkFBQyxtQkFBRCxvQ0FGTSxlQUtOLG9CQUFDLHNCQUFELHFCQUNFLG9CQUFDLG9CQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLHNCQUFELGVBREYsZUFJRSxvQkFBQyxnQkFBRDtBQUFZLFFBQUEsUUFBUSxFQUFFQztBQUF0QixRQUpGLGVBS0Usb0JBQUMsc0JBQUQsb0JBTEYsZUFRRSxvQkFBQyxvQkFBRDtBQUFnQixRQUFBLFFBQVEsRUFBRUE7QUFBMUIsUUFSRixlQVNFLG9CQUFDLHNCQUFELDBCQVRGLGVBWUUsb0JBQUMsMEJBQUQ7QUFBcUIsUUFBQSxPQUFPLEVBQUVGO0FBQTlCLFFBWkYsZUFhRSxvQkFBQyxzQkFBRCxjQWJGLGVBZ0JFLG9CQUFDLGVBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBRUE7QUFBdEIsUUFoQkYsZUFpQkUsb0JBQUMsc0JBQUQsNEJBakJGLGVBb0JFLG9CQUFDLDJCQUFEO0FBQXNCLFFBQUEsT0FBTyxFQUFFQTtBQUEvQixRQXBCRixDQURGLENBREYsZUF5QkUsb0JBQUMsb0JBQUQsT0F6QkYsZUEwQkUsb0JBQUMsa0JBQUQscUJBQ0Usb0JBQUMsbUJBQUQscUJBQ0Usb0JBQUMsc0JBQUQsa0JBREYsZUFJRSxvQkFBQyxtQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUE7QUFBMUIsUUFKRixlQUtFLG9CQUFDLHNCQUFELHFCQUxGLGVBUUUsb0JBQUMscUJBQUQsT0FSRixlQVNFLG9CQUFDLHNCQUFELHVCQVRGLGVBWUUsb0JBQUMsdUJBQUQsT0FaRixDQURGLENBMUJGLENBTE0sQ0FBUjtBQWtERDs7OytCQUVVRCxVLEVBQVk7QUFDckIsV0FBS0ksYUFBTDtBQUVBLFVBQU16QixPQUFPLEdBQUcsS0FBSzBCLGNBQXJCO0FBRUEsV0FBS0MsVUFBTCxDQUFnQjNCLE9BQWhCO0FBRUEsV0FBS3dCLGFBQUw7QUFFQSxXQUFLRixZQUFMO0FBQ0Q7Ozs4QkFJZ0JNLEssRUFBT1AsVSxFQUFZO0FBQ2xDLFVBQU1RLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJQLFVBQXpCLENBQXBCOztBQUVBUSxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJYLFVBQXZCO0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7O0VBckorQkMsYTs7OztnQkFBYjFELEksYUE2SUYsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbnNEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IENvbWJpbmVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29tYmluZWRCTkZcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IFRvcG1vc3RSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3RvcG1vc3RSdWxlTmFtZVwiO1xuaW1wb3J0IGRlZmF1bHRDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY29tYmluZWRDdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyIGZyb20gXCIuL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBmaW5kUnVsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgcnVsZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9sZXhlcnNcIjtcbmltcG9ydCB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2Vyc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBpbml0aWFsQ29udGVudCA9IFwiXCI7XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIHRvcG1vc3RSdWxlTmFtZSA9IHRoaXMuZ2V0VG9wbW9zdFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlcyA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICB0b3Btb3N0UnVsZSA9IGZpbmRSdWxlKHRvcG1vc3RSdWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHRvcG1vc3RSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICB0aGlzLnNldENvbWJpbmVkQk5GKGNvbWJpbmVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJDb21iaW5lZEJORigpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gKG5hbWUgPT09IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IHJlYWRPbmx5ID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcixcbiAgICAgICAgICBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgR3JhbW1hciB1dGlsaXRpZXMgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFRvcG1vc3QgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8VG9wbW9zdFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb21iaW5lZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb21iaW5lZEJORlRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudDtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==