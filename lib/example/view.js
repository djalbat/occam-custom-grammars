"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _occamparsers = require("occam-parsers");
const _easylayout = require("easy-layout");
const _index = require("../index");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./subHeading"));
const _name = /*#__PURE__*/ _interop_require_default(require("./select/name"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./div/sizeable"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./textarea/bnf"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("./select/ruleName"));
const _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
const _startRuleName = /*#__PURE__*/ _interop_require_default(require("./input/startRuleName"));
const _nominalBNF = /*#__PURE__*/ _interop_require_default(require("./textarea/nominalBNF"));
const _vocabulary = /*#__PURE__*/ _interop_require_default(require("./textarea/vocabulary"));
const _vocabularyName = /*#__PURE__*/ _interop_require_default(require("./select/vocabularyName"));
const _userDefined = /*#__PURE__*/ _interop_require_default(require("./customGrammar/userDefined"));
const _rules = require("./utilities/rules");
const _grammarNames = require("./grammarNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { rulesAsString } = _occamparsers.rulesUtilities, { nominalLexerFromCombinedCustomGrammar } = _index.lexersUtilities, { nominalParserFromCombinedCustomGrammar } = _index.parsersUtilities;
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        // try {
        const bnf = this.getBNF(), name = this.getName(), ruleName = this.getRuleName(), vocabulary = this.getVocabulary(), vocabularyName = this.getVocabularyName();
        if (name === _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
            _userDefined.default.setBNF(ruleName, bnf);
            _userDefined.default.setVocabulary(vocabularyName, vocabulary);
        }
        const customGrammars = [
            _userDefined.default
        ], combinedCustomGrammar = _index.CombinedCustomGrammar.fromCustomGrammars(customGrammars), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);
        const ruleMap = nominalParser.getRuleMap(), startRuleName = this.getStartRuleName(), startRule = ruleMap[startRuleName], content = this.getContent(), tokens = nominalLexer.tokenise(content), node = nominalParser.parse(tokens, startRule);
        let parseTree = null;
        if (node !== null) {
            parseTree = node.asParseTree(tokens);
        }
        this.setParseTree(parseTree);
        const nominalRules = (0, _rules.rulesFromParser)(nominalParser), multiLine = true, rulesString = rulesAsString(nominalRules, multiLine), nominalBNF = rulesString; ///
        this.setNominalBNF(nominalBNF);
    // } catch (error) {
    //   console.log(error);
    //
    //   this.clearParseTree();
    //
    //   this.clearNominalBNF();
    // }
    };
    changeHandler = (event, element)=>{
        let customGrammar;
        const name = this.getName(), ruleName = this.getRuleName(), vocabularyName = this.getVocabularyName();
        switch(name){
            case _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME:
                customGrammar = _index.defaultCustomGrammar;
                break;
            case _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME:
                customGrammar = _userDefined.default;
                break;
        }
        const bnf = customGrammar.getBNF(ruleName), vocabulary = customGrammar.getVocabulary(vocabularyName);
        this.setBNF(bnf);
        this.setVocabulary(vocabulary);
    };
    childElements() {
        const keyUpHandler = this.keyUpHandler.bind(this), changeHandler = this.changeHandler.bind(this);
        return [
            /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Custom grammar"), /*#__PURE__*/ React.createElement(_name.default, {
                onChange: changeHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Vocabulary"), /*#__PURE__*/ React.createElement(_vocabularyName.default, {
                onChange: changeHandler
            }), /*#__PURE__*/ React.createElement(_vocabulary.default, {
                onKeyUp: keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                onChange: changeHandler
            }), /*#__PURE__*/ React.createElement(_bnf.default, {
                onKeyUp: keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
                onKeyUp: keyUpHandler
            }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                onKeyUp: keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nominal BNF"), /*#__PURE__*/ React.createElement(_nominalBNF.default, null))))
        ];
    }
    initialise() {
        this.assignContext();
        const { initialContent, initialStartRuleName } = this.constructor;
        const content = initialContent, startRuleName = initialStartRuleName; ///
        this.setContent(content);
        this.setStartRuleName(startRuleName);
        this.changeHandler();
        this.keyUpHandler();
    }
    static initialStartRuleName = "";
    static initialContent = `Rule (Groups)
  Conclusion
    A
`;
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMsIGRlZmF1bHRDdXN0b21HcmFtbWFyLCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgTmFtZVNlbGVjdCBmcm9tIFwiLi9zZWxlY3QvbmFtZVwiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lU2VsZWN0IGZyb20gXCIuL3NlbGVjdC9ydWxlTmFtZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBOb21pbmFsQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbm9taW5hbEJORlwiO1xuaW1wb3J0IFZvY2FidWxhcnlUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS92b2NhYnVsYXJ5XCI7XG5pbXBvcnQgVm9jYWJ1bGFyeU5hbWVTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3ZvY2FidWxhcnlOYW1lXCI7XG5pbXBvcnQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyIGZyb20gXCIuL2N1c3RvbUdyYW1tYXIvdXNlckRlZmluZWRcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tUGFyc2VyIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gZnJvbSBcIi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHZvY2FidWxhcnkgPSB0aGlzLmdldFZvY2FidWxhcnkoKSxcbiAgICAgICAgICAgIHZvY2FidWxhcnlOYW1lID0gdGhpcy5nZXRWb2NhYnVsYXJ5TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSwgdm9jYWJ1bGFyeSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gW1xuICAgICAgICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgICBjb25zdCBydWxlTWFwID0gbm9taW5hbFBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBzdGFydFJ1bGUgPSBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IG5vbWluYWxMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBub21pbmFsUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgY29uc3Qgbm9taW5hbFJ1bGVzID0gcnVsZXNGcm9tUGFyc2VyKG5vbWluYWxQYXJzZXIpLFxuICAgICAgICAgICAgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhub21pbmFsUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBub21pbmFsQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXROb21pbmFsQk5GKG5vbWluYWxCTkYpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhck5vbWluYWxCTkYoKTtcbiAgICAvLyB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgbGV0IGN1c3RvbUdyYW1tYXI7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeU5hbWUgPSB0aGlzLmdldFZvY2FidWxhcnlOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FOlxuICAgICAgICBjdXN0b21HcmFtbWFyID0gZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUU6XG4gICAgICAgIGN1c3RvbUdyYW1tYXIgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXI7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBjdXN0b21HcmFtbWFyLmdldFZvY2FidWxhcnkodm9jYWJ1bGFyeU5hbWUpO1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDdXN0b20gZ3JhbW1hclxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgVm9jYWJ1bGFyeVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFZvY2FidWxhcnlOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFZvY2FidWxhcnlUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBOb21pbmFsIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE5vbWluYWxCTkZUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiXCI7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFJ1bGUgKEdyb3VwcylcbiAgQ29uY2x1c2lvblxuICAgIEFcbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwibm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsIlZpZXciLCJFbGVtZW50Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiYm5mIiwiZ2V0Qk5GIiwibmFtZSIsImdldE5hbWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwidm9jYWJ1bGFyeSIsImdldFZvY2FidWxhcnkiLCJ2b2NhYnVsYXJ5TmFtZSIsImdldFZvY2FidWxhcnlOYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJzZXRCTkYiLCJzZXRWb2NhYnVsYXJ5IiwiY3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJub21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsIm5vbWluYWxSdWxlcyIsInJ1bGVzRnJvbVBhcnNlciIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwibm9taW5hbEJORiIsInNldE5vbWluYWxCTkYiLCJjaGFuZ2VIYW5kbGVyIiwiY3VzdG9tR3JhbW1hciIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIk5hbWVTZWxlY3QiLCJvbkNoYW5nZSIsIlZvY2FidWxhcnlOYW1lU2VsZWN0IiwiVm9jYWJ1bGFyeVRleHRhcmVhIiwib25LZXlVcCIsIlJ1bGVOYW1lU2VsZWN0IiwiQk5GVGV4dGFyZWEiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJOb21pbmFsQk5GVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJzZXRDb250ZW50Iiwic2V0U3RhcnRSdWxlTmFtZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhT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