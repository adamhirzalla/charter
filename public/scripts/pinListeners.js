const placePinListener = function(map) {
  let marker = null;

  const mapClick = map.addListener("click", (event) => {
    if (!marker) {
      console.log(event.latLng.toJSON());
      marker = new google.maps.Marker({
        position: event.latLng.toJSON(),
        map,
      });
    } else {
      marker.setPosition(event.latLng.toJSON());
    }
  });
  return mapClick;

};
