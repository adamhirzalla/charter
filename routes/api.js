/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require("../db/queries");

module.exports = () => {

  router.get("/userId", (req, res) => {
    const user = req.session.userID;
    res.send(user);
  });

  router.get("/allUserMaps", (req, res) => {
    const user = req.session.userID;
    db.getAllUserMaps(user)
      .then(maps => res.send(maps));
  });

  router.get("/allMaps", (req, res) => {
    db.getAllMaps(req.query)
      .then(maps => res.send(maps));
  });

  router.get("/userMap/:mapId", (req, res) => {
    const userId = req.session.userID;
    const mapId = req.params.mapId;
    db.getMap(userId, mapId)
      .then(map => res.send(map));
  });



  return router;
};
