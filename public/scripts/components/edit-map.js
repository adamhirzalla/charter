/* eslint-disable no-undef */

$(() => {
  $(`#edit-map`).on('submit', function(event) {
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

  $(`#update`).on('click', function(event) {
    event.preventDefault();
    const pinId = window.selectedMarker.pin.id;
    const map = window.selectedMarker.map.dbMap;
    const mapId = map.id;
    const data = $('#edit-map').serialize();
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
});
