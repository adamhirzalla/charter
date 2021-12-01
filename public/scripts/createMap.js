/* eslint-disable no-undef */


const createMap = function(map) {
  const theme = getTheme(map.theme);
  if ($(`#map-${map.id}`).length) {
    let googleMap = new google.maps.Map(document.querySelector(`#map-${map.id}`), {
      zoom: 12,
      center: { lat: 45.42182698501992, lng: -75.69454699197138 },
      mapId: theme,
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
  }
};

const getTheme = (theme) => {
  switch (theme) {
  case 'pokemon':
    return '93b06d228f001f87';
  case 'default':
    return null;
  }
};
