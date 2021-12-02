/* eslint-disable camelcase */
const db = require('../lib/psql');

const getUser = (userId) => {
  const query = `
  SELECT * FROM users WHERE id = $1;
  `;
  const values = [userId];
  return db
    .query(query, values)
    .then(data => data.rows[0])
    .catch(err => console.log(err.message));
};

const getAllMaps = (options = {}, limit = 5) => {
  let {id, user_id, title, description, is_public} = options;
  let query = `SELECT * FROM maps `;
  const values = [];

  if (title) {
    values.push(`%${title}%`);
    query += `WHERE LOWER(title) LIKE LOWER($${values.length}) `;
  }

  return db
    .query(query, values)
    .then(data => data.rows)
    .catch(err => console.log(err.message));
};

/* const getAllPubUserMaps = (userId, options, limit = 5) => {
  const query = `
    SELECT maps.* FROM maps
    JOIN users ON users.id = user_id
    WHERE user_id = $1 AND is_public;
    `;
  const values = [userId];
  return db
    .query(query, values)
    .then(data => data.rows)
    .catch(err => console.log(err.message));
}; */

const getAllUserMaps = (userId, options, limit = 5) => {
  const query = `
    SELECT maps.* FROM maps
    JOIN users ON users.id = user_id
    WHERE user_id = $1;
    `;
  const values = [userId];
  return db
    .query(query, values)
    .then(data => data.rows)
    .catch(err => console.log(err.message));
};

const getMap = (mapId, options) => {
  const query = `SELECT * FROM maps WHERE id = $1;`;
  const values = [mapId];
  return db
    .query(query, values)
    .then(data => data.rows[0])
    .catch(err => console.log(err.message));
};


const getAllMapPins = (mapId, options) => {
  const query = `
    SELECT pins.* FROM pins
    JOIN maps ON maps.id = map_id
    WHERE map_id = $1;
    `;
  const values = [mapId];
  return db
    .query(query, values)
    .then(data => data.rows)
    .catch(err => console.log(err.message));
};

const addPin = (userId, mapId, data) => {
  const { title, lat, long, icon, description } = data;
  const values = [mapId, userId, title, lat, long, icon, description];
  const query = `
    INSERT INTO pins (map_id, user_id, title, lat, long, icon, description)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
  return db
    .query(query, values)
    .then(data => data.rows[0])
    .catch(err => console.log(err.message));
};

const updatePin = (pinId, data) => {
  const { title, lat, long, icon, description, img } = data;
  const values = [pinId, title, lat, long, icon, description, img];
  const query = `
  UPDATE pins
  SET
  title = $2, lat = $3, long = $4, icon = $5, description = $6, img = $7
  WHERE id = $1 RETURNING *`;
  return db
    .query(query, values)
    .then(data => data.rows[0])
    .catch(err => console.log(err.message));
};

const removePin = (pinId) => {
  const query = `DELETE FROM pins WHERE id = $1`;
  const values = [pinId];
  return db
    .query(query, values)
    .catch(err => console.log(err.message));
};

const addMap = (data) => {
  const { userId, title, description, visibility, theme } = data;
  const query = `
  INSERT INTO maps (user_id, title, description, is_public, theme)
  VALUES
  ($1, $2, $3, $4, $5)
  RETURNING id;
  `;
  const values = [userId, title, description, visibility, theme];
  return db
    .query(query, values)
    .then(data => data.rows[0].id)
    .catch(err => console.log(err.message));
};

const getFavMaps = (userId) => {
  const query = `
  SELECT * FROM maps
  WHERE id IN (SELECT (map_id) FROM favorites
  WHERE favorites.user_id = $1) ORDER BY id
 `;
  const values = [userId];
  return db
    .query(query, values)
    .then(data => data.rows)
    .catch(err => console.log(err.message));
};

const removeFav = (userId, mapId) => {
  const query = `
  DELETE FROM favorites
  WHERE user_id = $1 AND map_id = $2`;
  const values = [userId, mapId];
  return db
    .query(query, values)
    .catch(err => console.log(err.message));
};

const addFav = (userId, mapId) => {
  const query = `
  INSERT INTO favorites
  (user_id, map_id, title)
  VALUES ($1, $2, $3)`;
  const values = [userId, mapId, 'Sample fav name'];
  return db
    .query(query, values)
    .catch(err => console.log(err.message));
};

const getContMaps = (userId) => {
  const query = `
  SELECT * FROM maps
  WHERE id IN (SELECT DISTINCT (map_id) FROM pins
  WHERE pins.user_id = $1) ORDER BY id
 `;
  const values = [userId];
  return db
    .query(query, values)
    .then(data => data.rows)
    .catch(err => console.log(err.message));
};

module.exports = {
  getAllMaps,
  getAllUserMaps,
  getAllMapPins,
  getMap,
  addPin,
  updatePin,
  removePin,
  addMap,
  getUser,
  getFavMaps,
  removeFav,
  addFav,
  getContMaps,

};
