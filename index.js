'use strict';

module.exports = {
  name: 'ember-cli-numeraljs',

  included (app) {
    this._super (...arguments);

    app.import ('node_modules/numeral/min/numeral.min.js');
  }
};
