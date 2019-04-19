'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    parsers = require('occam-parsers'),
    ///
easyLayout = require('easy-layout');

var constants = require('../constants'),
    BNFTextarea = require('./textarea/bnf'),
    CustomGrammar = require('../customGrammar'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
    lexersUtilities = require('../utilities/lexers'),
    parsersUtilities = require('../utilities/parsers'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    FlorenceBNFTextarea = require('./textarea/florenceBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammars = require('../combinedCustomGrammars'),
    CustomGrammarNameSelect = require('./select/customGrammarName'),
    FlorenceLexicalEntriesTextarea = require('./textarea/florenceLexicalEntries');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement,
    rulesAsString = rulesUtilities.rulesAsString,
    rulesAsEntries = rulesUtilities.rulesAsEntries,
    florenceLexerFromCombinedCustomGrammars = lexersUtilities.florenceLexerFromCombinedCustomGrammars,
    florenceParserFromCombinedCustomGrammars = parsersUtilities.florenceParserFromCombinedCustomGrammars,
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
      try {
        var customGrammarName = this.getCustomGrammarName();

        if (customGrammarName === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
          var bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

          userDefinedCustomGrammar.setBNF(ruleName, bnf);

          userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
        }

        var combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars),
            florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
            florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars),
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

        lexicalPattern = null;

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
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Florence lexical entries'
          ),
          React.createElement(FlorenceLexicalEntriesTextarea, null),
          React.createElement(
            'h2',
            null,
            'Florence BNF'
          ),
          React.createElement(FlorenceBNFTextarea, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImNvbnN0YW50cyIsIkJORlRleHRhcmVhIiwiQ3VzdG9tR3JhbW1hciIsInJ1bGVzVXRpbGl0aWVzIiwiUnVsZU5hbWVTZWxlY3QiLCJsZXhlcnNVdGlsaXRpZXMiLCJwYXJzZXJzVXRpbGl0aWVzIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkZsb3JlbmNlQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMiLCJDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCIsIkZsb3JlbmNlTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJydWxlc0FzU3RyaW5nIiwicnVsZXNBc0VudHJpZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJ0ZXJtRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm5hbWUiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSIsImN1c3RvbUdyYW1tYXJzIiwiVmlldyIsImN1c3RvbUdyYW1tYXJOYW1lIiwiZ2V0Q3VzdG9tR3JhbW1hck5hbWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY29tYmluZWRDdXN0b21HcmFtbWFycyIsImZyb21DdXN0b21HcmFtbWFycyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlTGV4ZXJSdWxlcyIsImdldFJ1bGVzIiwiZmxvcmVuY2VQYXJzZXJSdWxlcyIsImZsb3JlbmNlTGV4ZXJFbnRyaWVzIiwiZmxvcmVuY2VQYXJzZXJSdWxlc1N0cmluZyIsImZsb3JlbmNlTGV4aWNhbEVudHJpZXMiLCJmbG9yZW5jZUJORiIsInNldEZsb3JlbmNlQk5GIiwic2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyIsImhpZGVCTkZFcnJvciIsImhpZGVMZXhpY2FsUGF0dGVybkVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJzaG93TGV4aWNhbFBhdHRlcm5FcnJvciIsInNob3dCTkZFcnJvciIsInJlYWRPbmx5Iiwic2V0Qk5GUmVhZE9ubHkiLCJzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5IiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJjaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxlQUFSLENBRGhCO0FBQUEsSUFDMEM7QUFDcENFLGFBQWFGLFFBQVEsYUFBUixDQUZuQjs7QUFJQSxJQUFNRyxZQUFZSCxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNSSxjQUFjSixRQUFRLGdCQUFSLENBRHBCO0FBQUEsSUFFTUssZ0JBQWdCTCxRQUFRLGtCQUFSLENBRnRCO0FBQUEsSUFHTU0s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IHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLCAvLy9cbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9ydWxlTmFtZScpLFxuICAgICAgbGV4ZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2xleGVycycpLFxuICAgICAgcGFyc2Vyc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXJzJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgRmxvcmVuY2VCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvZmxvcmVuY2VCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIENvbWJpbmVkQ3VzdG9tR3JhbW1hcnMgPSByZXF1aXJlKCcuLi9jb21iaW5lZEN1c3RvbUdyYW1tYXJzJyksXG4gICAgICBDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L2N1c3RvbUdyYW1tYXJOYW1lJyksXG4gICAgICBGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2Zsb3JlbmNlTGV4aWNhbEVudHJpZXMnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVzQXNFbnRyaWVzIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbU5hbWUobmFtZSksXG4gICAgICBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICBdO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hck5hbWUgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJOYW1lKCk7XG5cbiAgICAgIGlmIChjdXN0b21HcmFtbWFyTmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFycyA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hcnMuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMoY29tYmluZWRDdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMoY29tYmluZWRDdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyUnVsZXMgPSBmbG9yZW5jZUxleGVyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlclJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXJFbnRyaWVzID0gcnVsZXNBc0VudHJpZXMoZmxvcmVuY2VMZXhlclJ1bGVzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUGFyc2VyUnVsZXMpLFxuICAgICAgICAgICAgZmxvcmVuY2VMZXhpY2FsRW50cmllcyA9IGZsb3JlbmNlTGV4ZXJFbnRyaWVzLCAgLy8vXG4gICAgICAgICAgICBmbG9yZW5jZUJORiA9IGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORik7XG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyhmbG9yZW5jZUxleGljYWxFbnRyaWVzKTtcblxuICAgICAgdGhpcy5oaWRlQk5GRXJyb3IoKTtcblxuICAgICAgdGhpcy5oaWRlTGV4aWNhbFBhdHRlcm5FcnJvcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICBtZXNzYWdlLmluY2x1ZGVzKCdyZWd1bGFyIGV4cHJlc3Npb24nKSA/IC8vL1xuICAgICAgICB0aGlzLnNob3dMZXhpY2FsUGF0dGVybkVycm9yKCkgOlxuICAgICAgICAgIHRoaXMuc2hvd0JORkVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tR3JhbW1hck5hbWUoKTtcblxuICAgIGxldCBibmYsXG4gICAgICAgIHJlYWRPbmx5LFxuICAgICAgICBsZXhpY2FsUGF0dGVybjtcblxuICAgIGlmIChjdXN0b21HcmFtbWFyTmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3Rlcm0nIDogYm5mID0gdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnc3RhdGVtZW50JyA6IGJuZiA9IHN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOiBibmYgPSBleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6IGJuZiA9IG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gbnVsbDtcblxuICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibmYgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEN1c3RvbSBncmFtbWFyXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q3VzdG9tR3JhbW1hck5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgRmxvcmVuY2UgbGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgRmxvcmVuY2UgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RmxvcmVuY2VCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTsgLy8vXG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19