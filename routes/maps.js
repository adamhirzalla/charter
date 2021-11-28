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
  router.get("/", (req, res) => {
    const query = `SELECT * FROM maps`;
    db.query(query)
      .then(data => {
        const maps = data.rows;
        res.json({ maps });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:map", (req, res) => {
    const mapId = req.params.map;
    const query = `SELECT * FROM maps WHERE id = $1`;
    const values = [mapId];
    db.query(query, values)
      .then(data => {
        const map = data.rows[0];
        res.json({ map });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // just testing
  router.post("/", (req, res) => {
    const user = req.session.userID;
    res.send(user);
  });

  return router;
};
