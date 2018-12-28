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
    FlorenceBNFTextarea = require('./textarea/florenceBNF'),
    CustomGrammarSelect = require('./select/customGrammar'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammars = require('../combinedCustomGrammars'),
    FlorenceLexicalEntriesTextarea = require('./textarea/florenceLexicalEntries');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement,
    rulesAsString = rulesUtilities.rulesAsString,
    rulesAsEntries = rulesUtilities.rulesAsEntries,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    florenceLexerFromCombinedCustomGrammars = lexers.florenceLexerFromCombinedCustomGrammars,
    florenceParserFromCombinedCustomGrammars = parsers.florenceParserFromCombinedCustomGrammars,
    name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    userDefinedCustomGrammar = CustomGrammar.fromName(name),
    customGrammars = [userDefinedCustomGrammar];

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'update',
    value: function update() {
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

      this.setFlorenceLexicalEntries(florenceLexicalEntries);

      this.setFlorenceBNF(florenceBNF);
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler() {
      // const ruleName = this.getRuleName(),
      //       customGrammar = this.findCustomGrammar(),
      //       bnf = customGrammar.getBNF(ruleName) || '', ///
      //       lexicalPattern = customGrammar.getLexicalPattern() || ''; ///
      //
      // this.setBNF(bnf);
      //
      // this.setLexicalPattern(lexicalPattern);
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      this.update();
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
          React.createElement(CustomGrammarSelect, { onChange: changeHandler }),
          React.createElement(
            'h2',
            null,
            'Rule name'
          ),
          React.createElement(RuleNameSelect, { onChange: changeHandler }),
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

      this.update();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwibGV4ZXJzIiwicGFyc2VycyIsImNvbnN0YW50cyIsIkJORlRleHRhcmVhIiwiQ3VzdG9tR3JhbW1hciIsInJ1bGVzVXRpbGl0aWVzIiwiUnVsZU5hbWVTZWxlY3QiLCJGbG9yZW5jZUJORlRleHRhcmVhIiwiQ3VzdG9tR3JhbW1hclNlbGVjdCIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFycyIsIkZsb3JlbmNlTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJydWxlc0FzU3RyaW5nIiwicnVsZXNBc0VudHJpZXMiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMiLCJuYW1lIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiLCJjdXN0b21HcmFtbWFycyIsIlZpZXciLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJzIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VMZXhlclJ1bGVzIiwiZ2V0UnVsZXMiLCJmbG9yZW5jZVBhcnNlclJ1bGVzIiwiZmxvcmVuY2VMZXhlckVudHJpZXMiLCJmbG9yZW5jZVBhcnNlclJ1bGVzU3RyaW5nIiwiZmxvcmVuY2VMZXhpY2FsRW50cmllcyIsImZsb3JlbmNlQk5GIiwic2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyIsInNldEZsb3JlbmNlQk5GIiwidXBkYXRlIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJjaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLFNBQVNGLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUcsVUFBVUgsUUFBUSxZQUFSLENBRGhCO0FBQUEsSUFFTUksWUFBWUosUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTUssY0FBY0wsUUFBUSxnQkFBUixDQUhwQjtBQUFBLElBSU1NLGdCQUFnQk4sUUFBUSxrQkFBUixDQUp0QjtBQUFBLElBS01PLGlCQUFpQlAsUUFBUSxvQkFBUixDQUx2QjtBQUFBLElBTU1RLGlCQUFpQlIsUUFBUSxtQkFBUixDQU52QjtBQUFBLElBT01TLHNCQUFzQlQsUUFBUSx3QkFBUixDQVA1QjtBQUFBLElBUU1VLHNCQUFzQlYsUUFBUSx3QkFBUixDQVI1QjtBQUFBLElBU01XLHVCQUF1QlgsUUFBUSx5QkFBUixDQVQ3QjtBQUFBLElBVU1ZLHlCQUF5QlosUUFBUSwyQkFBUixDQVYvQjtBQUFBLElBV01hLGlDQUFpQ2IsUUFBUSxtQ0FBUixDQVh2Qzs7QUFhTSxJQUFFYyxPQUFGLEdBQWNmLElBQWQsQ0FBRWUsT0FBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JkLFVBRHRCLENBQ0VjLGVBREY7QUFBQSxJQUVFQyxhQUZGLEdBRW9DVCxjQUZwQyxDQUVFUyxhQUZGO0FBQUEsSUFFaUJDLGNBRmpCLEdBRW9DVixjQUZwQyxDQUVpQlUsY0FGakI7QUFBQSxJQUdFQyxnQ0FIRixHQUd1Q2QsU0FIdkMsQ0FHRWMsZ0NBSEY7QUFBQSxJQUlFQyx1Q0FKRixHQUk4Q2pCLE1BSjlDLENBSUVpQix1Q0FKRjtBQUFBLElBS0VDLHdDQUxGLEdBSytDakIsT0FML0MsQ0FLRWlCLHdDQUxGO0FBQUEsSUFNQUMsSUFOQSxHQU1PSCxnQ0FOUDtBQUFBLElBT0FJLHdCQVBBLEdBTzJCaEIsY0FBY2lCLFFBQWQsQ0FBdUJGLElBQXZCLENBUDNCO0FBQUEsSUFRQUcsY0FSQSxHQVFpQixDQUNmRix3QkFEZSxDQVJqQjs7SUFZQUcsSTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyx5QkFBeUJkLHVCQUF1QmUsa0JBQXZCLENBQTBDSCxjQUExQyxDQUEvQjtBQUFBLFVBQ01JLGdCQUFnQlQsd0NBQXdDTyxzQkFBeEMsQ0FEdEI7QUFBQSxVQUVNRyxpQkFBaUJULHlDQUF5Q00sc0JBQXpDLENBRnZCO0FBQUEsVUFHTUkscUJBQXFCRixjQUFjRyxRQUFkLEVBSDNCO0FBQUEsVUFJTUMsc0JBQXNCSCxlQUFlRSxRQUFmLEVBSjVCO0FBQUEsVUFLTUUsdUJBQXVCaEIsZUFBZWEsa0JBQWYsQ0FMN0I7QUFBQSxVQU1NSSw0QkFBNEJsQixjQUFjZ0IsbUJBQWQsQ0FObEM7QUFBQSxVQU9NRyx5QkFBeUJGLG9CQVAvQjtBQUFBLFVBT3NEO0FBQ2hERyxvQkFBY0YseUJBUnBCLENBRE8sQ0FTeUM7O0FBRWhELFdBQUtHLHlCQUFMLENBQStCRixzQkFBL0I7O0FBRUEsV0FBS0csY0FBTCxDQUFvQkYsV0FBcEI7QUFDRDs7O29DQUVlO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7bUNBRWM7QUFDYixXQUFLRyxNQUFMO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFVBQU1DLGVBQWUsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7QUFBQSxVQUNNQyxnQkFBZ0IsS0FBS0EsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FEdEI7O0FBR0EsYUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRSw4QkFBQyxtQkFBRCxJQUFxQixVQUFVQyxhQUEvQixHQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUxGO0FBUUUsOEJBQUMsY0FBRCxJQUFnQixVQUFVQSxhQUExQixHQVJGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVRGO0FBWUUsOEJBQUMsV0FBRCxJQUFhLFNBQVNGLFlBQXRCO0FBWkYsU0FERjtBQWVFLDRCQUFDLG9CQUFELE9BZkY7QUFnQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBSUUsOEJBQUMsOEJBQUQsT0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRjtBQVFFLDhCQUFDLG1CQUFEO0FBUkY7QUFoQkYsT0FGRjtBQStCRDs7O2lDQUVZO0FBQ1gsV0FBS0csYUFBTDs7QUFFQSxXQUFLTCxNQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFNSyxPQUFPL0IsUUFBUWdDLGNBQVIsQ0FBdUJyQixJQUF2QixFQUE2QmUsVUFBN0IsQ0FBYjs7QUFFQUssV0FBS0UsVUFBTDs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUFqRmdCL0IsTzs7QUFvRm5Ca0MsT0FBT0MsTUFBUCxDQUFjeEIsSUFBZCxFQUFvQjtBQUNsQnlCLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjdCLElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnLi4vbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnLi4vcGFyc2VycycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBDdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi4vY3VzdG9tR3JhbW1hcicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIFJ1bGVOYW1lU2VsZWN0ID0gcmVxdWlyZSgnLi9zZWxlY3QvcnVsZU5hbWUnKSxcbiAgICAgIEZsb3JlbmNlQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2Zsb3JlbmNlQk5GJyksXG4gICAgICBDdXN0b21HcmFtbWFyU2VsZWN0ID0gcmVxdWlyZSgnLi9zZWxlY3QvY3VzdG9tR3JhbW1hcicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgQ29tYmluZWRDdXN0b21HcmFtbWFycyA9IHJlcXVpcmUoJy4uL2NvbWJpbmVkQ3VzdG9tR3JhbW1hcnMnKSxcbiAgICAgIEZsb3JlbmNlTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvZmxvcmVuY2VMZXhpY2FsRW50cmllcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZXNBc0VudHJpZXMgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMgfSA9IGxleGVycyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyB9ID0gcGFyc2VycyxcbiAgICAgIG5hbWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgIC8vL1xuICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tTmFtZShuYW1lKSxcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXJcbiAgICAgIF07XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXJzLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyhjb21iaW5lZEN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMoY29tYmluZWRDdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlclJ1bGVzID0gZmxvcmVuY2VMZXhlci5nZXRSdWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyUnVsZXMgPSBmbG9yZW5jZVBhcnNlci5nZXRSdWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXJFbnRyaWVzID0gcnVsZXNBc0VudHJpZXMoZmxvcmVuY2VMZXhlclJ1bGVzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlclJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhmbG9yZW5jZVBhcnNlclJ1bGVzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGljYWxFbnRyaWVzID0gZmxvcmVuY2VMZXhlckVudHJpZXMsICAvLy9cbiAgICAgICAgICBmbG9yZW5jZUJORiA9IGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyhmbG9yZW5jZUxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMuc2V0RmxvcmVuY2VCTkYoZmxvcmVuY2VCTkYpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICAvLyBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAvLyAgICAgICBjdXN0b21HcmFtbWFyID0gdGhpcy5maW5kQ3VzdG9tR3JhbW1hcigpLFxuICAgIC8vICAgICAgIGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSB8fCAnJywgLy8vXG4gICAgLy8gICAgICAgbGV4aWNhbFBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldExleGljYWxQYXR0ZXJuKCkgfHwgJyc7IC8vL1xuICAgIC8vXG4gICAgLy8gdGhpcy5zZXRCTkYoYm5mKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEN1c3RvbSBncmFtbWFyXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q3VzdG9tR3JhbW1hclNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBGbG9yZW5jZSBsZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBGbG9yZW5jZSBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxGbG9yZW5jZUJORlRleHRhcmVhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19