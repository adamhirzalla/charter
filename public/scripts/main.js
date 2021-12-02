/* eslint-disable func-style */
/* eslint-disable no-undef */
// $(function() {


// Attach your callback function to the `window` object

function allMaps() {
  getAllMaps()
    .then(maps => {
      maps.forEach(map => createMap(map));
    })
    .catch(e => console.log(e));
}

function userMaps() {
  const userId = window.location.href.split('/').splice(-1);
  getUserMaps(userId)
    .then(maps => {
      maps.forEach(map => createMap(map));
    })
    .catch(e => console.log(e));
}

function map() {
  const mapId = $('.map-container')[0].id.split('-')[1];
  getMap(mapId)
    .then(map => {
      createMap(map);
    })
    .catch(e => console.log(e));
}

function editMap() {
  const mapId = $('.map-container')[0].id.split('-')[1];
  getMap(mapId)
    .then(map => {
      const googleMap = createMap(map);
      mark(googleMap);
    })
    .catch(e => console.log(e));
}
