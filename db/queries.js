/* eslint-disable camelcase */
const db = require('../lib/psql');

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
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};

const getAllUserMaps = (userId, options, limit = 5) => {
  const query = `
    SELECT maps.* FROM maps
    JOIN users ON users.id = user_id
    WHERE user_id = $1
    ;`;
  const values = [userId];
  return db
    .query(query, values)
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};

const getMap = (userId, mapId, options) => {
  const query = `
    SELECT maps.* FROM maps
    JOIN users ON users.id = user_id
    WHERE user_id = $1 AND maps.id = $2
    ;`;
  const values = [userId, mapId];
  return db
    .query(query, values)
    .then(result => result.rows[0])
    .catch(err => console.log(err.message));
};


const getAllMapPins = (mapId, options) => {
  const query = `
    SELECT pins.* FROM pins
    JOIN maps ON maps.id = map_id
    WHERE map_id = $1
    ;`;
  const values = [mapId];
  return db
    .query(query, values)
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};


module.exports = {
  getAllMaps,
  getAllUserMaps,
  getAllMapPins,
  getMap,

};
