"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rulesFromBNF = rulesFromBNF;
exports.rulesAsString = rulesAsString;
exports.ruleMapFromRules = ruleMapFromRules;
var _occamParsers = require("occam-parsers");
var _constants = require("../constants");
function rulesFromBNF(bnf) {
    var basicParser = _occamParsers.BasicParser.fromBNF(bnf), ruleMap = basicParser.getRuleMap(), rules = Object.values(ruleMap); ///
    return rules;
}
function rulesAsString(rules, multiLine) {
    var maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength, rule) {
        var ruleName = rule.getName(), ruleNameLength = ruleName.length;
        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);
        return maximumRuleNameLength;
    }, 0), rulesString = rules.reduce(function(rulesString, rule) {
        var ruleString = rule.asString(maximumRuleNameLength, multiLine);
        rulesString += ruleString;
        return rulesString;
    }, _constants.EMPTY_STRING).replace(/^\n\n/, _constants.EMPTY_STRING);
    return rulesString;
}
function ruleMapFromRules(rules) {
    var ruleMap = rules.reduce(function(ruleMap, rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
        return ruleMap;
    }, {
    });
    return ruleMap;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwibmFtZXMiOlsiQmFzaWNQYXJzZXIiLCJFTVBUWV9TVFJJTkciLCJydWxlc0Zyb21CTkYiLCJibmYiLCJiYXNpY1BhcnNlciIsImZyb21CTkYiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGVzIiwiT2JqZWN0IiwidmFsdWVzIiwicnVsZXNBc1N0cmluZyIsIm11bHRpTGluZSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZUxlbmd0aCIsImxlbmd0aCIsIk1hdGgiLCJtYXgiLCJydWxlc1N0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsInJlcGxhY2UiLCJydWxlTWFwRnJvbVJ1bGVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksWUFBWSxHQUFaLFlBQVk7UUFRWixhQUFhLEdBQWIsYUFBYTtRQW9CYixnQkFBZ0IsR0FBaEIsZ0JBQWdCO0FBaENKLEdBQWUsQ0FBZixhQUFlO0FBRWQsR0FBYyxDQUFkLFVBQWM7U0FFM0IsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLEdBQUssQ0FBQyxXQUFXLEdBTFMsYUFBZSxhQUtULE9BQU8sQ0FBQyxHQUFHLEdBQ3JDLE9BQU8sR0FBRyxXQUFXLENBQUMsVUFBVSxJQUNoQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXpDLE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQztTQUVlLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDL0MsR0FBSyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFQLHFCQUFxQixFQUFFLElBQUksRUFBSyxDQUFDO1FBQ3JFLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFDdkIsY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNO1FBRXRDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsY0FBYztRQUV0RSxNQUFNLENBQUMscUJBQXFCO0lBQzlCLENBQUMsRUFBRSxDQUFDLEdBQ0osV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFQLFdBQVcsRUFBRSxJQUFJLEVBQUssQ0FBQztRQUNqRCxHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsU0FBUztRQUVqRSxXQUFXLElBQUksVUFBVTtRQUV6QixNQUFNLENBQUMsV0FBVztJQUNwQixDQUFDLEVBekJvQixVQUFjLGVBeUJsQixPQUFPLFVBekJILFVBQWM7SUEyQnpDLE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLENBQUM7U0FFZSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxHQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFQLE9BQU8sRUFBRSxJQUFJLEVBQUssQ0FBQztRQUMvQyxHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBRTdCLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtRQUV4QixNQUFNLENBQUMsT0FBTztJQUNoQixDQUFDLEVBQUUsQ0FBQztJQUFBLENBQUM7SUFFTCxNQUFNLENBQUMsT0FBTztBQUNoQixDQUFDIn0=