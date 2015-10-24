'use strict';
var r = require('rethinkdb');
var connFactory = require('./dbConn');

var OK = 200;
var SERVER_ERR = 500;

var get = {
  tracker: function tracker(req, res) {
    connFactory.getConn().then(function (conn) {
      return r.table('trackerList').run(conn);
    }).then(function (cursor) {
      cursor.toArray(function (err, result) {
        if (err) {
          res.status(SERVER_ERR);
          res.send(err.message);
          return;
        }
        res.status(OK);
        res.json(result);
      });
    })['catch'](function (err) {
      res.status(SERVER_ERR);
      res.json({ err: err });
    });
  },
  trackerData: function trackerData(req, res) {
    connFactory.getConn().then(function (conn) {
      return r.table('trackerList').run(conn);
    }).then(function (cursor) {
      cursor.toArray(function (err, result) {
        if (err) {
          res.status(SERVER_ERR);
          res.send(err.message);
          return;
        }

        res.status(OK);
        res.json(result);
      });
    })['catch'](function (err) {
      res.status(SERVER_ERR);
      res.json({ err: err });
    });
  }
};

var post = {
  trackerData: function trackerData(req, res) {
    connFactory.getConn().then(function (conn) {
      return r.table('trackerList').insert([req.body]).run(conn);
    }).then(function (result) {
      res.status(OK);
      res.json(req.body);
      return;
    })['catch'](function (err) {
      res.status(SERVER_ERR);
      res.json({ err: err });
    });
  },
  tracker: function tracker(req, res) {
    connFactory.getConn().then(function (conn) {
      // TODO: Need to check for the existence of this tracker.
      // TODO: Need to make the trackers personal
      return r.table('trackerList').insert([{
        name: req.body.name,
        owner: req.body.owner,
        times: []
      }]).run(conn);
    }).then(function (result) {
      res.status(OK);
      res.json(req.body);
      return;
    })['catch'](function (err) {
      res.status(SERVER_ERR);
      res.json({ err: err });
    });
  }
};

module.exports = {
  get: get,
  post: post
};