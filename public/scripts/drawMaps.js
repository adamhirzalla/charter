/* eslint-disable no-undef */
/**Takes in a options object and a mapID. Generates google map at
 * the html element specified by options.htmlElement query. Map_id
 * is attached to the map object as map.dbMapId
 */

const drawMaps = function(maps, options) {
  const googleMaps = [];
  for (const map of maps) {
    const googleMap = createMap(map, options);
    googleMaps.push(googleMap);
  }
  return googleMaps;

};
