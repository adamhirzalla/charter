/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/psql');

module.exports = () => {

  router.get("/user", (req, res) => {
    const user = req.session.userID;
    res.send(user);
  });

  return router;
};
