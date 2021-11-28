$(document).ready(function() {
  let script = document.createElement('script');
  // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDOP0Ldl0bxMH2NTDlWDEiyONO5rnUd8m8&callback=initMap`;
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA2JE3t0K1wOr-7PzidLQpqCfON6CFflA0&callback=initMap`;
  script.async = true;

  // Attach your callback function to the `window` object
  window.initMap = function() {
    const options = {
      // center: { lat: -25.363, lng: 131.044 },
      htmlElement: '#map',
      mapId: '93b06d228f001f87',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
      // zoom: 4,
      // restrictions: {
      //   latLngBounds: {
      //     north: 20,
      //     south: -10,
      //     east: 160,
      //     west: 100,
      //   },
      // }
      //
    };

    const map = createMap(1,options);
    const mapClickListener = placePinListener(map);

  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
});
