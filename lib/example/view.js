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

var easy = require('easy'),
    lexers = require('occam-lexers'),
    ///
parsers = require('occam-parsers'),
    ///
easyLayout = require('easy-layout'),
    grammarUtilities = require('occam-grammar-utilities');

var constants = require('../constants'),
    NameSelect = require('./select/name'),
    BNFTextarea = require('./textarea/bnf'),
    ruleUtilities = require('../utilities/rule'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
    ErrorParagraph = require('./paragraph/error'),
    lexersUtilities = require('../utilities/lexers'),
    ContentTextarea = require('./textarea/content'),
    parsersUtilities = require('../utilities/parsers'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    CombinedBNFTextarea = require('./textarea/combinedBNF'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    TopmostRuleNameInput = require('./input/topmostRuleName'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammar = require('../combinedCustomGrammar'),
    userDefinedCustomGrammar = require('../userDefinedCustomGrammar');

var Element = easy.Element,
    findRule = ruleUtilities.findRule,
    rulesAsString = rulesUtilities.rulesAsString,
    SizeableElement = easyLayout.SizeableElement,
    defaultLexicalPattern = lexers.defaultLexicalPattern,
    removeOrRenameIntermediateNodes = grammarUtilities.removeOrRenameIntermediateNodes,
    florenceLexerFromCombinedCustomGrammar = lexersUtilities.florenceLexerFromCombinedCustomGrammar,
    florenceParserFromCombinedCustomGrammar = parsersUtilities.florenceParserFromCombinedCustomGrammar,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    termDefaultBNF = parsers.termDefaultBNF,
    statementDefaultBNF = parsers.statementDefaultBNF,
    expressionDefaultBNF = parsers.expressionDefaultBNF,
    metastatementDefaultBNF = parsers.metastatementDefaultBNF;

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var name = this.getName();

        if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
          var bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();
          userDefinedCustomGrammar.setBNF(ruleName, bnf);
          userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
        }

        var customGrammars = [userDefinedCustomGrammar],
            combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            combinedCustomGrammarRules = combinedCustomGrammar.getRules(),
            multiLine = true,
            combinedCustomGrammarRulesString = rulesAsString(combinedCustomGrammarRules, multiLine),
            combinedBNF = combinedCustomGrammarRulesString,
            ///
        florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            topmostRuleName = this.getTopmostRuleName(),
            rules = florenceParser.getRules(),
            topmostRule = findRule(topmostRuleName, rules),
            content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens, topmostRule);
        var parseTree = null;

        if (node !== null) {
          removeOrRenameIntermediateNodes(node);
          parseTree = node.asParseTree(tokens);
        }

        this.setCombinedBNF(combinedBNF);
        this.setParseTree(parseTree);
        this.hideError();
      } catch (error) {
        this.clearCombinedBNF();
        this.clearParseTree();
        this.showError(error);
      }
    }
  }, {
    key: "changeHandler",
    value: function changeHandler() {
      var name = this.getName(),
          ruleName = this.getRuleName();
      var bnf, readOnly, lexicalPattern;

      if (name === DEFAULT_CUSTOM_GRAMMAR_NAME) {
        switch (ruleName) {
          case 'term':
            bnf = termDefaultBNF;
            break;

          case 'statement':
            bnf = statementDefaultBNF;
            break;

          case 'expression':
            bnf = expressionDefaultBNF;
            break;

          case 'metastatement':
            bnf = metastatementDefaultBNF;
            break;
        }

        lexicalPattern = defaultLexicalPattern;
        readOnly = true;
      } else {
        bnf = userDefinedCustomGrammar.getBNF(ruleName);
        lexicalPattern = userDefinedCustomGrammar.getLexicalPattern();
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
      return /*#__PURE__*/React.createElement("div", {
        className: "columns"
      }, /*#__PURE__*/React.createElement(SizeableElement, null, /*#__PURE__*/React.createElement("h2", null, "Name"), /*#__PURE__*/React.createElement(NameSelect, {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Rule name"), /*#__PURE__*/React.createElement(RuleNameSelect, {
        onChange: changeHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Lexical pattern"), /*#__PURE__*/React.createElement(LexicalPatternInput, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "BNF"), /*#__PURE__*/React.createElement(BNFTextarea, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Topmost rule name"), /*#__PURE__*/React.createElement(TopmostRuleNameInput, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Content"), /*#__PURE__*/React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })), /*#__PURE__*/React.createElement(MainVerticalSplitter, null), /*#__PURE__*/React.createElement("div", {
        className: "column"
      }, /*#__PURE__*/React.createElement("h2", null, "Combined BNF"), /*#__PURE__*/React.createElement(CombinedBNFTextarea, null), /*#__PURE__*/React.createElement("h2", null, "Parse tree"), /*#__PURE__*/React.createElement(ParseTreeTextarea, null), /*#__PURE__*/React.createElement(ErrorParagraph, null)));
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      this.changeHandler(); ///

      this.keyUpHandler(); ///
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);
      view.initialise();
      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});
module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImdyYW1tYXJVdGlsaXRpZXMiLCJjb25zdGFudHMiLCJOYW1lU2VsZWN0IiwiQk5GVGV4dGFyZWEiLCJydWxlVXRpbGl0aWVzIiwicnVsZXNVdGlsaXRpZXMiLCJSdWxlTmFtZVNlbGVjdCIsIkVycm9yUGFyYWdyYXBoIiwibGV4ZXJzVXRpbGl0aWVzIiwiQ29udGVudFRleHRhcmVhIiwicGFyc2Vyc1V0aWxpdGllcyIsIlBhcnNlVHJlZVRleHRhcmVhIiwiQ29tYmluZWRCTkZUZXh0YXJlYSIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJUb3Btb3N0UnVsZU5hbWVJbnB1dCIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwiRWxlbWVudCIsImZpbmRSdWxlIiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwidGVybURlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEJORiIsIlZpZXciLCJuYW1lIiwiZ2V0TmFtZSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiLCJtdWx0aUxpbmUiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyIsImNvbWJpbmVkQk5GIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwidG9wbW9zdFJ1bGVOYW1lIiwiZ2V0VG9wbW9zdFJ1bGVOYW1lIiwicnVsZXMiLCJ0b3Btb3N0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldENvbWJpbmVkQk5GIiwic2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwiZXJyb3IiLCJjbGVhckNvbWJpbmVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJyZWFkT25seSIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxJQUNNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHRCO0FBQUEsSUFDd0M7QUFDbENFLE9BQU8sR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FGdkI7QUFBQSxJQUUwQztBQUNwQ0csVUFBVSxHQUFHSCxP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QUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQTFKZ0I5RCxPOztBQTZKbkJpRSxNQUFNLENBQUNDLE1BQVAsQ0FBY3BELElBQWQsRUFBb0I7QUFDbEJxRCxFQUFBQSxPQUFPLEVBQUUsS0FEUztBQUVsQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRkQsQ0FBcEI7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCekQsSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSwgLy8vXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLCAvLy9cbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpLFxuICAgICAgZ3JhbW1hclV0aWxpdGllcyA9IHJlcXVpcmUoJ29jY2FtLWdyYW1tYXItdXRpbGl0aWVzJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L25hbWUnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIFJ1bGVOYW1lU2VsZWN0ID0gcmVxdWlyZSgnLi9zZWxlY3QvcnVsZU5hbWUnKSxcbiAgICAgIEVycm9yUGFyYWdyYXBoID0gcmVxdWlyZSgnLi9wYXJhZ3JhcGgvZXJyb3InKSxcbiAgICAgIGxleGVyc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9sZXhlcnMnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgcGFyc2Vyc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXJzJyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBDb21iaW5lZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb21iaW5lZEJORicpLFxuICAgICAgTGV4aWNhbFBhdHRlcm5JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIFRvcG1vc3RSdWxlTmFtZUlucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC90b3Btb3N0UnVsZU5hbWUnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIENvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlcXVpcmUoJy4uL2NvbWJpbmVkQ3VzdG9tR3JhbW1hcicpLFxuICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi4vdXNlckRlZmluZWRDdXN0b21HcmFtbWFyJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgZmluZFJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IGRlZmF1bHRMZXhpY2FsUGF0dGVybiB9ID0gbGV4ZXJzLFxuICAgICAgeyByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIH0gPSBncmFtbWFyVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgdGVybURlZmF1bHRCTkYsIHN0YXRlbWVudERlZmF1bHRCTkYsIGV4cHJlc3Npb25EZWZhdWx0Qk5GLCBtZXRhc3RhdGVtZW50RGVmYXVsdEJORiAgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIHRvcG1vc3RSdWxlTmFtZSA9IHRoaXMuZ2V0VG9wbW9zdFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlcyA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICB0b3Btb3N0UnVsZSA9IGZpbmRSdWxlKHRvcG1vc3RSdWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHRvcG1vc3RSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldENvbWJpbmVkQk5GKGNvbWJpbmVkQk5GKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5jbGVhckNvbWJpbmVkQk5GKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5zaG93RXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpO1xuXG4gICAgbGV0IGJuZixcbiAgICAgICAgcmVhZE9ubHksXG4gICAgICAgIGxleGljYWxQYXR0ZXJuO1xuXG4gICAgaWYgKG5hbWUgPT09IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlICd0ZXJtJyA6IGJuZiA9IHRlcm1EZWZhdWx0Qk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnc3RhdGVtZW50JyA6IGJuZiA9IHN0YXRlbWVudERlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdleHByZXNzaW9uJyA6IGJuZiA9IGV4cHJlc3Npb25EZWZhdWx0Qk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOiBibmYgPSBtZXRhc3RhdGVtZW50RGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gZGVmYXVsdExleGljYWxQYXR0ZXJuO1xuXG4gICAgICByZWFkT25seSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJuZiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTmFtZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFRvcG1vc3QgcnVsZSBuYW1lXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8VG9wbW9zdFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29tYmluZWQgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q29tYmluZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxFcnJvclBhcmFncmFwaCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTsgLy8vXG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19