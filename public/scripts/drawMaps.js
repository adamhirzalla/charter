/* eslint-disable no-undef */
/**Takes in a options object and a mapID. Generates google map at
 * the html element specified by options.htmlElement query. Map_id
 * is attached to the map object as map.dbMapId
 */

const drawMaps = function(userId, options) {
  // convert to function that returns a promise giving back all maps from db for a certain user

  // add an htmlElement as parameter, and drawMaps appends the map to that passed element
  $.ajax({
    method: 'get',
    url: `/users/${userId}/maps`
  })
    .then(({maps})=>{
      for (const row of maps) {
        const dbMapId = row.id;

        const mapHTML = `
        <div class="card flex" >
          <div id="map-${dbMapId}" class="map flex">
          <!-- Map goes here -->
          </div>
          <div class="card-body">
            <h5 class="card-title">${row.title}</h5>
            <p class="card-text">${row.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        `;
        $('#maps').append(mapHTML);

        const map = createMap(dbMapId);
        //run drawPins(map, mapId) will query select all nesscary pins to the supplied map
        //object
        $(map).on('click', mapListener.attachMarker(map));
      }
    });
};
