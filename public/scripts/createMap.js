/* eslint-disable no-undef */
const createMap = function(map, options) {
  let googleMap;
  options = options || {};
  let { zoom, mapId, center } = options;
  const dbMapId = map.id;
  googleMap = new google.maps.Map(document.querySelector(`#map-${dbMapId}`), {
    zoom: zoom || 12,
    center: center || { lat: 45.42182698501992, lng: -75.69454699197138 },
    mapId: mapId || '93b06d228f001f87',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });
  getAllMapPins(dbMapId)
    .then(pins => {
      drawPins(pins, googleMap);
    });
  //run drawPins(map, mapId) will query select all nesscary pins to the supplied map
  //object
  return googleMap;
};
