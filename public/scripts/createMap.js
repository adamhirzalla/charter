/**Takes in a options object and a mapID. Generates google map at
 * the html element specified by options.htmlElement query. Map_id
 * is attached to the map object as map.localId
 */

const createMap = function (local_mapId,options) {
  let map;
  if (!options.latLng) {
    options.latLng = { lat: 49.2827, lng: -123.1207 };
  }

  if (!options.zoom){
    options.zoom = 12;
  }

  if (!options.restrictions){
    options.restrictions = {};
  }

  if (local_mapId !== null)
  {
    console.log(options);
    map = new google.maps.Map(document.querySelector(options.htmlElement), {
      zoom: options.zoom,
      center: options.latLng,
      restriction: {},
      mapId: options.mapId,
    });
    map.local_map_id = local_mapId;

    //run drawPins(map, mapId) will query select all nesscary pins to the supplied map
    //object
  }

  if (local_mapId === null)
  {
    //need to implement for generating a new map
  }
  return map;
}
