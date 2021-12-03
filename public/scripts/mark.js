/* eslint-disable no-undef */

const mark = (googleMap) => {
  googleMap.addListener('click', e => addMarker(e.latLng, googleMap));
};

const addMarker = (position, map) => {
  if (!window.googleMarker) {
    $('#edit-map')[0].reset();
    if (window.lastInfoWindow) {
      window.lastInfoWindow.close();
      window.selectedMarker = null;
    }

    window.googleMarker = new google.maps.Marker({
      map,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      icon: {
        url: $(`#icon`).val(),
        scaledSize: new google.maps.Size(40, 55)
      },
    });
    window.googleMarker.addListener("drag", (event) => {
      $('#lat').val(Math.round(window.googleMarker.getPosition().toJSON().lat * 10000) / 10000);
      $('#long').val(Math.round(window.googleMarker.getPosition().toJSON().lng * 10000) / 10000);
    });
  }
  if ($(`#icon`).val() !== 'default') {
    window.googleMarker.setIcon({
      url: $(`#icon`).val(),
      scaledSize: new google.maps.Size(40, 55)
    });
  }
  window.googleMarker.setPosition(position);
  $('#lat').val(Math.round(position.toJSON().lat * 10000) / 10000);
  $('#long').val(Math.round(position.toJSON().lng * 10000) / 10000);
};
