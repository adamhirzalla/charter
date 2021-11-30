// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const cookieSession = require('cookie-session');
const express = require("express");
const morgan = require("morgan");
const db = require("./db/queries");
const app = express();


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(cookieSession({
  name: 'session',
  keys: ['Larry', 'Rocks'],
  maxAge: 12 * 60 * 60 * 1000, // expires after 12 hrs
}));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const mapsRoutes = require("./routes/maps");
const pinsRoutes = require("./routes/pins");
const apiRoutes = require("./routes/api");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/users", usersRoutes());
app.use("/maps", mapsRoutes());
app.use("/pins", pinsRoutes());
app.use("/api", apiRoutes());
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


app.get("/", (req, res) => {
  res.redirect('/maps');
});

app.get("/profile", (req, res) => {
  const userId = req.session.userID;
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


app.get('/login/:id', (req, res) => {
  const user = req.params.id;
  req.session.userID = user;
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.userID = null;
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
