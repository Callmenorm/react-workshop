'use strict'
let r = require('rethinkdb')
let connFactory = require('./dbConn')

const OK = 200
const SERVER_ERR = 500

let get = {
  tracker (req, res) {
    connFactory.getConn()
      .then((conn) => {
        return r.table('trackerList').run(conn)
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
        res.status(SERVER_ERR)
        res.json({err})
      })
  },
  trackerData (req, res) {
    connFactory.getConn()
      .then(conn => {
        return r.table('trackerList').run(conn)
      })
      .then(cursor => {
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
        res.status(SERVER_ERR)
        res.json({err})
      })
  }
}

let post = {
  trackerData (req, res) {
    connFactory.getConn()
      .then((conn) => {
        return r.table('trackerList')
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
  },
  tracker (req, res) {
    connFactory.getConn()
      .then(conn => {
        // TODO: Need to check for the existence of this tracker.
        // TODO: Need to make the trackers personal
        return r.table('trackerList')
          .insert([
            {
              name: req.body.name,
              owner: req.body.owner,
              times: []
            }
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
