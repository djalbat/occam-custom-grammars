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
      MainVerticalSplitter = require('./verticalSplitter/main'),
      CombinedCustomGrammars = require('../combinedCustomGrammars'),
      CustomGrammarNameSelect = require('./select/customGrammarName'),
      FlorenceLexicalEntriesTextarea = require('./textarea/florenceLexicalEntries');

const { Element } = easy,
      { SizeableElement } = easyLayout,
      { rulesAsString, rulesAsEntries } = rulesUtilities,
      { florenceLexerFromCombinedCustomGrammars } = lexers,
      { florenceParserFromCombinedCustomGrammars } = parsers,
      { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants,
      { termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF  } = parsers;

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,  ///
      userDefinedCustomGrammar = CustomGrammar.fromName(name),
      customGrammars = [
        userDefinedCustomGrammar
      ];

class View extends Element {
  update() {
    const customGrammarName = this.getCustomGrammarName(),
          combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars),
          florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceLexerRules = florenceLexer.getRules(),
          florenceParserRules = florenceParser.getRules(),
          florenceLexerEntries = rulesAsEntries(florenceLexerRules),
          florenceParserRulesString = rulesAsString(florenceParserRules),
          florenceLexicalEntries = florenceLexerEntries,  ///
          florenceBNF = florenceParserRulesString;  ///

    if (customGrammarName === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
      const bnf = this.getBNF(),
            ruleName = this.getRuleName();

      userDefinedCustomGrammar.setBNF(ruleName, bnf);
    }

    this.setFlorenceLexicalEntries(florenceLexicalEntries);

    this.setFlorenceBNF(florenceBNF);
  }

  changeHandler() {
    const ruleName = this.getRuleName(),
          customGrammarName = this.getCustomGrammarName();

    let bnf, readOnly;

    if (customGrammarName === DEFAULT_CUSTOM_GRAMMAR_NAME) {
      switch (ruleName) {
        case 'term' : bnf = termDefaultCustomGrammarBNF; break;
        case 'statement' : bnf = statementDefaultCustomGrammarBNF; break;
        case 'expression' : bnf = expressionDefaultCustomGrammarBNF; break;
        case 'metastatement' : bnf = metastatementDefaultCustomGrammarBNF; break;
      }

      readOnly = true;
    } else {
      bnf = userDefinedCustomGrammar.getBNF(ruleName);

      readOnly = false;
    }

    this.setBNF(bnf);

    this.setBNFReadOnly(readOnly);
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
          <CustomGrammarNameSelect onChange={changeHandler} />
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

    this.changeHandler(); ///

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
