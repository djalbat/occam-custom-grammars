'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const MainVerticalSplitter = require('./verticalSplitter/main');

const { Element } = easy,
      { SizeableElement } = easyLayout;

class View extends Element {
  childElements(properties) {
    return (

      <div className="columns">
        <SizeableElement>
          blah
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          blah
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();
  }

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
