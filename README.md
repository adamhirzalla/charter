<!-- TITLE -->
<div align="center">
<img src="docs/images/charter.png" width="100" />
<h1>Charter</h1>
<p>A collaborate app to share maps and points of interest with others.</p>

<p>Built with 
<a href="https://nodejs.org/en/">Node.js</a>, 
<a href="https://expressjs.com/">Express</a>, 
<a href="https://getbootstrap.com/">Bootstrap 5.1</a>, 
<a href="https://jquery.com/">JQuery</a>,
<a href="https://ejs.co/">EJS</a>,
<a href="https://www.postgresql.org/">PostgreSQL</a>, 
CSS/
<a href="https://sass-lang.com/">SASS</a>, 
and hosted with 
<a href="https://www.heroku.com/">Heroku</a></p>

<b><a href="https://charter-map.herokuapp.com/" target="_blank">
» View Live Demo «
</a></b>

</div>

## 📚 Introduction

<b>[Charter](https://charter-map.herokuapp.com/)</b> is a full-stack application that allows users to create maps and pin different points of interests on the area to share them around.

With millions of people staying indoors due to the pandemic, it's become harder for everyone to go around and find new interesting places. This is where Charter comes in and helps people recommend their favorite spots around the city, and provide their reviews on feedback on the spots. This makes it easier for people to simply search for spots near them and share them around.

### 🤝 **Collaborators**:

- Adam Hirzalla ([**@adamhirzalla**](https://github.com/adamhirzalla)) - _Back-end, database architecture & API_
- Joseph Micla ([**@JoeMics**](https://github.com/JoeMics)) - _Front-end, Bootstrap UI/UX_
- Leon Zhou ([**@LeonXZhou**](https://github.com/LeonXZhou)) - _GoogleMaps API Research_

> This app was created as part of our midterm project for Lighthouse Labs - Web Development Bootcamp. The goal was to create a full-stack application from start to finish in just one week.

## ⚛️ Stack and Tools

- <b>Frontend</b>:
  <a href="https://getbootstrap.com/">Bootstrap 5.1</a>,
  CSS/<a href="https://sass-lang.com/">SASS</a>,
  <a href="https://jquery.com/">JQuery</a>,
  <a href="https://ejs.co/">EJS</a>
- <b>Backend</b>:
  <a href="https://nodejs.org/en/">Node.js</a>,
  <a href="https://expressjs.com/">Express</a>,
  <a href="https://www.postgresql.org/">PostgreSQL</a>
- <b>Deployment</b>:
  <a href="https://www.heroku.com/">Heroku</a>

## ⭐ Features

- Create your own sharable map
- Add/edit/delete pins to an existing map
- Favorite different maps to save them on your profile
- Collaborate with different users on the same map
- Customize your maps/pins

## ✨ Special Features:

- Search for different maps by title or description
- View users' profiles along with their maps/contributions/favorites
- Customize your maps and pins by choosing different themes
- Include pin information such as description and images to be viewed by other users

## 🛠 Installation

The project is live
<b><a href="https://charter-map.herokuapp.com/" target="_blank">here</a></b>, but if you would prefer a local installation:

1. Clone or download this repository
   ```
   git clone https://github.com/adamhirzalla/charter
   ```
2. Create a `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the `.env` file with your correct local psql information
   - username: `labber`
   - password: `labber`
   - database: `midterm`
4. Navigate to the project directory and install dependencies `cd charter && npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
   > Check the db folder to see what gets created and seeded
7. Run the development server: `npm run local`
   > Nodemon is used, so you should not have to restart your server
8. Visit <a href="http://localhost:8080/">http://localhost:8000/</a> on your browser

## 📷 Screenshots

<img src="./docs/images/home.png" alt="Home" />
<img src="./docs/images/single-map.png" alt="Map View" />
<img src="./docs/images/edit-pin.png" alt="Edit Pin" />
<img src="./docs/images/profile-page.png" alt="Profile" />

## ✔ Dependencies

- [Node 10.x or above](https://nodejs.org/en/)
- [Express 4.x or above](https://expressjs.com/)
- [NPM 5.x or above](https://docs.npmjs.com/)
- [PG 8.5 or above](https://node-postgres.com/)
- [Cookie Session 1.4 or above](https://www.npmjs.com/package/cookie-session)
- [Chalk 2.4 or above](https://www.npmjs.com/package/chalk)
- [Morgan 1.9 or above](https://www.npmjs.com/package/morgan)
- [Dotenv 2.0 or above](https://www.npmjs.com/package/dotenv)
- [jQuery 3.6 or above](https://jquery.com/)
- [EJS 2.6 or above](https://ejs.co/)
- [Sass 1.3 or above](https://sass-lang.com/)
- [Bootstrap 5.1](https://getbootstrap.com/)

## 🧾 Resources

- [Unsplash](https://unsplash.com/)
- [Flaticon](https://www.flaticon.com/)
- [Font Awesome](https://fontawesome.com/)
- [SVG Repo](https://www.svgrepo.com/)
