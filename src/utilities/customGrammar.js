"use strict";

import CustomGrammar from "../customGrammar";
import CombinedCustomGrammar from "../customGrammar/combined";

export function combinedCustomGrammarFromJSON(json, includeDefault = true) {
  const customGrammars = customGrammarsFromJSON(json),
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars, includeDefault);

  return combinedCustomGrammar;
}

export function combinedCustomGrammarFromNothing(includeDefault = true) {
  const customGrammars = [],
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars, includeDefault);

  return combinedCustomGrammar;
}

export function combinedCustomGrammarFromCustomGrammars(customGrammars, includeDefault = true) {
  const combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars, includeDefault);

  return combinedCustomGrammar;
}

export default {
  combinedCustomGrammarFromJSON,
  combinedCustomGrammarFromNothing,
  combinedCustomGrammarFromCustomGrammars
};

function customGrammarsFromJSON(json) {
  const customGrammarsJSON = json,  ///
        customGrammars = customGrammarsJSON.map((customGrammarJSON) => {
          const json = customGrammarJSON, ///
                customGrammar = CustomGrammar.fromJSON(json);

          return customGrammar;
        });

  return customGrammars;
}

