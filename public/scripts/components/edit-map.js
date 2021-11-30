/* eslint-disable no-undef */

$(() => {
  $(`#submit`).on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    const mapId = window.googleMarker.map.mapId;
    console.log(data);
    addPin(mapId, data)
      .then($('#edit-map').trigger('reset'));
  });
});
