/* eslint-disable no-undef */

$(() => {
  $(`#submit`).on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    if (!data.lat || !data.long) {
      return;
    }
    const mapId = window.googleMarker.map.mapId;
    addPin(mapId, data);
  });

  $('#delete').on('click', (event) => {
    event.preventDefault();
    const marker = window.selectedMarker;
    const pinId = marker.pinId;
    if (pinId) {
      marker.setMap(null);
      removePin(pinId);
    }
  });
});
