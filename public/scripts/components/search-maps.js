/* eslint-disable no-undef */
// will rename to ready.js
$(() => {
  $('#search-maps').on('submit', function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    getAllMaps(data)
      .then(maps => {
        $('#maps').empty();
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
        }
      });
  });
  getUser()
    .then((user) => {
      $('#dropdownMenuLink').html(user.name);
      // $('.fav').addClass('text-dark bg-danger')
      getFavMaps(user.id)
        .then(favMaps => {
          for (const favMap of favMaps) {
            $(`#fav-${favMap.map_id}`).addClass('bg-danger');
          }
        })
    })
    .catch(e => console.log(e));

  $('.fav').on('click', (event) => {
    const elementId = event.currentTarget.id;
    const $fav = $(`#${elementId}`);
    const mapId =elementId.split('-')[1];
    if ($fav.hasClass('bg-danger')) {
      //api/favs/delete
      $fav.addClass('bg-white');
      $fav.removeClass('bg-danger');
    }
    else {
      // insertFavs()
      $fav.removeClass('bg-white');
      $fav.addClass('bg-danger');
    }
  })
});
