"use strict";

import CustomGrammar from "../customGrammar";
import CombinedCustomGrammar from "../customGrammar/combined";

export function combinedCustomGrammarFromJSON(json, includeDefault = true) {
  const customGrammarsJSON = json,  ///
        customGrammars = customGrammarsJSON.map((customGrammarJSON) => {
          const json = customGrammarJSON, ///
                customGrammar = CustomGrammar.fromJSON(json);

          return customGrammar;
        }),
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
