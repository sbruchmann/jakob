'use strict';

class Jakob {
  constructor(config = {}) {
    this.config = Object.assign({}, require('./default-config'), config);
  }
}

module.exports = Jakob;
