/* eslint-disable no-undef */

$(() => {

  getUser()
    .then((user) => {
      $('#dropdownMenuLink').html(user.name);
      getFavMaps(user.id)
        .then(favMaps => {
          for (const favMap of favMaps) {
            $(`#fav-${favMap.id}`).removeClass('btn-dark');
            $(`#fav-${favMap.id}`).addClass('btn-danger');
          }
        });
    })
    .catch(e => console.log(e));

  $('.fav').on('click', (event) => {
    event.preventDefault();
    const elementId = event.currentTarget.id;
    const $fav = $(`#${elementId}`);
    const mapId = elementId.split('-')[1];
    if ($fav.hasClass('btn-danger')) {
      removeFav(mapId);
      $fav.removeClass('btn-danger');
      $fav.addClass('btn-dark');
    } else {
      addFav(mapId);
      $fav.removeClass('btn-dark');
      $fav.addClass('btn-danger');
    }
  });

  $('.prof').on('click', (event) => {
    event.preventDefault();
    const elementId = event.currentTarget.id;
    const userId = elementId.split('-')[1];
    window.location.href = `users/${userId}`;
  });

});
