/**Takes in a options object and a mapID. Generates google map at
 * the html element specified by options.htmlElement query. Map_id
 * is attached to the map object as map.localId
 */

const createMap = function(localMapId,options) {
  let map;
  let {
    zoom, restrictions, mapId, mapTypeControl, fullscreenControl, streetViewControl, center
  } = options;
  center = center || { lat: 49.2827, lng: -123.1207 };
  zoom = zoom || 12;
  restrictions = restrictions || {};
  mapTypeControl = mapTypeControl || false;
  fullscreenControl = fullscreenControl || false;
  streetViewControl = streetViewControl || false;
  if (localMapId !== null) {
    map = new google.maps.Map(document.querySelector(options.htmlElement), {
      zoom,
      center,
      restrictions,
      mapId,
      mapTypeControl,
      fullscreenControl,
      streetViewControl
    });
    map.localMapId = localMapId;
    //run drawPins(map, mapId) will query select all nesscary pins to the supplied map
    //object
  }

  if (localMapId === null) {
    //need to implement for generating a new map
  }
  return map;
};
