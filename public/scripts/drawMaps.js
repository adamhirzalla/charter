/* eslint-disable no-undef */
/**Takes in a options object and a mapID. Generates google map at
 * the html element specified by options.htmlElement query. Map_id
 * is attached to the map object as map.dbMapId
 */

// const drawMaps = function(userId, options) {
const drawMaps = function(maps, options) {

  for (const map of maps) {
    const googleMap = createMap(map, options);
    mapListener.attachMarker(googleMap);
  }


  // $(googleMap) doesnt actually work but still looks like it would
  // convert to function that returns a promise giving back all maps from db for a certain user
  // add an htmlElement as parameter, and drawMaps appends the map to that passed element
  // $.ajax({
  //   method: 'get',
  //   url: `/users/${userId}/maps`
  // })
  //   .then(({maps})=>{
  //     for (const row of maps) {
  //       const dbMapId = row.id;

  //       const mapHTML = `
  //       <div class="card map-card" >
  //         <div id="map-${dbMapId}" class="map-container">
  //          <!-- Map goes here -->
  //         </div>
  //         <div class="card-body text-dark">
  //           <h5 class="card-title">${row.title}</h5>
  //           <p class="card-text">${row.description}</p>
  //         </div>
  //       </div>
  //       `;
  //       $('#maps').append(mapHTML);

  //       const map = createMap(dbMapId);
  //       //run drawPins(map, mapId) will query select all nesscary pins to the supplied map
  //       //object
  //       $(map).on('click', mapListener.attachMarker(map));
  //     }
  //   });
};
