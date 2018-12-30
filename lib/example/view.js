'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var lexers = require('../lexers'),
    parsers = require('../parsers'),
    constants = require('../constants'),
    BNFTextarea = require('./textarea/bnf'),
    CustomGrammar = require('../customGrammar'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
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
    florenceLexerFromCombinedCustomGrammars = lexers.florenceLexerFromCombinedCustomGrammars,
    florenceParserFromCombinedCustomGrammars = parsers.florenceParserFromCombinedCustomGrammars,
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
      var customGrammarName = this.getCustomGrammarName(),
          combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars),
          florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceLexerRules = florenceLexer.getRules(),
          florenceParserRules = florenceParser.getRules(),
          florenceLexerEntries = rulesAsEntries(florenceLexerRules),
          florenceParserRulesString = rulesAsString(florenceParserRules),
          florenceLexicalEntries = florenceLexerEntries,
          ///
      florenceBNF = florenceParserRulesString; ///

      if (customGrammarName === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
        var bnf = this.getBNF(),
            ruleName = this.getRuleName(),
            lexicalPattern = this.getLexicalPattern();

        userDefinedCustomGrammar.setBNF(ruleName, bnf);

        userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
      }

      this.setFlorenceLexicalEntries(florenceLexicalEntries);

      this.setFlorenceBNF(florenceBNF);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwibGV4ZXJzIiwicGFyc2VycyIsImNvbnN0YW50cyIsIkJORlRleHRhcmVhIiwiQ3VzdG9tR3JhbW1hciIsInJ1bGVzVXRpbGl0aWVzIiwiUnVsZU5hbWVTZWxlY3QiLCJMZXhpY2FsUGF0dGVybklucHV0IiwiRmxvcmVuY2VCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFycyIsIkN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0IiwiRmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJydWxlc0FzRW50cmllcyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsInRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsInN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwibWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwibmFtZSIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21OYW1lIiwiY3VzdG9tR3JhbW1hcnMiLCJWaWV3IiwiY3VzdG9tR3JhbW1hck5hbWUiLCJnZXRDdXN0b21HcmFtbWFyTmFtZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJmbG9yZW5jZUxleGVyUnVsZXMiLCJnZXRSdWxlcyIsImZsb3JlbmNlUGFyc2VyUnVsZXMiLCJmbG9yZW5jZUxleGVyRW50cmllcyIsImZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmciLCJmbG9yZW5jZUxleGljYWxFbnRyaWVzIiwiZmxvcmVuY2VCTkYiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwic2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyIsInNldEZsb3JlbmNlQk5GIiwicmVhZE9ubHkiLCJzZXRCTkZSZWFkT25seSIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImNoYW5nZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0IiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR0EsSUFBTUUsU0FBU0YsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRyxVQUFVSCxRQUFRLFlBQVIsQ0FEaEI7QUFBQSxJQUVNSSxZQUFZSixRQUFRLGNBQVIsQ0FGbEI7QUFBQSxJQUdNSyxjQUFjTCxRQUFRLGdCQUFSLENBSHBCO0FBQUEsSUFJTU0sZ0JBQWdCTixRQUFRLGtCQUFSLENBSnRCO0FBQUEsSUFLTU8saUJBQWlCUCxRQUFRLG9CQUFSLENBTHZCO0FBQUEsSUFNTVEsaUJBQWlCUixRQUFRLG1CQUFSLENBTnZCO0FBQUEsSUFPTVMsc0JBQXNCVCxRQUFRLHdCQUFSLENBUDVCO0FBQUEsSUFRTVUsc0JBQXNC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UUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlFLDhCQUFDLDhCQUFELE9BSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEY7QUFRRSw4QkFBQyxtQkFBRDtBQVJGO0FBcEJGLE9BRkY7QUFtQ0Q7OztpQ0FFWTtBQUNYLFdBQUtHLGFBQUw7O0FBRUEsV0FBS0QsYUFBTCxHQUhXLENBR1c7O0FBRXRCLFdBQUtGLFlBQUwsR0FMVyxDQUtXO0FBQ3ZCOzs7bUNBRXFCRCxVLEVBQVk7QUFDaEMsVUFBTUssT0FBT2hELFFBQVFpRCxjQUFSLENBQXVCakMsSUFBdkIsRUFBNkIyQixVQUE3QixDQUFiOztBQUVBSyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXZIZ0JoRCxPOztBQTBIbkJtRCxPQUFPQyxNQUFQLENBQWNwQyxJQUFkLEVBQW9CO0FBQ2xCcUMsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCekMsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCcuLi9sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCcuLi9wYXJzZXJzJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9ydWxlTmFtZScpLFxuICAgICAgTGV4aWNhbFBhdHRlcm5JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIEZsb3JlbmNlQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2Zsb3JlbmNlQk5GJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyksXG4gICAgICBDb21iaW5lZEN1c3RvbUdyYW1tYXJzID0gcmVxdWlyZSgnLi4vY29tYmluZWRDdXN0b21HcmFtbWFycycpLFxuICAgICAgQ3VzdG9tR3JhbW1hck5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9jdXN0b21HcmFtbWFyTmFtZScpLFxuICAgICAgRmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9mbG9yZW5jZUxleGljYWxFbnRyaWVzJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBydWxlc0FzU3RyaW5nLCBydWxlc0FzRW50cmllcyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyB9ID0gbGV4ZXJzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzIH0gPSBwYXJzZXJzLFxuICAgICAgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYsIGV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgbWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GICB9ID0gcGFyc2VycztcblxuY29uc3QgbmFtZSA9IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FLCAgLy8vXG4gICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21OYW1lKG5hbWUpLFxuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclxuICAgICAgXTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hck5hbWUgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJOYW1lKCksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFycyA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hcnMuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyhjb21iaW5lZEN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyUnVsZXMgPSBmbG9yZW5jZUxleGVyLmdldFJ1bGVzKCksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXJSdWxlcyA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlckVudHJpZXMgPSBydWxlc0FzRW50cmllcyhmbG9yZW5jZUxleGVyUnVsZXMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUGFyc2VyUnVsZXMpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4aWNhbEVudHJpZXMgPSBmbG9yZW5jZUxleGVyRW50cmllcywgIC8vL1xuICAgICAgICAgIGZsb3JlbmNlQk5GID0gZmxvcmVuY2VQYXJzZXJSdWxlc1N0cmluZzsgIC8vL1xuXG4gICAgaWYgKGN1c3RvbUdyYW1tYXJOYW1lID09PSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzKGZsb3JlbmNlTGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORik7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJOYW1lID0gdGhpcy5nZXRDdXN0b21HcmFtbWFyTmFtZSgpO1xuXG4gICAgbGV0IGJuZixcbiAgICAgICAgcmVhZE9ubHksXG4gICAgICAgIGxleGljYWxQYXR0ZXJuO1xuXG4gICAgaWYgKGN1c3RvbUdyYW1tYXJOYW1lID09PSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSAndGVybScgOiBibmYgPSB0ZXJtRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdzdGF0ZW1lbnQnIDogYm5mID0gc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdleHByZXNzaW9uJyA6IGJuZiA9IGV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21ldGFzdGF0ZW1lbnQnIDogYm5mID0gbWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgIH1cblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuXG4gICAgICByZWFkT25seSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJuZiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ3VzdG9tIGdyYW1tYXJcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBGbG9yZW5jZSBsZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBGbG9yZW5jZSBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxGbG9yZW5jZUJORlRleHRhcmVhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=