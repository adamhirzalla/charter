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
      let googleMap = createMap(map);
      let stateController = 0; // controls which listners are "active"
      let marker = new google.maps.Marker();

      $(`#edit-${mapId}`).on('click', (event) => {
        if (stateController === 0) {
          console.log('edit:', stateController)
          stateController++;
        }
        if (stateController === 1) {
          googleMap.addListener("click", (event) => {
            if (stateController === 1 || stateController === 2) {
              console.log('map:', stateController)
              marker.setPosition(event.latLng.toJSON());
              marker.setMap(googleMap);
              marker.setDraggable(true);
              marker.setAnimation(google.maps.Animation.DROP);
              $('#lat').val(event.latLng.toJSON().lat)
              $('#long').val(event.latLng.toJSON().lng)
              stateController = 2;
            }
          });
        }
      })

      $(`#pinSubmission`).on(`click`, (event) => {
        if (stateController === 2) {
          stateController = 3;
          console.log($('input:checked').val());
          postPin({
            mapId: mapId,
            lat: marker.getPosition().toJSON().lat,
            long: marker.getPosition().toJSON().lng,
            title: $('#title').val(),
            description: $('#description').val(),
            imageUrl: '', //$('#image-url').val(),
            icon: $('input:checked').val(),
          })
            .then(() => {
              stateController = 0;
              console.log('did it')
              $(`#map-${mapId}`).html("");
              googleMap = createMap(map);
              $('#lat').val("");
              $('#long').val("");
              $('#title').val("");
              $('#description').val("");
              $('#image-url').val("");
              stateController = 0; // we finish our statecycle here so we go back to the start.
            })
            .catch(e => console.log(e));
        }
      })

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
