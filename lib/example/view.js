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

var _paragraph = _interopRequireDefault(require("./paragraph"));

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

var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));

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
          var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

          if (removeOrRenameIntermediateNodesCheckboxChecked) {
            (0, _occamGrammarUtilities.removeOrRenameIntermediateNodes)(node);
          }

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
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "Custom grammars example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Name"), /*#__PURE__*/React.createElement(_name["default"], {
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
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Combined BNF"), /*#__PURE__*/React.createElement(_combinedBNF["default"], null), /*#__PURE__*/React.createElement(_paragraph["default"], null, /*#__PURE__*/React.createElement(_removeOrRenameIntermediateNodes["default"], {
        onChange: keyUpHandler,
        checked: true
      }), "Remove or rename intermediate nodes"))))];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiVmlldyIsIm5hbWUiLCJnZXROYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlTWFwIiwiZ2V0UnVsZU1hcCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiT2JqZWN0IiwidmFsdWVzIiwibXVsdGlMaW5lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJzZXRDb21iaW5lZEJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJDb21iaW5lZEJORiIsInJlYWRPbmx5IiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiY3VzdG9tR3JhbW1hciIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwic2V0Qk5GUmVhZE9ubHkiLCJzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5Iiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImNoYW5nZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJzZXRDb250ZW50IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUVBLHNDQUFGLEdBQTZDQyxzQkFBN0MsQ0FBRUQsc0NBQUY7QUFBQSxJQUNFRSx1Q0FERixHQUM4Q0MsdUJBRDlDLENBQ0VELHVDQURGOztJQUdlRSxJOzs7Ozs7Ozs7Ozs7Ozs7O3FFQUNGLEU7Ozs7Ozs7bUNBRUY7QUFDYixVQUFJO0FBQ0YsWUFBTUMsSUFBSSxHQUFHLEtBQUtDLE9BQUwsRUFBYjs7QUFFQSxZQUFJRCxJQUFJLEtBQUtFLDJDQUFiLEVBQStDO0FBQzdDLGNBQU1DLEdBQUcsR0FBRyxLQUFLQyxNQUFMLEVBQVo7QUFBQSxjQUNNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQURqQjtBQUFBLGNBRU1DLGNBQWMsR0FBRyxLQUFLQyxpQkFBTCxFQUZ2Qjs7QUFJQUMsK0NBQXlCQyxNQUF6QixDQUFnQ0wsUUFBaEMsRUFBMENGLEdBQTFDOztBQUVB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QVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixDQUFwQjs7QUFFQUMsTUFBQUEsV0FBVyxDQUFDRyxVQUFaO0FBRUEsYUFBT0gsV0FBUDtBQUNEOzs7O0VBOUorQkMsYTs7OztnQkFBYi9ELEksYUFzSkYsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbnNEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IGRlZmF1bHRDdXN0b21HcmFtbWFyLCBDb21iaW5lZEN1c3RvbUdyYW1tYXIsIGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9uYW1lXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgUnVsZU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3J1bGVOYW1lXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBDb21iaW5lZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbWJpbmVkQk5GXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaW5pdGlhbENvbnRlbnQgPSBcIlwiO1xuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZU1hcCA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyA9IE9iamVjdC52YWx1ZXMoY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZU1hcCksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgcnVsZU1hcCA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZSA9IHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0sIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIHRoaXMuc2V0Q29tYmluZWRCTkYoY29tYmluZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5jbGVhckNvbWJpbmVkQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSAobmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gcmVhZE9ubHkgPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLFxuICAgICAgICAgIGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIEN1c3RvbSBncmFtbWFycyBleGFtcGxlXG4gICAgICA8L0hlYWRpbmc+LFxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29tYmluZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29tYmluZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17a2V5VXBIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQ7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==