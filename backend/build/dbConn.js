'use strict';
var r = require('rethinkdb');
var getConn = function getConn() {
  return r.connect({ host: 'localhost', port: 28015, db: 'test' });
};

module.exports = {
  getConn: getConn
};