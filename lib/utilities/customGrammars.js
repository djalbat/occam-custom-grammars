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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3VzdG9tR3JhbW1hcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhpY2FsUGF0dGVybnNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgbGV4aWNhbFBhdHRlcm5zID0gW107XG5cbiAgY3VzdG9tR3JhbW1hcnMuZm9yRWFjaCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgaWYgKGxleGljYWxQYXR0ZXJuKSB7IC8vL1xuICAgICAgbGV4aWNhbFBhdHRlcm5zLnB1c2gobGV4aWNhbFBhdHRlcm4pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxleGljYWxQYXR0ZXJucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJuZnNGcm9tUnVsZU5hbWVBbmRDdXN0b21HcmFtbWFycyhydWxlTmFtZSwgY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgYm5mcyA9IFtdO1xuXG4gIGN1c3RvbUdyYW1tYXJzLmZvckVhY2goKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSk7XG5cbiAgICBpZiAoYm5mKSB7ICAvLy9cbiAgICAgIGJuZnMucHVzaChibmYpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGJuZnM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLGlDQUFpQyxHQUFqQyxpQ0FBaUM7UUFjakMsaUNBQWlDLEdBQWpDLGlDQUFpQztTQWRqQyxpQ0FBaUMsQ0FBQyxjQUFjO1FBQ3hELGVBQWU7QUFFckIsa0JBQWMsQ0FBQyxPQUFPLFVBQUUsYUFBYTtZQUM3QixjQUFjLEdBQUcsYUFBYSxDQUFDLGlCQUFpQjtZQUVsRCxjQUFjO0FBQ2hCLDJCQUFlLENBQUMsSUFBSSxDQUFDLGNBQWM7OztXQUloQyxlQUFlOztTQUdSLGlDQUFpQyxDQUFDLFFBQVEsRUFBRSxjQUFjO1FBQ2xFLElBQUk7QUFFVixrQkFBYyxDQUFDLE9BQU8sVUFBRSxhQUFhO1lBQzdCLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFFckMsR0FBRztBQUNMLGdCQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztXQUlWLElBQUkifQ==