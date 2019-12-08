'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'), ///
      parsers = require('occam-parsers'), ///
      easyLayout = require('easy-layout'),
      grammarUtilities = require('occam-grammar-utilities');

const constants = require('../constants'),
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

const { Element } = easy,
      { findRule } = ruleUtilities,
      { rulesAsString } = rulesUtilities,
      { SizeableElement } = easyLayout,
      { defaultLexicalPattern } = lexers,
      { removeOrRenameIntermediateNodes } = grammarUtilities,
      { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities,
      { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants,
      { termDefaultBNF, statementDefaultBNF, expressionDefaultBNF, metastatementDefaultBNF  } = parsers;

class View extends Element {
  keyUpHandler() {
    try {
      const name = this.getName();

      if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
        const bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

        userDefinedCustomGrammar.setBNF(ruleName, bnf);

        userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
      }

      const customGrammars = [
              userDefinedCustomGrammar
            ],
            combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            combinedCustomGrammarRules = combinedCustomGrammar.getRules(),
            multiLine = true,
            combinedCustomGrammarRulesString = rulesAsString(combinedCustomGrammarRules, multiLine),
            combinedBNF = combinedCustomGrammarRulesString,  ///
            florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            topmostRuleName = this.getTopmostRuleName(),
            rules = florenceParser.getRules(),
            topmostRule = findRule(topmostRuleName, rules),
            content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens, topmostRule);

      let parseTree = null;

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

  changeHandler() {
    const name = this.getName(),
          ruleName = this.getRuleName();

    let bnf,
        readOnly,
        lexicalPattern;

    if (name === DEFAULT_CUSTOM_GRAMMAR_NAME) {
      switch (ruleName) {
        case 'term' : bnf = termDefaultBNF; break;
        case 'statement' : bnf = statementDefaultBNF; break;
        case 'expression' : bnf = expressionDefaultBNF; break;
        case 'metastatement' : bnf = metastatementDefaultBNF; break;
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

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>Name</h2>
          <NameSelect onChange={changeHandler} />
          <h2>Rule name</h2>
          <RuleNameSelect onChange={changeHandler} />
          <h2>Lexical pattern</h2>
          <LexicalPatternInput onKeyUp={keyUpHandler} />
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
          <h2>Topmost rule name</h2>
          <TopmostRuleNameInput onKeyUp={keyUpHandler} />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Combined BNF</h2>
          <CombinedBNFTextarea />
          <h2>Parse tree</h2>
          <ParseTreeTextarea />
          <ErrorParagraph />
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();

    this.changeHandler(); ///

    this.keyUpHandler();  ///
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
