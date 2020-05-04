"use strict";

import { Element } from "easy";
import { ColumnsDiv } from "easy-layout";

import Heading from "./heading";
import ColumnDiv from "./div/column";
import SubHeading from "./subHeading";
import NameSelect from "./select/name";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import RuleNameSelect from "./select/ruleName";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import LexicalPatternInput from "./input/lexicalPattern";
import CombinedBNFTextarea from "./textarea/combinedBNF";
import VerticalSplitterDiv from "./div/splitter/vertical";
import TopmostRuleNameInput from "./input/topmostRuleName";

export default class View extends Element {
  keyUpHandler() {

  }

  changeHandler() {

  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return ([

      <Heading>
        Grammar utilities example
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <SubHeading>
            Name
          </SubHeading>
          <NameSelect onChange={changeHandler} />
          <SubHeading>
            Rule name
          </SubHeading>
          <RuleNameSelect onChange={changeHandler} />
          <SubHeading>
            Lexical pattern
          </SubHeading>
          <LexicalPatternInput onKeyUp={keyUpHandler} />
          <SubHeading>
            BNF
          </SubHeading>
          <BNFTextarea onKeyUp={keyUpHandler} />
          <SubHeading>
            Topmost ruleName
          </SubHeading>
          <TopmostRuleNameInput onKeyUp={keyUpHandler} />
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <SubHeading>
            Content
          </SubHeading>
          <ContentTextarea onKeyUp={keyUpHandler} />
          <SubHeading>
            Combined BNF
          </SubHeading>
          <CombinedBNFTextarea />
          <SubHeading>
            Parse tree
          </SubHeading>
          <ParseTreeTextarea />
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise(properties) {
    this.assignContext();

    this.changeHandler();

    this.keyUpHandler();
  }

  static tagName = "div";

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise(properties);

    return exampleView
  }
}







/*
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
}
*/
