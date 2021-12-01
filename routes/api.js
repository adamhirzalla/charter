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

  router.get("/me", (req, res) => {
    const userId = req.session.userID;
    db.getUser(userId)
      .then(user => res.send(user));
  });

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

  router.get("/getMap/:mapId", (req, res) => {
    const mapId = req.params.mapId;
    db.getMap(mapId)
      .then(map => res.send(map));
  });

  router.get("/favMaps/:userId", (req, res) => {
    const userId = req.params.userId;
    db.getFavMaps(userId)
      .then(maps => res.send(maps));
  });

  return router;
};
