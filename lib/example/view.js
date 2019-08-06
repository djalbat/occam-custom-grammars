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
    BNFTextarea = require('./textarea/bnf'),
    CustomGrammar = require('../customGrammar'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
    lexersUtilities = require('../utilities/lexers'),
    parsersUtilities = require('../utilities/parsers'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    FlorenceBNFTextarea = require('./textarea/florenceBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammar = require('../combinedCustomGrammar'),
    CustomGrammarNameSelect = require('./select/customGrammarName'),
    FlorenceLexicalEntriesTextarea = require('./textarea/florenceLexicalEntries');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImNvbnN0YW50cyIsIkJORlRleHRhcmVhIiwiQ3VzdG9tR3JhbW1hciIsInJ1bGVzVXRpbGl0aWVzIiwiUnVsZU5hbWVTZWxlY3QiLCJsZXhlcnNVdGlsaXRpZXMiLCJwYXJzZXJzVXRpbGl0aWVzIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkZsb3JlbmNlQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0IiwiRmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsInJ1bGVzQXNTdHJpbmciLCJydWxlc0FzRW50cmllcyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJ0ZXJtRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm5hbWUiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSIsImN1c3RvbUdyYW1tYXJzIiwiVmlldyIsImN1c3RvbUdyYW1tYXJOYW1lIiwiZ2V0Q3VzdG9tR3JhbW1hck5hbWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VMZXhlclJ1bGVzIiwiZ2V0UnVsZXMiLCJmbG9yZW5jZVBhcnNlclJ1bGVzIiwiZmxvcmVuY2VMZXhlckVudHJpZXMiLCJmbG9yZW5jZVBhcnNlclJ1bGVzU3RyaW5nIiwiZmxvcmVuY2VMZXhpY2FsRW50cmllcyIsImZsb3JlbmNlQk5GIiwic2V0RmxvcmVuY2VCTkYiLCJzZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzIiwiaGlkZUJORkVycm9yIiwiaGlkZUxleGljYWxQYXR0ZXJuRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsInNob3dMZXhpY2FsUGF0dGVybkVycm9yIiwic2hvd0JORkVycm9yIiwicmVhZE9ubHkiLCJzZXRCTkZSZWFkT25seSIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImNoYW5nZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0IiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjtBQUFBLElBQ3dDO0FBQ2xDRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUUwQztBQUNwQ0csYUFBYUgsUUFBUSxhQUFSLENBSG5COztBQUtBLElBQU1JLFlBQVlKLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01LLGNB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UztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmhELElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSwgLy8vXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLCAvLy9cbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9ydWxlTmFtZScpLFxuICAgICAgbGV4ZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2xleGVycycpLFxuICAgICAgcGFyc2Vyc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXJzJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgRmxvcmVuY2VCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvZmxvcmVuY2VCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIENvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlcXVpcmUoJy4uL2NvbWJpbmVkQ3VzdG9tR3JhbW1hcicpLFxuICAgICAgQ3VzdG9tR3JhbW1hck5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9jdXN0b21HcmFtbWFyTmFtZScpLFxuICAgICAgRmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9mbG9yZW5jZUxleGljYWxFbnRyaWVzJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gfSA9IGxleGVycyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZXNBc0VudHJpZXMgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbU5hbWUobmFtZSksXG4gICAgICBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICBdO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hck5hbWUgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJOYW1lKCk7XG5cbiAgICAgIGlmIChjdXN0b21HcmFtbWFyTmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyUnVsZXMgPSBmbG9yZW5jZUxleGVyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlclJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXJFbnRyaWVzID0gcnVsZXNBc0VudHJpZXMoZmxvcmVuY2VMZXhlclJ1bGVzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUGFyc2VyUnVsZXMpLFxuICAgICAgICAgICAgZmxvcmVuY2VMZXhpY2FsRW50cmllcyA9IGZsb3JlbmNlTGV4ZXJFbnRyaWVzLCAgLy8vXG4gICAgICAgICAgICBmbG9yZW5jZUJORiA9IGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORik7XG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyhmbG9yZW5jZUxleGljYWxFbnRyaWVzKTtcblxuICAgICAgdGhpcy5oaWRlQk5GRXJyb3IoKTtcblxuICAgICAgdGhpcy5oaWRlTGV4aWNhbFBhdHRlcm5FcnJvcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICBtZXNzYWdlLmluY2x1ZGVzKCdyZWd1bGFyIGV4cHJlc3Npb24nKSA/IC8vL1xuICAgICAgICB0aGlzLnNob3dMZXhpY2FsUGF0dGVybkVycm9yKCkgOlxuICAgICAgICAgIHRoaXMuc2hvd0JORkVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tR3JhbW1hck5hbWUoKTtcblxuICAgIGxldCBibmYsXG4gICAgICAgIHJlYWRPbmx5LFxuICAgICAgICBsZXhpY2FsUGF0dGVybjtcblxuICAgIGlmIChjdXN0b21HcmFtbWFyTmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3Rlcm0nIDogYm5mID0gdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnc3RhdGVtZW50JyA6IGJuZiA9IHN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOiBibmYgPSBleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6IGJuZiA9IG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gZGVmYXVsdExleGljYWxQYXR0ZXJuO1xuXG4gICAgICByZWFkT25seSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJuZiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ3VzdG9tIGdyYW1tYXJcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBGbG9yZW5jZSBsZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBGbG9yZW5jZSBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxGbG9yZW5jZUJORlRleHRhcmVhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=