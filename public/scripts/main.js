$(document).ready(function () {
  var script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDOP0Ldl0bxMH2NTDlWDEiyONO5rnUd8m8&callback=initMap`;
  script.async = true;

  // Attach your callback function to the `window` object
  window.initMap = function () {
    const options = {
      // latLng: { lat: -25.363, lng: 131.044 },
      htmlElement: '#map',
      mapId: '93b06d228f001f87',
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
    console.log(map);
    const mapClickListener = attachPinPlacementListener(map);

  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
});
