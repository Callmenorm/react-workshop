'use strict';
var r = require('rethinkdb');
var connFactory = require('./dbConn');

var OK = 200;
var SERVER_ERR = 500;

var get = {
  id: function id(req, res) {
    connFactory.getConn().then(function (conn) {
      return r.table('tv_shows').run(conn);
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
      console.log(err);
      res.status(SERVER_ERR);
      res.json({ err: err });
    });
  }
};

var post = {
  id: function id(req, res) {
    connFactory.getConn().then(function (conn) {
      return r.table('tv_shows').insert([req.body]).run(conn);
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