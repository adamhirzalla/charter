/* eslint-disable no-undef */

$(() => {
  const hrefId = window.location.href.split('/').splice(-1);
  getUser(hrefId)
    .then((user) => {
      $('#username').html(user.name);
    });

  getContMaps(hrefId)
    .then(contMaps => {
      $('#contCount').html(contMaps.length);
    });

  getFavMaps(hrefId)
    .then(favMaps => {
      $('#favCount').html(favMaps.length);
    });

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
