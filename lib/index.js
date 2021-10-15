"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DEFAULT_CUSTOM_GRAMMAR_NAME", {
    enumerable: true,
    get: function() {
        return _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME;
    }
});
Object.defineProperty(exports, "CustomGrammar", {
    enumerable: true,
    get: function() {
        return _customGrammar.default;
    }
});
Object.defineProperty(exports, "lexersUtilities", {
    enumerable: true,
    get: function() {
        return _lexers.default;
    }
});
Object.defineProperty(exports, "parsersUtilities", {
    enumerable: true,
    get: function() {
        return _parsers.default;
    }
});
Object.defineProperty(exports, "defaultCustomGrammar", {
    enumerable: true,
    get: function() {
        return _defaultCustomGrammar.default;
    }
});
Object.defineProperty(exports, "CombinedCustomGrammar", {
    enumerable: true,
    get: function() {
        return _combinedCustomGrammar.default;
    }
});
var _grammarNames = require("./grammarNames");
var _customGrammar = _interopRequireDefault(require("./customGrammar"));
var _lexers = _interopRequireDefault(require("./utilities/lexers"));
var _parsers = _interopRequireDefault(require("./utilities/parsers"));
var _defaultCustomGrammar = _interopRequireDefault(require("./defaultCustomGrammar"));
var _combinedCustomGrammar = _interopRequireDefault(require("./combinedCustomGrammar"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJkZWZhdWx0IiwiQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsInBhcnNlcnNVdGlsaXRpZXMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OzsrQkFFSCxDQUEyQjs7OzZCQUEzQiwyQkFBMkI7OzsrQkFFaEIsQ0FBYTs7OzhCQUF4QixPQUFPOzs7K0JBQ0ksQ0FBZTs7O3VCQUExQixPQUFPOzs7K0JBQ0ksQ0FBZ0I7Ozt3QkFBM0IsT0FBTzs7OytCQUNJLENBQW9COzs7cUNBQS9CLE9BQU87OzsrQkFDSSxDQUFxQjs7O3NDQUFoQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuL2dyYW1tYXJOYW1lc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxleGVyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9sZXhlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4vY29tYmluZWRDdXN0b21HcmFtbWFyXCI7XG4iXX0=