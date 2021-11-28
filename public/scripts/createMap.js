/* eslint-disable no-undef */
const createMap = function(dbMapId, options) {
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
  // /api/center calls db for all pins for given mapid and then sends pins to function calcCenterFromPins returns center coords
  let map;
  let {
    zoom, restrictions, mapId, mapTypeControl, fullscreenControl, streetViewControl, center, htmlElement
  } = options;
  center = center || { lat: 49.2827, lng: -123.1207 };
  zoom = zoom || 12;
  restrictions = restrictions || {};
  mapTypeControl = mapTypeControl || false;
  fullscreenControl = fullscreenControl || false;
  streetViewControl = streetViewControl || false;
  htmlElement = htmlElement || `#map-${dbMapId}`;
  mapId = mapId || '93b06d228f001f87';

  if (!dbMapId) {
    //need to implement for generating a new map
  }

  if (dbMapId) {
    map = new google.maps.Map(document.querySelector(options.htmlElement), {
      zoom,
      center,
      restrictions,
      mapId,
      mapTypeControl,
      fullscreenControl,
      streetViewControl
    });
    map.dbMapId = dbMapId;
    //run drawPins(map, mapId) will query select all nesscary pins to the supplied map
    //object
  }


  return map;
};
