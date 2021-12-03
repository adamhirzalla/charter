/* eslint-disable no-undef */


const createMap = function(map) {
  const theme = getTheme(map.theme);
  if ($(`#map-${map.id}`).length) {
    let googleMap = new google.maps.Map(document.querySelector(`#map-${map.id}`), {
      zoom: 13,
      center: { lat: 45.42182698501992, lng: -75.69454699197138 },
      mapId: theme,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      dbMapId: map.id,
      dbMap: map
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
  case 'black&white':
    return '33688789b1c87913';
  case 'night-vision':
    return '75f5b64bea7bed20';
  case 'neutral-blue':
    return 'eb5451a5ec082b39';
  case 'light-colliers':
    return '45f2c1406dba1f26';
  case 'dark':
    return '4a9b7b94db58c972';
  case 'blue-water':
    return '1018eed72aa03c31';
  case 'avocado':
    return '9ce636bb6636338f';
  case 'assassins-creed':
    return 'e762da3c9d3b47b6';
  case 'default':
    return null;
  }
};
