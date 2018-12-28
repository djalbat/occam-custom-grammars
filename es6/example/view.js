'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const lexers = require('../lexers'),
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

const { Element } = easy,
      { SizeableElement } = easyLayout,
      { rulesAsString, rulesAsEntries } = rulesUtilities,
      { USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants,
      { florenceLexerFromCombinedCustomGrammars } = lexers,
      { florenceParserFromCombinedCustomGrammars } = parsers,
      name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,  ///
      userDefinedCustomGrammar = CustomGrammar.fromName(name),
      customGrammars = [
        userDefinedCustomGrammar
      ];

class View extends Element {
  update() {
    const combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars),
          florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceLexerRules = florenceLexer.getRules(),
          florenceParserRules = florenceParser.getRules(),
          florenceLexerEntries = rulesAsEntries(florenceLexerRules),
          florenceParserRulesString = rulesAsString(florenceParserRules),
          florenceLexicalEntries = florenceLexerEntries,  ///
          florenceBNF = florenceParserRulesString;  ///

    this.setFlorenceLexicalEntries(florenceLexicalEntries);

    this.setFlorenceBNF(florenceBNF);
  }

  changeHandler() {
    // const ruleName = this.getRuleName(),
    //       customGrammar = this.findCustomGrammar(),
    //       bnf = customGrammar.getBNF(ruleName) || '', ///
    //       lexicalPattern = customGrammar.getLexicalPattern() || ''; ///
    //
    // this.setBNF(bnf);
    //
    // this.setLexicalPattern(lexicalPattern);
  }

  keyUpHandler() {
    this.update();
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>
            Custom grammar
          </h2>
          <CustomGrammarSelect onChange={changeHandler} />
          <h2>
            Rule name
          </h2>
          <RuleNameSelect onChange={changeHandler} />
          <h2>
            BNF
          </h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>
            Florence lexical entries
          </h2>
          <FlorenceLexicalEntriesTextarea />
          <h2>
            Florence BNF
          </h2>
          <FlorenceBNFTextarea />
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();

    this.update();
  }

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
