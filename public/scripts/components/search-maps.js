/* eslint-disable no-undef */

$(() => {
  $('#search-maps').on('submit', function(event) {
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
            <div class="card-body text-dark">
              <h5 class="card-title">${map.title}</h5>
              <p class="card-text">${map.description}</p>
            </div>
          </div>`
          );
          $('#maps').append($mapContainer);
        }
        drawMaps(maps);
      });
  });



});
