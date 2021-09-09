"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPartRuleNamePart = isPartRuleNamePart;
var _occamParsers = require("occam-parsers");
var RuleNamePartType = _occamParsers.partTypes.RuleNamePartType;
function isPartRuleNamePart(part) {
    var partRuleNamePart = false;
    var partTerminalPart = part.isTerminalPart(), partNonTerminalPart = !partTerminalPart; ///
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType(), typeRuleNamePartType = type === RuleNamePartType;
        partRuleNamePart = typeRuleNamePartType; ///
    }
    return partRuleNamePart;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJuYW1lcyI6WyJwYXJ0VHlwZXMiLCJSdWxlTmFtZVBhcnRUeXBlIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0IiwicGFydCIsInBhcnRSdWxlTmFtZVBhcnQiLCJwYXJ0VGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJ0eXBlUnVsZU5hbWVQYXJ0VHlwZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQU1JLGtCQUFrQixHQUFsQixrQkFBa0I7QUFKUixHQUFlLENBQWYsYUFBZTtBQUV6QyxHQUFLLENBQUcsZ0JBQWdCLEdBRkUsYUFBZSxXQUVqQyxnQkFBZ0I7U0FFUixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztJQUU1QixHQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFDdEMsbUJBQW1CLElBQUksZ0JBQWdCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRW5ELEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLEdBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxFQUN0QixJQUFJLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFDOUIsb0JBQW9CLEdBQUksSUFBSSxLQUFLLGdCQUFnQjtRQUV2RCxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0I7QUFDekIsQ0FBQyJ9