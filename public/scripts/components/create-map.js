/* eslint-disable no-undef */

$(() => {
  $(`#new-map`).on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    addMap(data);
  });
});
