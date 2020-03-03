'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
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
      return React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Name"), React.createElement(NameSelect, {
        onChange: changeHandler
      }), React.createElement("h2", null, "Rule name"), React.createElement(RuleNameSelect, {
        onChange: changeHandler
      }), React.createElement("h2", null, "Lexical pattern"), React.createElement(LexicalPatternInput, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "BNF"), React.createElement(BNFTextarea, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "Topmost rule name"), React.createElement(TopmostRuleNameInput, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Combined BNF"), React.createElement(CombinedBNFTextarea, null), React.createElement("h2", null, "Parse tree"), React.createElement(ParseTreeTextarea, null), React.createElement(ErrorParagraph, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImdyYW1tYXJVdGlsaXRpZXMiLCJjb25zdGFudHMiLCJOYW1lU2VsZWN0IiwiQk5GVGV4dGFyZWEiLCJydWxlVXRpbGl0aWVzIiwicnVsZXNVdGlsaXRpZXMiLCJSdWxlTmFtZVNlbGVjdCIsIkVycm9yUGFyYWdyYXBoIiwibGV4ZXJzVXRpbGl0aWVzIiwiQ29udGVudFRleHRhcmVhIiwicGFyc2Vyc1V0aWxpdGllcyIsIlBhcnNlVHJlZVRleHRhcmVhIiwiQ29tYmluZWRCTkZUZXh0YXJlYSIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJUb3Btb3N0UnVsZU5hbWVJbnB1dCIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwiRWxlbWVudCIsImZpbmRSdWxlIiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwidGVybURlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEJORiIsIlZpZXciLCJuYW1lIiwiZ2V0TmFtZSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiLCJtdWx0aUxpbmUiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyIsImNvbWJpbmVkQk5GIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwidG9wbW9zdFJ1bGVOYW1lIiwiZ2V0VG9wbW9zdFJ1bGVOYW1lIiwicnVsZXMiLCJ0b3Btb3N0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldENvbWJpbmVkQk5GIiwic2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwiZXJyb3IiLCJjbGVhckNvbWJpbmVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJyZWFkT25seSIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjtBQUFBLElBQ01DLE1BQU0sR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FEdEI7QUFBQSxJQUN3QztBQUNsQ0UsT0FBTyxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUZ2QjtBQUFBLElBRTBDO0FBQ3BDRyxVQUFVLEdBQUdILE9BQU8s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SUFBUDtBQUNEOzs7O0VBMUpnQjlELE87O0FBNkpuQmlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjcEQsSUFBZCxFQUFvQjtBQUNsQnFELEVBQUFBLE9BQU8sRUFBRSxLQURTO0FBRWxCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGRCxDQUFwQjtBQU9BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6RCxJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLCAvLy9cbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksIC8vL1xuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0JyksXG4gICAgICBncmFtbWFyVXRpbGl0aWVzID0gcmVxdWlyZSgnb2NjYW0tZ3JhbW1hci11dGlsaXRpZXMnKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBOYW1lU2VsZWN0ID0gcmVxdWlyZSgnLi9zZWxlY3QvbmFtZScpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9ydWxlTmFtZScpLFxuICAgICAgRXJyb3JQYXJhZ3JhcGggPSByZXF1aXJlKCcuL3BhcmFncmFwaC9lcnJvcicpLFxuICAgICAgbGV4ZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2xleGVycycpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBwYXJzZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnNlcnMnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIENvbWJpbmVkQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbWJpbmVkQk5GJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgVG9wbW9zdFJ1bGVOYW1lSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L3RvcG1vc3RSdWxlTmFtZScpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgQ29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi4vY29tYmluZWRDdXN0b21HcmFtbWFyJyksXG4gICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi91c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXInKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBmaW5kUnVsZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgZGVmYXVsdExleGljYWxQYXR0ZXJuIH0gPSBsZXhlcnMsXG4gICAgICB7IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSA9IGdyYW1tYXJVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcyxcbiAgICAgIHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9ID0gY29uc3RhbnRzLFxuICAgICAgeyB0ZXJtRGVmYXVsdEJORiwgc3RhdGVtZW50RGVmYXVsdEJORiwgZXhwcmVzc2lvbkRlZmF1bHRCTkYsIG1ldGFzdGF0ZW1lbnREZWZhdWx0Qk5GICB9ID0gcGFyc2VycztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZywgIC8vL1xuICAgICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgdG9wbW9zdFJ1bGVOYW1lID0gdGhpcy5nZXRUb3Btb3N0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIHRvcG1vc3RSdWxlID0gZmluZFJ1bGUodG9wbW9zdFJ1bGVOYW1lLCBydWxlcyksXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucywgdG9wbW9zdFJ1bGUpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0Q29tYmluZWRCTkYoY29tYmluZWRCTkYpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmNsZWFyQ29tYmluZWRCTkYoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLnNob3dFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBsZXQgYm5mLFxuICAgICAgICByZWFkT25seSxcbiAgICAgICAgbGV4aWNhbFBhdHRlcm47XG5cbiAgICBpZiAobmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3Rlcm0nIDogYm5mID0gdGVybURlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdzdGF0ZW1lbnQnIDogYm5mID0gc3RhdGVtZW50RGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nIDogYm5mID0gZXhwcmVzc2lvbkRlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6IGJuZiA9IG1ldGFzdGF0ZW1lbnREZWZhdWx0Qk5GOyBicmVhaztcbiAgICAgIH1cblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSBkZWZhdWx0TGV4aWNhbFBhdHRlcm47XG5cbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm5mID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Qk5GUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkocmVhZE9ubHkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBOYW1lXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgVG9wbW9zdCBydWxlIG5hbWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxUb3Btb3N0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDb21iaW5lZCBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDb21iaW5lZEJORlRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPEVycm9yUGFyYWdyYXBoIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=