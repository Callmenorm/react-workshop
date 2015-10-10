'use strict'
let r = require('rethinkdb')
const getConn = () => r.connect({host: 'localhost', port: 28015, db: 'test'})

module.exports = {
  getConn: getConn
}
