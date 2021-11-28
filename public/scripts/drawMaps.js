/* eslint-disable no-undef */
/**Takes in a options object and a mapID. Generates google map at
 * the html element specified by options.htmlElement query. Map_id
 * is attached to the map object as map.dbMapId
 */

window.drawMaps = function(userId, options) {
  $.ajax({
    method: 'get',
    url: `/users/${userId}/maps`
  })
    .then(({maps})=>{
      for (const row of maps) {
        const dbMapId = row.id;
        if (!options) {
          options = {
            center: { lat: 49.2827, lng: -123.1207 },
            zoom: 12,
            restrictions: {},
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            htmlElement: `#map-${dbMapId}`,
          };
        }
        let {
          zoom, restrictions, mapId, mapTypeControl, fullscreenControl, streetViewControl, center, htmlElement
        } = options;
        center = center || { lat: 49.2827, lng: -123.1207 };
        zoom = zoom || 12;
        restrictions = restrictions || {};
        mapTypeControl = mapTypeControl || false;
        fullscreenControl = fullscreenControl || false;
        streetViewControl = streetViewControl || false;
        htmlElement = `#map-${dbMapId}`;

        let map;
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

        map = new google.maps.Map(document.querySelector(htmlElement), {
          zoom,
          center,
          restrictions,
          mapId,
          mapTypeControl,
          fullscreenControl,
          streetViewControl
        });
        //run drawPins(map, mapId) will query select all nesscary pins to the supplied map
        //object

        $(map).on('click', placeMarker(map));
      }
    });
};
