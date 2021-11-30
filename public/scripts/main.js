/* eslint-disable func-style */
/* eslint-disable no-undef */
// $(function() {

// Attach your callback function to the `window` object
function userMaps() {
  getUserMaps()
    .then(maps => {
      drawMaps(maps);
    })
    .catch(e => console.log(e));
}

function editMap() {
  const url = window.location.href;
  const split = url.split('/');
  const mapId = split[split.length - 1];
  getMap(mapId)
    .then(map => {
      const googleMaps = createMap(map);
      const edit = (googleMaps) => {
        $(`#edit-${mapId}`).on('click', () => { // attach listner to map when edit is clicked
          $(`#edit-${mapId}`).off('click'); // remove edit listner so can't be repeated
          const { marker, markerListener } = mapListener.attachMarker(googleMaps);
          $(`#confirm-${mapId}`).on('click', () => { //attach listner to confirm
            google.maps.event.removeListener(markerListener); //remove listner on map so we can't edit after confirming
            $(`#confirm-${mapId}`).off('click'); //remove click
            marker.setDraggable(false);
            console.log(marker.getPosition().toJSON());
            postPin({bob:'asdf'});
            // wait for form submission
            // make ajax post to /users/:user/maps/:map/pins
            // that will take care of sql connectio
            edit(googleMaps);
          });
        });
      };
      edit(googleMaps);
    })
    .catch(e => console.log(e));
}


function allMaps() {
  getAllMaps()
    .then(maps => {
      drawMaps(maps);
    })
    .catch(e => console.log(e));
}
