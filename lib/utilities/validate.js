"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get validateBNF () {
        return validateBNF;
    },
    get validateVocabulary () {
        return validateVocabulary;
    }
});
var _necessary = require("necessary");
var _typesMap = /*#__PURE__*/ _interop_require_default(require("../typesMap"));
var _nominal = require("../utilities/nominal");
var _constants = require("../constants");
var _query = require("../utilities/query");
var _grammar = require("../utilities/grammar");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var expressionNodesQuery = (0, _query.nodesQuery)("//expression"), ruleNameTerminalNodeQuery = (0, _query.nodeQuery)("/document/rule/name/@*!"), stringLiteralTerminalNodesQuery = (0, _query.nodesQuery)("//stringLiteral/@*!"), significantTokenTypeTerminalNodesQuery = (0, _query.nodesQuery)("//significantTokenType/@*!");
function validateBNF(bnf, ruleName) {
    var content = bnf, tokens = _grammar.customGrammarBNFLexer.tokenise(content), node = _grammar.customGrammarBNFParser.parse(tokens);
    if (node === null) {
        return;
    }
    var ruleNameTerminalNode = ruleNameTerminalNodeQuery(node);
    if (ruleNameTerminalNode !== null) {
        var name = nameFromRuleNameTerminalNode(ruleNameTerminalNode);
        if (name !== ruleName) {
            throw new Error("The '".concat(name, "' rule should be named '").concat(ruleName, "'."));
        }
    }
    var types = _typesMap.default[ruleName], significantTokenTypeTerminalNodes = significantTokenTypeTerminalNodesQuery(node);
    significantTokenTypeTerminalNodes.forEach(function(significantTokenTypeTerminalNode) {
        var type = typeFromSignificantTokenTypeTerminalNode(significantTokenTypeTerminalNode), typesIncludeType = types.includes(type);
        if (!typesIncludeType) {
            throw new Error("The '".concat(type, "' type is not included in the '").concat(ruleName, "' rule's types."));
        }
    });
    var stringLiteralTerminalNodes = stringLiteralTerminalNodesQuery(node);
    stringLiteralTerminalNodes.forEach(function(stringLiteralTerminalNode) {
        var content = contentFromStringLiteralTerminalNode(stringLiteralTerminalNode);
        if (content === _constants.UNDERSCORE_CHARACTER) {
            throw new Error('The "'.concat(content, '" string literal cannot be an underscore.'));
        }
        var tokens = _nominal.nominalLexer.tokenise(content), tokensLength = tokens.length;
        if (tokensLength !== 1) {
            throw new Error('Tokenising the "'.concat(content, '" string literal does not result in a single token.'));
        }
        var firstToken = first(tokens), token = firstToken, type = token.getType(), typesIncludeType = types.includes(type);
        if (!typesIncludeType) {
            throw new Error('The "'.concat(content, "\" string literal's token's '").concat(type, "' type is not included in the '").concat(ruleName, "' rule's types."));
        }
    });
}
function validateVocabulary(vocabulary) {
    var content = vocabulary, tokens = _grammar.customGrammarVocabularyLexer.tokenise(content), node = _grammar.customGrammarVocabularyParser.parse(tokens);
    if (node === null) {
        return;
    }
    var expressionNodes = expressionNodesQuery(node);
    expressionNodes.forEach(function(expressionNode) {
        var content = contentFromExpressionNode(expressionNode), tokens = _nominal.nominalLexer.tokenise(content), tokensLength = tokens.length;
        if (tokensLength > 1) {
            throw new Error("Tokenising the '".concat(content, "' content results in more than one token."));
        }
        var firstToken = first(tokens), token = firstToken, type = token.getType();
        if (type !== UNASSIGNED_TYPE) {
            throw new Error("The '".concat(type, "' type of the '").concat(content, "' token is not 'unassigned'."));
        }
        if (content === _constants.UNDERSCORE_CHARACTER) {
            throw new Error("The '".concat(content, "' token cannot be an underscore."));
        }
    });
}
function nameFromRuleNameTerminalNode(ruleNameTerminalNode) {
    var name;
    var content = ruleNameTerminalNode.getContent();
    name = content; ///
    return name;
}
function contentFromStringLiteralTerminalNode(stringLiteralTerminalNode) {
    var content;
    content = stringLiteralTerminalNode.getContent();
    var matches = content.match(/"([^"]*)"/), secondMatch = second(matches);
    content = secondMatch; ///
    return content;
}
function typeFromSignificantTokenTypeTerminalNode(significantTokenTypeTerminalNode) {
    var type;
    var content = significantTokenTypeTerminalNode.getContent(), matches = content.match(/\[([^\]]*)\]/), secondMatch = second(matches);
    type = secondMatch; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdHlwZXNNYXAgZnJvbSBcIi4uL3R5cGVzTWFwXCI7XG5cbmltcG9ydCB7IG5vbWluYWxMZXhlciB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuaW1wb3J0IHsgVU5ERVJTQ09SRV9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyQk5GTGV4ZXIsIGN1c3RvbUdyYW1tYXJCTkZQYXJzZXIsIGN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5TGV4ZXIsIGN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5UGFyc2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ncmFtbWFyXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGV4cHJlc3Npb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8vZXhwcmVzc2lvblwiKSxcbiAgICAgIHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZG9jdW1lbnQvcnVsZS9uYW1lL0AqIVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLy9zdHJpbmdMaXRlcmFsL0AqIVwiKSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8vc2lnbmlmaWNhbnRUb2tlblR5cGUvQCohXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVCTkYoYm5mLCBydWxlTmFtZSkge1xuICBjb25zdCBjb250ZW50ID0gYm5mLFxuICAgICAgICB0b2tlbnMgPSBjdXN0b21HcmFtbWFyQk5GTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBjdXN0b21HcmFtbWFyQk5GUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgaWYgKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUnVsZU5hbWVUZXJtaW5hbE5vZGUocnVsZU5hbWVUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG5hbWUgIT09IHJ1bGVOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtuYW1lfScgcnVsZSBzaG91bGQgYmUgbmFtZWQgJyR7cnVsZU5hbWV9Jy5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0eXBlcyA9IHR5cGVzTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVUZXJtaW5hbE5vZGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVUZXJtaW5hbE5vZGVzUXVlcnkobm9kZSk7XG5cbiAgc2lnbmlmaWNhbnRUb2tlblR5cGVUZXJtaW5hbE5vZGVzLmZvckVhY2goKHNpZ25pZmljYW50VG9rZW5UeXBlVGVybWluYWxOb2RlKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVUZXJtaW5hbE5vZGUoc2lnbmlmaWNhbnRUb2tlblR5cGVUZXJtaW5hbE5vZGUpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZVR5cGUgPSB0eXBlcy5pbmNsdWRlcyh0eXBlKTtcblxuICAgIGlmICghdHlwZXNJbmNsdWRlVHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7dHlwZX0nIHR5cGUgaXMgbm90IGluY2x1ZGVkIGluIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUncyB0eXBlcy5gKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZXMgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpO1xuXG4gIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVzLmZvckVhY2goKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21TdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnQgPT09IFVOREVSU0NPUkVfQ0hBUkFDVEVSKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIiR7Y29udGVudH1cIiBzdHJpbmcgbGl0ZXJhbCBjYW5ub3QgYmUgYW4gdW5kZXJzY29yZS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbnMgPSBub21pbmFsTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0b2tlbnNMZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVG9rZW5pc2luZyB0aGUgXCIke2NvbnRlbnR9XCIgc3RyaW5nIGxpdGVyYWwgZG9lcyBub3QgcmVzdWx0IGluIGEgc2luZ2xlIHRva2VuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0VG9rZW4gPSBmaXJzdCh0b2tlbnMpLFxuICAgICAgICAgIHRva2VuID0gZmlyc3RUb2tlbiwgLy8vXG4gICAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlc0luY2x1ZGVUeXBlID0gdHlwZXMuaW5jbHVkZXModHlwZSk7XG5cbiAgICBpZiAoIXR5cGVzSW5jbHVkZVR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiJHtjb250ZW50fVwiIHN0cmluZyBsaXRlcmFsJ3MgdG9rZW4ncyAnJHt0eXBlfScgdHlwZSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlICcke3J1bGVOYW1lfScgcnVsZSdzIHR5cGVzLmApXG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVm9jYWJ1bGFyeSh2b2NhYnVsYXJ5KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB2b2NhYnVsYXJ5LCAvLy9cbiAgICAgICAgdG9rZW5zID0gY3VzdG9tR3JhbW1hclZvY2FidWxhcnlMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IGN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5UGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSBleHByZXNzaW9uTm9kZXNRdWVyeShub2RlKTtcblxuICBleHByZXNzaW9uTm9kZXMuZm9yRWFjaCgoZXhwcmVzc2lvbk5vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gbm9taW5hbExleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodG9rZW5zTGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUb2tlbmlzaW5nIHRoZSAnJHtjb250ZW50fScgY29udGVudCByZXN1bHRzIGluIG1vcmUgdGhhbiBvbmUgdG9rZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RUb2tlbiA9IGZpcnN0KHRva2VucyksXG4gICAgICAgICAgdG9rZW4gPSBmaXJzdFRva2VuLFxuICAgICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gVU5BU1NJR05FRF9UWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHt0eXBlfScgdHlwZSBvZiB0aGUgJyR7Y29udGVudH0nIHRva2VuIGlzIG5vdCAndW5hc3NpZ25lZCcuYCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQgPT09IFVOREVSU0NPUkVfQ0hBUkFDVEVSKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtjb250ZW50fScgdG9rZW4gY2Fubm90IGJlIGFuIHVuZGVyc2NvcmUuYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21SdWxlTmFtZVRlcm1pbmFsTm9kZShydWxlTmFtZVRlcm1pbmFsTm9kZSkge1xuICBsZXQgbmFtZTtcblxuICBjb25zdCBjb250ZW50ID0gcnVsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gIG5hbWUgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21TdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUpIHtcbiAgbGV0IGNvbnRlbnQ7XG5cbiAgY29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9cIihbXlwiXSopXCIvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgY29udGVudCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21TaWduaWZpY2FudFRva2VuVHlwZVRlcm1pbmFsTm9kZShzaWduaWZpY2FudFRva2VuVHlwZVRlcm1pbmFsTm9kZSkge1xuICBsZXQgdHlwZTtcblxuICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlblR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXFxbKFteXFxdXSopXFxdLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gIHR5cGUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVCTkYiLCJ2YWxpZGF0ZVZvY2FidWxhcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiZXhwcmVzc2lvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVzUXVlcnkiLCJzaWduaWZpY2FudFRva2VuVHlwZVRlcm1pbmFsTm9kZXNRdWVyeSIsImJuZiIsInJ1bGVOYW1lIiwiY29udGVudCIsInRva2VucyIsImN1c3RvbUdyYW1tYXJCTkZMZXhlciIsInRva2VuaXNlIiwibm9kZSIsImN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJwYXJzZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwibmFtZSIsIm5hbWVGcm9tUnVsZU5hbWVUZXJtaW5hbE5vZGUiLCJFcnJvciIsInR5cGVzIiwidHlwZXNNYXAiLCJzaWduaWZpY2FudFRva2VuVHlwZVRlcm1pbmFsTm9kZXMiLCJmb3JFYWNoIiwic2lnbmlmaWNhbnRUb2tlblR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlIiwidHlwZUZyb21TaWduaWZpY2FudFRva2VuVHlwZVRlcm1pbmFsTm9kZSIsInR5cGVzSW5jbHVkZVR5cGUiLCJpbmNsdWRlcyIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVzIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsImNvbnRlbnRGcm9tU3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsIlVOREVSU0NPUkVfQ0hBUkFDVEVSIiwibm9taW5hbExleGVyIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUb2tlbiIsInRva2VuIiwiZ2V0VHlwZSIsInZvY2FidWxhcnkiLCJjdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyIiwiY3VzdG9tR3JhbW1hclZvY2FidWxhcnlQYXJzZXIiLCJleHByZXNzaW9uTm9kZXMiLCJleHByZXNzaW9uTm9kZSIsImNvbnRlbnRGcm9tRXhwcmVzc2lvbk5vZGUiLCJVTkFTU0lHTkVEX1RZUEUiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWtCZ0JBO2VBQUFBOztRQTBEQUM7ZUFBQUE7Ozt5QkExRWU7K0RBRVY7dUJBRVE7eUJBQ1E7cUJBQ0M7dUJBQ3FGOzs7Ozs7QUFFM0gsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFZixJQUFNQyx1QkFBdUJDLElBQUFBLGlCQUFVLEVBQUMsaUJBQ2xDQyw0QkFBNEJDLElBQUFBLGdCQUFTLEVBQUMsNEJBQ3RDQyxrQ0FBa0NILElBQUFBLGlCQUFVLEVBQUMsd0JBQzdDSSx5Q0FBeUNKLElBQUFBLGlCQUFVLEVBQUM7QUFFbkQsU0FBU04sWUFBWVcsR0FBRyxFQUFFQyxRQUFRO0lBQ3ZDLElBQU1DLFVBQVVGLEtBQ1ZHLFNBQVNDLDhCQUFxQixDQUFDQyxRQUFRLENBQUNILFVBQ3hDSSxPQUFPQywrQkFBc0IsQ0FBQ0MsS0FBSyxDQUFDTDtJQUUxQyxJQUFJRyxTQUFTLE1BQU07UUFDakI7SUFDRjtJQUVBLElBQU1HLHVCQUF1QmIsMEJBQTBCVTtJQUV2RCxJQUFJRyx5QkFBeUIsTUFBTTtRQUNqQyxJQUFNQyxPQUFPQyw2QkFBNkJGO1FBRTFDLElBQUlDLFNBQVNULFVBQVU7WUFDckIsTUFBTSxJQUFJVyxNQUFNLEFBQUMsUUFBc0NYLE9BQS9CUyxNQUFLLDRCQUFtQyxPQUFUVCxVQUFTO1FBQ2xF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