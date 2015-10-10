'use strict'
let r = require('rethinkdb')
let connFactory = require('./dbConn')

const OK = 200
const SERVER_ERR = 500

let get = {
  id (req, res) {
    connFactory.getConn()
      .then((conn) => {
        return r.table('tv_shows').run(conn)
      })
      .then((cursor) => {
        cursor.toArray((err, result) => {
          if (err) {
            res.status(SERVER_ERR)
            res.send(err.message)
            return
          }
          res.status(OK)
          res.json(result)
        })
      })
      .catch(err => {
        console.log(err)
        res.status(SERVER_ERR)
        res.json({err})
      })
  }
}

let post = {
  id (req, res) {
    connFactory.getConn()
    .then((conn) => {
      return r.table('tv_shows')
        .insert([
          req.body
        ])
        .run(conn)
    })
    .then(result => {
      res.status(OK)
      res.json(req.body)
      return
    })
    .catch(err => {
      res.status(SERVER_ERR)
      res.json({err})
    })
  }
}

module.exports = {
  get: get,
  post: post
}
