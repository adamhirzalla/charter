/* eslint-disable no-undef */
const placeMarker = (map) => {
  let marker = null;

  const mapClick = map.addListener("click", (event) => {
    if (!marker) {
      marker = new google.maps.Marker({
        position: event.latLng.toJSON(),
        map,
        draggable: true,
        animation: google.maps.Animation.DROP
      });
    } else {
      marker.setPosition(event.latLng.toJSON());
    }
  });
  return mapClick;

};
