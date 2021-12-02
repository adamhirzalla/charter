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

  $('#favs').on('click', function(event) {
    event.preventDefault();
    const userId = window.location.href.split('/').splice(-1);
    getFavMaps(userId)
      .then(favMaps => {
        console.log(favMaps);
        $('#maps').empty();
        for (const favMap of favMaps) {
          const $mapContainer = $(`
          <div class="card map-card" >
            <div id="map-${favMap.id}" class="map-container">

            </div>
            <a style="text-decoration: none;" href="/maps/${favMap.id}">
            <div class="card-body text-dark">
              <h5 class="card-title">${favMap.title}</h5>
              <p class="card-text">${favMap.description}</p>
            </div>
            </a>
          </div>`
          );
          $('#maps').append($mapContainer);
          createMap(favMap);
        }
      });
  });
});

/* $('#maps').empty();
for (const map of maps) {
  const $mapContainer = $(`
  <div class="card map-card" >
    <div id="map-${map.id}" class="map-container">

    </div>
    <a style="text-decoration: none;" href="/maps/${map.id}">
    <div class="card-body text-dark">
      <h5 class="card-title">${map.title}</h5>
      <p class="card-text">${map.description}</p>
    </div>
    </a>
  </div>`
  );
  getUserId()
    .then(userId => {
      if (map.is_public || Number(userId) === map.user_id) {
        $('#maps').append($mapContainer);
        createMap(map);
      }
    });
} */
