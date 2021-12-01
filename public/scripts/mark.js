/* eslint-disable no-undef */

const mark = (googleMap) => {
  googleMap.addListener('click', e => addMarker(e.latLng, googleMap));
};

const addMarker = (position, map) => {
  if (!window.googleMarker) {
    window.googleMarker = new google.maps.Marker({
      map,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      icon: {
        url: $('input:checked').val(),
        scaledSize: new google.maps.Size(40, 55)
      }
    });
  }
  window.googleMarker.setIcon({
    url: $('input:checked').val(),
    scaledSize: new google.maps.Size(40, 55)
  });
  window.googleMarker.setPosition(position);
  $('#lat').val(position.toJSON().lat);
  $('#long').val(position.toJSON().lng);
};