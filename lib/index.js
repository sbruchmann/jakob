'use strict';
const merge = require('merge-deep');

class Jakob {
  constructor(config = {}) {
    this.config = merge({}, require('./default-config'), config);
  }
}

module.exports = Jakob;
