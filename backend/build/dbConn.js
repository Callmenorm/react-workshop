'use strict';
var r = require('rethinkdb');
var getConn = function getConn() {
  return r.connect({ host: 'localhost', port: 28015, db: 'trackers' });
};

module.exports = {
  getConn: getConn
};