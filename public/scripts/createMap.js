/* eslint-disable no-undef */

const createMap = function(map) {
  let googleMap = new google.maps.Map(document.querySelector(`#map-${map.id}`), {
    zoom: 12,
    center: { lat: 45.42182698501992, lng: -75.69454699197138 },
    mapId: '93b06d228f001f87',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    mapID: map.id
  });
  getAllMapPins(map.id)
    .then(pins => {
      drawPins(pins, googleMap);
    });
  return googleMap;
};
