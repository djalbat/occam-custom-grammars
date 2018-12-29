'use strict';

const easy = require('easy');

const { InputElement } = easy;

class FlorenceLexicalEntriesTextarea extends InputElement {
  setFlorenceLexicalEntries(florenceLexicalEntries) {
    const value = JSON.stringify(florenceLexicalEntries, null, '  ');  ///

    this.setValue(value);
  }

  parentContext() {
    const setFlorenceLexicalEntries = this.setFlorenceLexicalEntries.bind(this);

    return ({
      setFlorenceLexicalEntries
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(FlorenceLexicalEntriesTextarea, properties); }
}

Object.assign(FlorenceLexicalEntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'florence-lexical-entries',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = FlorenceLexicalEntriesTextarea;
