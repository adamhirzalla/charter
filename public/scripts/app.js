/* eslint-disable func-style */
/* eslint-disable no-undef */
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

  marker = new google.maps.Marker({
    position: { lat: 45.419146108291635, lng: -75.6858780922698 },
    map,
    title: "Wild Larry!",
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon: {
      url: './images/icons/duck.svg',
      scaledSize: new google.maps.Size(38, 31)
    }
  });

  const infowindow = new google.maps.InfoWindow({
    content: 'Wild Larry!',
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

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
// map-id: 93b06d228f001f87
// api-key: AIzaSyA2JE3t0K1wOr-7PzidLQpqCfON6CFflA0
