/* eslint-disable no-undef */

$(() => {
  $(`#edit-map`).on('submit', function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    const map = window.googleMarker.map.dbMap;
    const mapId = map.id;
    addPin(mapId, data)
      .then(() => {
        $(`#map-${mapId}`).empty();
        const googleMap = createMap(map);
        window.googleMarker = null;
        mark(googleMap);
      });
  });

  $(`#update`).on('click', function (event) {
    event.preventDefault();
    const pinId = window.selectedMarker.pin.id;
    const map = window.selectedMarker.map.dbMap;
    const mapId = map.id;
    const data = {
      title: $('#title').val(),
      lat: $('#lat').val(),
      long: $('#long').val(),
      description: $('#description').val(),
      img: $('#image-url').val(),
      icon: $('input:checked').val(),
    };
    updatePin(pinId, data)
      .then(() => {
        $(`#map-${mapId}`).empty();
        const googleMap = createMap(map);
        window.googleMarker = null;
        mark(googleMap);
      });
  });

  $('#delete').on('click', (event) => {
    event.preventDefault();
    const marker = window.selectedMarker;
    const pinId = marker.pin.id;
    if (pinId) {
      marker.setMap(null);
      removePin(pinId);
    }
  });

  $('#icon').on('change', (event) => {
    console.log($('#icon option:selected').val())
    if (window.googleMarker) {
      window.googleMarker.setIcon({
        url: $('#icon option:selected').val(),
        scaledSize: new google.maps.Size(40, 55)
      })
    }
    if (window.selectedMarker) {
      window.selectedMarker.setIcon({
        url: $('#icon option:selected').val(),
        scaledSize: new google.maps.Size(40, 55)
      })
    }
  })
});
