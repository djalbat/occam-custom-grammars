"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lexicalPatternsFromCustomGrammars = lexicalPatternsFromCustomGrammars;
exports.bnfsFromRuleNameAndCustomGrammars = bnfsFromRuleNameAndCustomGrammars;
function lexicalPatternsFromCustomGrammars(customGrammars) {
    var lexicalPatterns = [];
    customGrammars.forEach(function(customGrammar) {
        var lexicalPattern = customGrammar.getLexicalPattern();
        if (lexicalPattern) {
            lexicalPatterns.push(lexicalPattern);
        }
    });
    return lexicalPatterns;
}
function bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars) {
    var bnfs = [];
    customGrammars.forEach(function(customGrammar) {
        var bnf = customGrammar.getBNF(ruleName);
        if (bnf) {
            bnfs.push(bnf);
        }
    });
    return bnfs;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3VzdG9tR3JhbW1hcnMuanMiXSwibmFtZXMiOlsibGV4aWNhbFBhdHRlcm5zRnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hcnMiLCJsZXhpY2FsUGF0dGVybnMiLCJmb3JFYWNoIiwiY3VzdG9tR3JhbW1hciIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJwdXNoIiwiYm5mc0Zyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJzIiwicnVsZU5hbWUiLCJibmZzIiwiYm5mIiwiZ2V0Qk5GIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksaUNBQWlDLEdBQWpDLGlDQUFpQztRQWNqQyxpQ0FBaUMsR0FBakMsaUNBQWlDO1NBZGpDLGlDQUFpQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pFLEdBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLGFBQWEsRUFBSyxDQUFDO1FBQ3pDLEdBQUssQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGlCQUFpQjtRQUV0RCxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUM7WUFDbkIsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7QUFDeEIsQ0FBQztTQUVlLGlDQUFpQyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsQ0FBQztJQUMzRSxHQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUVmLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLGFBQWEsRUFBSyxDQUFDO1FBQ3pDLEdBQUssQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBRXpDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUk7QUFDYixDQUFDIn0=