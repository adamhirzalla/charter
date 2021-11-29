/* eslint-disable no-undef */
/**Takes in a options object and a mapID. Generates google map at
 * the html element specified by options.htmlElement query. Map_id
 * is attached to the map object as map.dbMapId
 */

// const drawMaps = function(userId, options) {
const drawMaps = function(maps, options) {
  const googleMaps = [];
  for (const map of maps) {
    const googleMap = createMap(map, options);
    googleMaps.push(googleMap);
    // mapListener.attachMarker(googleMap);
  }
// maps = [{id:asd, title:}]
  return googleMaps;


  // const drawMaps = function(maps, options) {
  //   const returnMaps = [];
  //   for (const map of maps) {
  //     const googleMap = createMap(map, options);
  //     returnMaps.push(googleMap);
  //     mapListener.attachMarker(googleMap);
  //   }

  //   return returnMaps;
  // }
};
