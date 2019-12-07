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
easyLayout = require('easy-layout');

var constants = require('../constants'),
    CustomGrammar = require('../customGrammar'),
    ErrorParagraph = require('./paragraph/error'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
    lexersUtilities = require('../utilities/lexers'),
    ContentTextarea = require('./textarea/content'),
    parsersUtilities = require('../utilities/parsers'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammar = require('../combinedCustomGrammar'),
    CustomGrammarNameSelect = require('./select/customGrammarName');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement,
    defaultLexicalPattern = lexers.defaultLexicalPattern,
    rulesAsString = rulesUtilities.rulesAsString,
    rulesAsEntries = rulesUtilities.rulesAsEntries,
    florenceLexerFromCombinedCustomGrammar = lexersUtilities.florenceLexerFromCombinedCustomGrammar,
    florenceParserFromCombinedCustomGrammar = parsersUtilities.florenceParserFromCombinedCustomGrammar,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    termDefaultCustomGrammarBNF = parsers.termDefaultCustomGrammarBNF,
    statementDefaultCustomGrammarBNF = parsers.statementDefaultCustomGrammarBNF,
    expressionDefaultCustomGrammarBNF = parsers.expressionDefaultCustomGrammarBNF,
    metastatementDefaultCustomGrammarBNF = parsers.metastatementDefaultCustomGrammarBNF;


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
      return;

      try {
        var customGrammarName = this.getCustomGrammarName();

        if (customGrammarName === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
          var bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

          userDefinedCustomGrammar.setBNF(ruleName, bnf);

          userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
        }

        var combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceLexerRules = florenceLexer.getRules(),
            florenceParserRules = florenceParser.getRules(),
            florenceLexerEntries = rulesAsEntries(florenceLexerRules),
            florenceParserRulesString = rulesAsString(florenceParserRules),
            florenceLexicalEntries = florenceLexerEntries,
            ///
        florenceBNF = florenceParserRulesString; ///

        this.setFlorenceBNF(florenceBNF);

        this.setFlorenceLexicalEntries(florenceLexicalEntries);

        this.hideBNFError();

        this.hideLexicalPatternError();
      } catch (error) {
        var message = error.message;


        message.includes('regular expression') ? ///
        this.showLexicalPatternError() : this.showBNFError();
      }
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler() {
      return;

      var ruleName = this.getRuleName(),
          customGrammarName = this.getCustomGrammarName();

      var bnf = void 0,
          readOnly = void 0,
          lexicalPattern = void 0;

      if (customGrammarName === DEFAULT_CUSTOM_GRAMMAR_NAME) {
        switch (ruleName) {
          case 'term':
            bnf = termDefaultCustomGrammarBNF;break;
          case 'statement':
            bnf = statementDefaultCustomGrammarBNF;break;
          case 'expression':
            bnf = expressionDefaultCustomGrammarBNF;break;
          case 'metastatement':
            bnf = metastatementDefaultCustomGrammarBNF;break;
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
            'Custom grammar'
          ),
          React.createElement(CustomGrammarNameSelect, { onChange: changeHandler }),
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
            'Adjusted BNF'
          ),
          React.createElement(AdjustedBNFTextarea, null)
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImNvbnN0YW50cyIsIkN1c3RvbUdyYW1tYXIiLCJFcnJvclBhcmFncmFwaCIsInJ1bGVzVXRpbGl0aWVzIiwiUnVsZU5hbWVTZWxlY3QiLCJsZXhlcnNVdGlsaXRpZXMiLCJDb250ZW50VGV4dGFyZWEiLCJwYXJzZXJzVXRpbGl0aWVzIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJMZXhpY2FsUGF0dGVybklucHV0IiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hck5hbWVTZWxlY3QiLCJFbGVtZW50IiwiU2l6ZWFibGVFbGVtZW50IiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwicnVsZXNBc1N0cmluZyIsInJ1bGVzQXNFbnRyaWVzIiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsInRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsInN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwibmFtZSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21OYW1lIiwiY3VzdG9tR3JhbW1hcnMiLCJWaWV3IiwiY3VzdG9tR3JhbW1hck5hbWUiLCJnZXRDdXN0b21HcmFtbWFyTmFtZSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJmbG9yZW5jZUxleGVyUnVsZXMiLCJnZXRSdWxlcyIsImZsb3JlbmNlUGFyc2VyUnVsZXMiLCJmbG9yZW5jZUxleGVyRW50cmllcyIsImZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmciLCJmbG9yZW5jZUxleGljYWxFbnRyaWVzIiwiZmxvcmVuY2VCTkYiLCJzZXRGbG9yZW5jZUJORiIsInNldEZsb3JlbmNlTGV4aWNhbEVudHJpZXMiLCJoaWRlQk5GRXJyb3IiLCJoaWRlTGV4aWNhbFBhdHRlcm5FcnJvciIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwic2hvd0xleGljYWxQYXR0ZXJuRXJyb3IiLCJzaG93Qk5GRXJyb3IiLCJyZWFkT25seSIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmO0FBQUEsSUFDd0M7QUFDbENFLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBRTBDO0FBQ3BDRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksWUFBWUosUUFBUSxjQUFSLENBQWxCO0FBQUEs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QUFQO0FBQ0Q7Ozs7RUE3SGdCeEQsTzs7QUFnSW5CMkQsT0FBT0MsTUFBUCxDQUFjM0MsSUFBZCxFQUFvQjtBQUNsQjRDLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmhELElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSwgLy8vXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLCAvLy9cbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBFcnJvclBhcmFncmFwaCA9IHJlcXVpcmUoJy4vcGFyYWdyYXBoL2Vycm9yJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9ydWxlTmFtZScpLFxuICAgICAgbGV4ZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2xleGVycycpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBwYXJzZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnNlcnMnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIExleGljYWxQYXR0ZXJuSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBBZGp1c3RlZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9hZGp1c3RlZEJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgQ29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi4vY29tYmluZWRDdXN0b21HcmFtbWFyJyksXG4gICAgICBDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L2N1c3RvbUdyYW1tYXJOYW1lJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gfSA9IGxleGVycyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZXNBc0VudHJpZXMgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbU5hbWUobmFtZSksXG4gICAgICBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICBdO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICByZXR1cm5cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdXN0b21HcmFtbWFyTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tR3JhbW1hck5hbWUoKTtcblxuICAgICAgaWYgKGN1c3RvbUdyYW1tYXJOYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXJSdWxlcyA9IGZsb3JlbmNlTGV4ZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyUnVsZXMgPSBmbG9yZW5jZVBhcnNlci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgZmxvcmVuY2VMZXhlckVudHJpZXMgPSBydWxlc0FzRW50cmllcyhmbG9yZW5jZUxleGVyUnVsZXMpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXJSdWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcoZmxvcmVuY2VQYXJzZXJSdWxlcyksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGljYWxFbnRyaWVzID0gZmxvcmVuY2VMZXhlckVudHJpZXMsICAvLy9cbiAgICAgICAgICAgIGZsb3JlbmNlQk5GID0gZmxvcmVuY2VQYXJzZXJSdWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEZsb3JlbmNlQk5GKGZsb3JlbmNlQk5GKTtcblxuICAgICAgdGhpcy5zZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzKGZsb3JlbmNlTGV4aWNhbEVudHJpZXMpO1xuXG4gICAgICB0aGlzLmhpZGVCTkZFcnJvcigpO1xuXG4gICAgICB0aGlzLmhpZGVMZXhpY2FsUGF0dGVybkVycm9yKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gZXJyb3I7XG5cbiAgICAgIG1lc3NhZ2UuaW5jbHVkZXMoJ3JlZ3VsYXIgZXhwcmVzc2lvbicpID8gLy8vXG4gICAgICAgIHRoaXMuc2hvd0xleGljYWxQYXR0ZXJuRXJyb3IoKSA6XG4gICAgICAgICAgdGhpcy5zaG93Qk5GRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIHJldHVyblxuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hck5hbWUgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJOYW1lKCk7XG5cbiAgICBsZXQgYm5mLFxuICAgICAgICByZWFkT25seSxcbiAgICAgICAgbGV4aWNhbFBhdHRlcm47XG5cbiAgICBpZiAoY3VzdG9tR3JhbW1hck5hbWUgPT09IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlICd0ZXJtJyA6IGJuZiA9IHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0YXRlbWVudCcgOiBibmYgPSBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nIDogYm5mID0gZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOiBibmYgPSBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IGRlZmF1bHRMZXhpY2FsUGF0dGVybjtcblxuICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibmYgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5DdXN0b20gZ3JhbW1hcjwvaDI+XG4gICAgICAgICAgPEN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5SdWxlIG5hbWU8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+TGV4aWNhbCBwYXR0ZXJuPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkFkanVzdGVkIEJORjwvaDI+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5QYXJzZSB0cmVlPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPEVycm9yUGFyYWdyYXBoIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=