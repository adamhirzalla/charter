/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const db = require('../lib/psql');
const router  = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    const query = `SELECT * FROM maps`;
    db.query(query)
      .then(data => {
        const maps = data.rows;
        res.send(maps);
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
        res.send(map);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:map/pins", (req, res) => {
    const mapId = req.params.map;
    const query = `
    SELECT pins.* FROM pins
    JOIN maps ON maps.id = map_id
    WHERE map_id = $1`;
    const values = [mapId];
    db.query(query, values)
      .then(data => {
        const pins = data.rows;
        res.send(pins);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
