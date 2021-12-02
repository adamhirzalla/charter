/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const query = require('../lib/psql');
const db = require('../db/queries');

module.exports = () => {
  router.get("/", (req, res) => {
    const query = `SELECT * FROM users`;
    query.query(query)
      .then(data => {
        const users = data.rows;
        res.send(users);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    db.getAllUserMaps(userId)
      .then(maps => {
        const templateVars = {
          apiKey: process.env.API_KEY,
          userId,
          maps
        };
        res.render("profile", templateVars);
      });
  });

  router.get("/:user/maps", (req, res) => {
    const user = req.params.user;
    const query = `
    SELECT maps.* FROM maps
    JOIN users ON users.id = user_id
    WHERE user_id = $1
    ;`;
    const values = [user];
    query.query(query, values)
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

  router.get("/:user/maps/:map", (req, res) => {
    const [user, map] = [req.params.user, req.params.map];
    const query = `
    SELECT maps.* FROM maps
    JOIN users ON users.id = user_id
    WHERE users.id = $1 AND maps.id = $2
    ;`;
    const values = [user, map];
    query.query(query, values)
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

  router.get("/:user/maps/:map/pins", (req, res) => {
    const [user, map] = [req.params.user, req.params.map];
    const query = `
    SELECT pins.* FROM pins
    JOIN users ON users.id = pins.user_id
    JOIN maps ON maps.id = map_id
    WHERE pins.user_id = $1 AND map_id = $2
    ;`;
    const values = [user, map];
    query.query(query, values)
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

  router.get("/:user/maps/:map/pins/:pin", (req, res) => {
    const [user, map, pin] = [req.params.user, req.params.map, req.params.pin];
    const query = `
    SELECT pins.* FROM pins
    JOIN users ON users.id = pins.user_id
    JOIN maps ON maps.id = map_id
    WHERE pins.user_id = $1 AND map_id = $2 AND pins.id = $3
    ;`;
    const values = [user, map, pin];
    query.query(query, values)
      .then(data => {
        const pin = data.rows[0];
        res.send(pin);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });







  return router;
};
