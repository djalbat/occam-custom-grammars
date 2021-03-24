"use strict";

import { Element } from "easy";
import { RowsDiv, ColumnsDiv } from "easy-layout";
import { removeOrRenameIntermediateNodes } from "occam-grammar-utilities";
import { defaultCustomGrammar, CombinedCustomGrammar, lexersUtilities, parsersUtilities } from "../index";  ///

import Heading from "./heading";
import ColumnDiv from "./div/column";
import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import NameSelect from "./select/name";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import RuleNameSelect from "./select/ruleName";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import LexicalPatternInput from "./input/lexicalPattern";
import CombinedBNFTextarea from "./textarea/combinedBNF";
import VerticalSplitterDiv from "./div/splitter/vertical";
import userDefinedCustomGrammar from "./userDefinedCustomGrammar";
import RemoveOrRenameIntermediateNodesCheckbox from "./checkbox/removeOrRenameIntermediateNodes"

import { rulesAsString } from "../utilities/rules";
import { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME } from "../constants";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class View extends Element {
  initialContent = "";

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
            combinedCustomGrammarRuleMap = combinedCustomGrammar.getRuleMap(),
            combinedCustomGrammarRules = Object.values(combinedCustomGrammarRuleMap),
            multiLine = true,
            combinedCustomGrammarRulesString = rulesAsString(combinedCustomGrammarRules, multiLine),
            combinedBNF = combinedCustomGrammarRulesString,  ///
            florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            ruleMap = florenceParser.getRuleMap(),
            startRuleName = this.getStartRuleName(),
            startRule = ruleMap[startRuleName], ///
            content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens, startRule);

      let parseTree = null;

      if (node !== null) {
        const removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

        if (removeOrRenameIntermediateNodesCheckboxChecked) {
          removeOrRenameIntermediateNodes(node);
        }

        parseTree = node.asParseTree(tokens);
      }

      this.setParseTree(parseTree);

      this.setCombinedBNF(combinedBNF);
    } catch (error) {
      console.log(error);

      this.clearParseTree();

      this.clearCombinedBNF();
    }
  }

  changeHandler() {
    const name = this.getName(),
          ruleName = this.getRuleName(),
          readOnly = (name === DEFAULT_CUSTOM_GRAMMAR_NAME),
          customGrammar = readOnly ?  ///
                            defaultCustomGrammar :
                              userDefinedCustomGrammar,
          bnf = customGrammar.getBNF(ruleName),
          lexicalPattern = customGrammar.getLexicalPattern();

    this.setBNF(bnf);

    this.setBNFReadOnly(readOnly);

    this.setLexicalPattern(lexicalPattern);

    this.setLexicalPatternReadOnly(readOnly);
  }

  childElements() {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return ([

      <Heading>
        Custom grammars example
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
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
              Start rule name
            </SubHeading>
            <StartRuleNameInput onKeyUp={keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
            <SubHeading>
              Combined BNF
            </SubHeading>
            <CombinedBNFTextarea />
            <Paragraph>
              <RemoveOrRenameIntermediateNodesCheckbox onChange={keyUpHandler} checked />
              Remove or rename intermediate nodes
            </Paragraph>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const content = this.initialContent;

    this.setContent(content);

    this.changeHandler();

    this.keyUpHandler();
  }

  static tagName = "div";

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise();

    return exampleView
  }
}
