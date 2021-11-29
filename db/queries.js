const db = require('../lib/psql');

const getAllMaps = (options, limit = 5) => {
  const query = `
  SELECT * FROM maps
  ;`;
  // const params = [email.toLowerCase(), email.toUpperCase()];
  return db
    .query(query)
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

// const getAllUserMaps = (userId, options, limit = 5) => {
//   const query = `
//   SELECT *
//   FROM users
//   WHERE email IN ($1, $2)
//   ;`;
//   const params = [email.toLowerCase(), email.toUpperCase()];
//   return db.query(query, params)
//     .then(result => result.rows.length > 0 ? result.rows[0] : null)
//     .catch(err => console.log(err.message));
// }

// const getAllMaps = (options, limit = 5) => {
//   const query = `
//   SELECT *
//   FROM users
//   WHERE email IN ($1, $2)
//   ;`;
//   const params = [email.toLowerCase(), email.toUpperCase()];
//   return db.query(query, params)
//     .then(result => result.rows.length > 0 ? result.rows[0] : null)
//     .catch(err => console.log(err.message));
// }

// const getAllMaps = (options, limit = 5) => {
//   const query = `
//   SELECT *
//   FROM users
//   WHERE email IN ($1, $2)
//   ;`;
//   const params = [email.toLowerCase(), email.toUpperCase()];
//   return db.query(query, params)
//     .then(result => result.rows.length > 0 ? result.rows[0] : null)
//     .catch(err => console.log(err.message));
// }

module.exports = {
  getAllMaps,
  getAllUserMaps,

};
