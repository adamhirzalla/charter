/* eslint-disable no-undef */

$(() => {
  $(`#new-map`).on('submit', function(event) {
    console.log('clicked');
    event.preventDefault();
    const data = $(this).serialize();
    console.log(data);
  });
});
