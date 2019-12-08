'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    CustomGrammar = require('../customGrammar'),
    RuleNameSelect = require('./select/ruleName'),
    ErrorParagraph = require('./paragraph/error'),
    rulesUtilities = require('../utilities/rules'),
    lexersUtilities = require('../utilities/lexers'),
    ContentTextarea = require('./textarea/content'),
    parsersUtilities = require('../utilities/parsers'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    CombinedBNFTextarea = require('./textarea/combinedBNF'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammar = require('../combinedCustomGrammar');

var Element = easy.Element,
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


var name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    ///
userDefinedCustomGrammar = CustomGrammar.fromName(name),
    customGrammars = [userDefinedCustomGrammar];

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      try {
        var _name = this.getName();

        if (_name === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
          var bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

          userDefinedCustomGrammar.setBNF(ruleName, bnf);

          userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
        }

        var combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            combinedCustomGrammarRules = combinedCustomGrammar.getRules(),
            multiLine = true,
            combinedCustomGrammarRulesString = rulesAsString(combinedCustomGrammarRules, multiLine),
            combinedBNF = combinedCustomGrammarRulesString,
            ///
        florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens);

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
    key: 'changeHandler',
    value: function changeHandler() {
      var name = this.getName(),
          ruleName = this.getRuleName();

      var bnf = void 0,
          readOnly = void 0,
          lexicalPattern = void 0;

      if (name === DEFAULT_CUSTOM_GRAMMAR_NAME) {
        switch (ruleName) {
          case 'term':
            bnf = termDefaultBNF;break;
          case 'statement':
            bnf = statementDefaultBNF;break;
          case 'expression':
            bnf = expressionDefaultBNF;break;
          case 'metastatement':
            bnf = metastatementDefaultBNF;break;
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
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

      return React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Name'
          ),
          React.createElement(NameSelect, { onChange: changeHandler }),
          React.createElement(
            'h2',
            null,
            'Rule name'
          ),
          React.createElement(RuleNameSelect, { onChange: changeHandler }),
          React.createElement(
            'h2',
            null,
            'Lexical pattern'
          ),
          React.createElement(LexicalPatternInput, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Combined BNF'
          ),
          React.createElement(CombinedBNFTextarea, null),
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(ErrorParagraph, null)
        )
      );
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      this.changeHandler(); ///

      this.keyUpHandler(); ///
    }
  }], [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImdyYW1tYXJVdGlsaXRpZXMiLCJjb25zdGFudHMiLCJOYW1lU2VsZWN0IiwiQk5GVGV4dGFyZWEiLCJDdXN0b21HcmFtbWFyIiwiUnVsZU5hbWVTZWxlY3QiLCJFcnJvclBhcmFncmFwaCIsInJ1bGVzVXRpbGl0aWVzIiwibGV4ZXJzVXRpbGl0aWVzIiwiQ29udGVudFRleHRhcmVhIiwicGFyc2Vyc1V0aWxpdGllcyIsIlBhcnNlVHJlZVRleHRhcmVhIiwiQ29tYmluZWRCTkZUZXh0YXJlYSIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkVsZW1lbnQiLCJydWxlc0FzU3RyaW5nIiwiU2l6ZWFibGVFbGVtZW50IiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJ0ZXJtRGVmYXVsdEJORiIsInN0YXRlbWVudERlZmF1bHRCTkYiLCJleHByZXNzaW9uRGVmYXVsdEJORiIsIm1ldGFzdGF0ZW1lbnREZWZhdWx0Qk5GIiwibmFtZSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21OYW1lIiwiY3VzdG9tR3JhbW1hcnMiLCJWaWV3IiwiZ2V0TmFtZSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyIsImdldFJ1bGVzIiwibXVsdGlMaW5lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldENvbWJpbmVkQk5GIiwic2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwiZXJyb3IiLCJjbGVhckNvbWJpbmVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJyZWFkT25seSIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmO0FBQUEsSUFDd0M7QUFDbENFLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBRTBDO0FBQ3BDRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7QUFBQSxJQUlNSSxtQkFBbUJKLFFBQVEseUJBQVIsQ0FKekI7O0FBTUEsSUFBTUssWUFBWUwsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTU0sYUFBYU4sUUFBUSxlQUFSLENBRG5C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QUFLRixZQUFMLEdBTFcsQ0FLVztBQUN2Qjs7O21DQUVxQkQsVSxFQUFZO0FBQ2hDLFVBQU1LLE9BQU8zRCxRQUFRNEQsY0FBUixDQUF1QjNDLElBQXZCLEVBQTZCcUMsVUFBN0IsQ0FBYjs7QUFFQUssV0FBS0UsVUFBTDs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUFsSWdCM0QsTzs7QUFxSW5COEQsT0FBT0MsTUFBUCxDQUFjOUMsSUFBZCxFQUFvQjtBQUNsQitDLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQm5ELElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSwgLy8vXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLCAvLy9cbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpLFxuICAgICAgZ3JhbW1hclV0aWxpdGllcyA9IHJlcXVpcmUoJ29jY2FtLWdyYW1tYXItdXRpbGl0aWVzJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L25hbWUnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBSdWxlTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L3J1bGVOYW1lJyksXG4gICAgICBFcnJvclBhcmFncmFwaCA9IHJlcXVpcmUoJy4vcGFyYWdyYXBoL2Vycm9yJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgbGV4ZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2xleGVycycpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBwYXJzZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnNlcnMnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIENvbWJpbmVkQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbWJpbmVkQk5GJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgQ29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi4vY29tYmluZWRDdXN0b21HcmFtbWFyJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgZGVmYXVsdExleGljYWxQYXR0ZXJuIH0gPSBsZXhlcnMsXG4gICAgICB7IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSA9IGdyYW1tYXJVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcyxcbiAgICAgIHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9ID0gY29uc3RhbnRzLFxuICAgICAgeyB0ZXJtRGVmYXVsdEJORiwgc3RhdGVtZW50RGVmYXVsdEJORiwgZXhwcmVzc2lvbkRlZmF1bHRCTkYsIG1ldGFzdGF0ZW1lbnREZWZhdWx0Qk5GICB9ID0gcGFyc2VycztcblxuY29uc3QgbmFtZSA9IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FLCAgLy8vXG4gICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21OYW1lKG5hbWUpLFxuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclxuICAgICAgXTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcoY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBjb21iaW5lZEJORiA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRDb21iaW5lZEJORihjb21iaW5lZEJORik7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY2xlYXJDb21iaW5lZEJORigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuc2hvd0Vycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGxldCBibmYsXG4gICAgICAgIHJlYWRPbmx5LFxuICAgICAgICBsZXhpY2FsUGF0dGVybjtcblxuICAgIGlmIChuYW1lID09PSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSAndGVybScgOiBibmYgPSB0ZXJtRGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0YXRlbWVudCcgOiBibmYgPSBzdGF0ZW1lbnREZWZhdWx0Qk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOiBibmYgPSBleHByZXNzaW9uRGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21ldGFzdGF0ZW1lbnQnIDogYm5mID0gbWV0YXN0YXRlbWVudERlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IGRlZmF1bHRMZXhpY2FsUGF0dGVybjtcblxuICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibmYgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5OYW1lPC9oMj5cbiAgICAgICAgICA8TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+UnVsZSBuYW1lPC9oMj5cbiAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkxleGljYWwgcGF0dGVybjwvaDI+XG4gICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPkNvbWJpbmVkIEJORjwvaDI+XG4gICAgICAgICAgPENvbWJpbmVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPEVycm9yUGFyYWdyYXBoIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=