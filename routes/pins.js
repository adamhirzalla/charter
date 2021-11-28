/*
 * All routes for pins are defined here
 * Since this file is loaded in server.js into api/pins,
 *   these routes are mounted onto /pins
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/psql');

module.exports = () => {
  router.get("/", (req, res) => {
    const query = `SELECT * FROM pins`;
    db.query(query)
      .then(data => {
        const pins = data.rows;
        res.json({ pins });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:pin", (req, res) => {
    const pinId = req.params.pin;
    const query = `SELECT * FROM pins WHERE id = $1`;
    const values = [pinId];
    db.query(query, values)
      .then(data => {
        const pin = data.rows[0];
        res.json({ pin });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
