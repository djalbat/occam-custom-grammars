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
    SizeableElement = easyLayout.SizeableElement,
    defaultLexicalPattern = lexers.defaultLexicalPattern,
    rulesAsString = rulesUtilities.rulesAsString,
    rulesAsEntries = rulesUtilities.rulesAsEntries,
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
            combinedBNF = combinedCustomGrammarRulesString; ///

        var florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

        this.setCombinedBNF(combinedBNF);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImNvbnN0YW50cyIsIk5hbWVTZWxlY3QiLCJCTkZUZXh0YXJlYSIsIkN1c3RvbUdyYW1tYXIiLCJSdWxlTmFtZVNlbGVjdCIsIkVycm9yUGFyYWdyYXBoIiwicnVsZXNVdGlsaXRpZXMiLCJsZXhlcnNVdGlsaXRpZXMiLCJDb250ZW50VGV4dGFyZWEiLCJwYXJzZXJzVXRpbGl0aWVzIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJDb21iaW5lZEJORlRleHRhcmVhIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsInJ1bGVzQXNTdHJpbmciLCJydWxlc0FzRW50cmllcyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJ0ZXJtRGVmYXVsdEJORiIsInN0YXRlbWVudERlZmF1bHRCTkYiLCJleHByZXNzaW9uRGVmYXVsdEJORiIsIm1ldGFzdGF0ZW1lbnREZWZhdWx0Qk5GIiwibmFtZSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21OYW1lIiwiY3VzdG9tR3JhbW1hcnMiLCJWaWV3IiwiZ2V0TmFtZSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyIsImdldFJ1bGVzIiwibXVsdGlMaW5lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmciLCJjb21iaW5lZEJORiIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInNldENvbWJpbmVkQk5GIiwiaGlkZUVycm9yIiwiZXJyb3IiLCJjbGVhckNvbWJpbmVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJyZWFkT25seSIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmO0FBQUEsSUFDd0M7QUFDbENFLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBRTBDO0FBQ3BDRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksWUFBWUosUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUssYUFBYUwsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTU0sY0FBY04sUUFBUSxnQkFBUixDQUZwQjtBQUFBLElBR01PLGdCQUFnQlAsUUFBUSxrQkFBUixDQUh0QjtBQUFBLElBSU1RLGlCQUFpQlIsUUFBUSxtQkFBUixDQUp2QjtBQUFBLElBS01TLGlCQUFpQlQsUUFBUSxtQkFBUixDQUx2QjtBQUFBLElBTU1VLGlCQUFpQlYsUUFBUSxvQkFB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QTtBQUFBO0FBQUE7QUFBQSxXQUxGO0FBTUUsOEJBQUMsbUJBQUQsSUFBcUIsU0FBU0YsWUFBOUIsR0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FQRjtBQVFFLDhCQUFDLFdBQUQsSUFBYSxTQUFTQSxZQUF0QixHQVJGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVRGO0FBVUUsOEJBQUMsZUFBRCxJQUFpQixTQUFTQSxZQUExQjtBQVZGLFNBREY7QUFhRSw0QkFBQyxvQkFBRCxPQWJGO0FBY0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsbUJBQUQsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQUlFLDhCQUFDLGlCQUFELE9BSkY7QUFLRSw4QkFBQyxjQUFEO0FBTEY7QUFkRixPQUZGO0FBMEJEOzs7aUNBRVk7QUFDWCxXQUFLRyxhQUFMOztBQUVBLFdBQUtELGFBQUwsR0FIVyxDQUdXOztBQUV0QixXQUFLRixZQUFMLEdBTFcsQ0FLVztBQUN2Qjs7O21DQUVxQkQsVSxFQUFZO0FBQ2hDLFVBQU1LLE9BQU9sRCxRQUFRbUQsY0FBUixDQUF1QmxDLElBQXZCLEVBQTZCNEIsVUFBN0IsQ0FBYjs7QUFFQUssV0FBS0UsVUFBTDs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUF0SGdCbEQsTzs7QUF5SG5CcUQsT0FBT0MsTUFBUCxDQUFjckMsSUFBZCxFQUFvQjtBQUNsQnNDLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjFDLElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSwgLy8vXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLCAvLy9cbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIE5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9uYW1lJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBDdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi4vY3VzdG9tR3JhbW1hcicpLFxuICAgICAgUnVsZU5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9ydWxlTmFtZScpLFxuICAgICAgRXJyb3JQYXJhZ3JhcGggPSByZXF1aXJlKCcuL3BhcmFncmFwaC9lcnJvcicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGxleGVyc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9sZXhlcnMnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgcGFyc2Vyc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXJzJyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBDb21iaW5lZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb21iaW5lZEJORicpLFxuICAgICAgTGV4aWNhbFBhdHRlcm5JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIENvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlcXVpcmUoJy4uL2NvbWJpbmVkQ3VzdG9tR3JhbW1hcicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgZGVmYXVsdExleGljYWxQYXR0ZXJuIH0gPSBsZXhlcnMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVzQXNFbnRyaWVzIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzLFxuICAgICAgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHRlcm1EZWZhdWx0Qk5GLCBzdGF0ZW1lbnREZWZhdWx0Qk5GLCBleHByZXNzaW9uRGVmYXVsdEJORiwgbWV0YXN0YXRlbWVudERlZmF1bHRCTkYgIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbU5hbWUobmFtZSksXG4gICAgICBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICBdO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgICB0aGlzLnNldENvbWJpbmVkQk5GKGNvbWJpbmVkQk5GKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5jbGVhckNvbWJpbmVkQk5GKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5zaG93RXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpO1xuXG4gICAgbGV0IGJuZixcbiAgICAgICAgcmVhZE9ubHksXG4gICAgICAgIGxleGljYWxQYXR0ZXJuO1xuXG4gICAgaWYgKG5hbWUgPT09IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlICd0ZXJtJyA6IGJuZiA9IHRlcm1EZWZhdWx0Qk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnc3RhdGVtZW50JyA6IGJuZiA9IHN0YXRlbWVudERlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdleHByZXNzaW9uJyA6IGJuZiA9IGV4cHJlc3Npb25EZWZhdWx0Qk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOiBibmYgPSBtZXRhc3RhdGVtZW50RGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gZGVmYXVsdExleGljYWxQYXR0ZXJuO1xuXG4gICAgICByZWFkT25seSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJuZiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPk5hbWU8L2gyPlxuICAgICAgICAgIDxOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5SdWxlIG5hbWU8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+TGV4aWNhbCBwYXR0ZXJuPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+Q29tYmluZWQgQk5GPC9oMj5cbiAgICAgICAgICA8Q29tYmluZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5QYXJzZSB0cmVlPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8RXJyb3JQYXJhZ3JhcGggLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7IC8vL1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==