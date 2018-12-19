'use strict';

const termDefaultBNF = require('./defaultBNF/term'),
      statementDefaultBNF = require('./defaultBNF/statement'),
      expressionDefaultBNF = require('./defaultBNF/expression'),
      metastatementDefaultBNF = require('./defaultBNF/metastatement'),
      defaultBNFs = [
        termDefaultBNF,
        expressionDefaultBNF,
        statementDefaultBNF,
        metastatementDefaultBNF
      ];

return defaultBNFs;
