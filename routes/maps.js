/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const db = require('../db/queries');
const router  = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    const userId = req.session.userID;
    db.getAllMaps()
      .then(maps => {
        const templateVars = {
          apiKey: process.env.API_KEY,
          userId,
          maps
        };
        res.render("home", templateVars);
      });
  });

  router.get("/create", (req, res) => {
    const userId = req.session.userID;
    const templateVars = {
      apiKey: process.env.API_KEY,
      userId
    };
    res.render("create-map", templateVars);
  });

  router.get("/:map", (req, res) => {
    const userId = req.session.userID;
    const mapId = req.params.map;

    db.getMap(mapId)
      .then(map => {
        const templateVars = {
          apiKey: process.env.API_KEY,
          userId,
          map
        };
        res.render("map", templateVars);
      });
  });



  router.get("/:map/edit", (req, res) => {
    const userId = req.session.userID;
    const mapId = req.params.map;

    db.getMap(mapId)
      .then(map => {
        const templateVars = {
          apiKey: process.env.API_KEY,
          userId,
          map
        };
        res.render("edit-map", templateVars);
      });
  });

  router.get("/:map/pins", (req, res) => {
    const mapId = req.params.map;
    db.getAllMapPins(mapId)
      .then(pins => {
        res.send(pins);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/:map/pins", (req, res)=>{
    const userId = req.session.userID;
    const mapId = req.params.map;
    db.addPin(userId, mapId, req.body);
    res.redirect(`/maps/${mapId}/edit`);
  });

  return router;
};
