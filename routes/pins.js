/*
 * All routes for pins are defined here
 * Since this file is loaded in server.js into api/pins,
 *   these routes are mounted onto /pins
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const db = require('../lib/psql');
const router  = express.Router();
const bodyParser    = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));

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

  router.post("/",(req,res)=>{
    const user = req.session.userID;
    console.log(user);
    console.log(req.body);
    values = [req.body.mapId,req.session.userID,req.body.lat,req.body.long,req.body.icon,req.body.description];
    console.log(values);
    const query = `INSERT INTO pins(map_id,user_id,lat,long,icon,description)
    VALUES ($1,$2,$3,$4,$5,$6)`;
    db.query(query,values)
    res.redirect(`//localhost:8080/edit/${req.body.mapId}`)
  })

  return router;
};
