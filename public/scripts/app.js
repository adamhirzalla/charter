/* eslint-disable no-undef */

$(() => {
  const hrefId = window.location.href.split('/').splice(-1);
  getUser(hrefId)
    .then((user) => {
      $('#username').html(user.name);
    })
    .catch(e => console.log(e));

  getContMaps(hrefId)
    .then(contMaps => {
      $('#contCount').html(contMaps.length);
    });

  getFavMaps(hrefId)
    .then(favMaps => {
      $('#favCount').html(favMaps.length);
    });

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

  $('#owned').on('click', (event) => {
    event.preventDefault();
    getUserMaps(hrefId)
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
          $('#maps').append($mapContainer);
          createMap(map);
        }
      });
  });

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

  $('#favs').on('click', function(event) {
    event.preventDefault();
    getFavMaps(hrefId)
      .then(favMaps => {
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

  $('#cont').on('click', function(event) {
    event.preventDefault();
    getContMaps(hrefId)
      .then(contMaps => {
        $('#maps').empty();
        for (const contMap of contMaps) {
          const $mapContainer = $(`
          <div class="card map-card" >
            <div id="map-${contMap.id}" class="map-container">

            </div>
            <a style="text-decoration: none;" href="/maps/${contMap.id}">
            <div class="card-body text-dark">
              <h5 class="card-title">${contMap.title}</h5>
              <p class="card-text">${contMap.description}</p>
            </div>
            </a>
          </div>`
          );
          $('#maps').append($mapContainer);
          createMap(contMap);
        }
      });
  });
});
