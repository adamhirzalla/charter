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

  router.get("/user", (req, res) => {
    const userId = req.session.userID;
    db.getUser(userId)
      .then(user => res.send(user));
  });

  router.get("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    db.getUser(userId)
      .then(user => res.send(user));
  });

  router.get("/userId", (req, res) => {
    const user = req.session.userID;
    res.send(user);
  });

  router.get("/allUserMaps/:userId", (req, res) => {
    const userId = req.params.userId;
    db.getAllUserMaps(userId)
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

  router.post("/favs/delete", (req, res) => {
    const userId = req.session.userID;
    const mapId = req.body.mapId;
    db.removeFav(userId, mapId);
    res.status(200);
  });

  router.post("/favs", (req, res) => {
    const userId = req.session.userID;
    const mapId = req.body.mapId;
    db.addFav(userId, mapId);
    res.status(200);
  });

  router.get("/contMaps/:userId", (req, res) => {
    const userId = req.params.userId;
    db.getContMaps(userId)
      .then(maps => res.send(maps));
  });

  return router;
};
