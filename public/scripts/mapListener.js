/* eslint-disable no-undef */
const mapListener = {

  attachMarker: function(map) {
    let marker = new google.maps.Marker();

    const markerListener = map.addListener("click", (event) => {
      marker.setPosition(event.latLng.toJSON());
      marker.setMap(map);
      marker.setDraggable(true);
      marker.setAnimation(google.maps.Animation.DROP);
      $('#lat').val(event.latLng.toJSON().lat)
      $('#long').val(event.latLng.toJSON().lng)
    });
    return {markerListener,marker};
  },


};
