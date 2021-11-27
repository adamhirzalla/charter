/* eslint-disable func-style */
/* eslint-disable no-undef */
// map-id: 93b06d228f001f87
// api-key: AIzaSyA2JE3t0K1wOr-7PzidLQpqCfON6CFflA0

let map;

// eslint-disable-next-line func-style
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.421616134256915, lng: -75.69411783861774 },
    zoom: 16,
    mapId: '93b06d228f001f87',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });

  // Name
  // Lat, Lon
  // Image URL
  // ScaledSize width, height
  const markers = [
    [
      "Wild Larry!",
      45.419146108291635,
      -75.6858780922698,
      './images/icons/duck.svg',
      38,
      31
    ],
    [
      "Pokeball!",
      45.421616134256915,
      -75.69411783861774,
      './images/icons/pokeball.svg',
      38,
      31
    ],
    [
      "Poke-marker!",
      45.417173022116245,
      -75.69585591011258,
      './images/icons/poke-marker.svg',
      38,
      31
    ],
  ];

  for (const currentMarker of markers) {
    let marker = new google.maps.Marker({
      position: { lat: currentMarker[1], lng: currentMarker[2] },
      map,
      title: currentMarker[0],
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5])
      }
    });

    const infowindow = new google.maps.InfoWindow({
      content: currentMarker[0],
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }



  // marker.addListener("click", toggleBounce);
}
// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }
// 45.421616134256915, -75.69411783861774
// 45.419146108291635, -75.6858780922698
