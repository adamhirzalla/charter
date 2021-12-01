/* eslint-disable func-style */
/* eslint-disable no-undef */
// $(function() {


// Attach your callback function to the `window` object

function allMaps() {
  getAllMaps()
    .then(maps => {
      maps.forEach(map => createMap(map));
    })
    .catch(e => console.log(e));
}

function userMaps() {
  getUserMaps()
    .then(maps => {
      maps.forEach(map => createMap(map));
    })
    .catch(e => console.log(e));
}

function map() {
  const mapId = $('.map-container')[0].id.split('-')[1];
  getMap(mapId)
    .then(map => {
      createMap(map);
    })
    .catch(e => console.log(e));
}

function editMap() {
  const mapId = $('.map-container')[0].id.split('-')[1];
  getMap(mapId)
    .then(map => {
      const googleMap = createMap(map);
      googleMap.mapId = mapId;
      mark(googleMap);
    })
    .catch(e => console.log(e));
}



/* function editMap() {
  // const url = window.location.href;
  // const split = url.split('/');
  // const mapId = split[split.length - 1];
  const mapId = $('.map-container')[0].id.split('-')[1];
  getMap(mapId)
    .then(map => {
      let googleMap = createMap(map);
      let stateController = 0; // controls which listners are "active"
      let marker = new google.maps.Marker();

      $(`#edit-${mapId}`).on('click', (event) => {
        if (stateController === 0) {
          stateController++;
          console.log('edit:', stateController);
        }
        if (stateController === 1) {
          googleMap.addListener("click", (event) => { //we need to keep reattaching this event because after the pins post
            //request google maps is redeclared (see the .then after postPins)
            // this and the last line of this if statment
            // ensure that submit can only be pressed when the map has been clicked atleast once
            if (stateController === 1 || stateController === 2) {
              console.log('map:', stateController);
              marker.setPosition(event.latLng.toJSON());
              marker.setMap(googleMap);
              marker.setDraggable(true);
              marker.setAnimation(google.maps.Animation.DROP);
              $('#lat').val(event.latLng.toJSON().lat);
              $('#long').val(event.latLng.toJSON().lng);
              stateController = 2;
            }
          });
        }
      });
        // 0 base -> 1 -> adds listener on map -> 2 do stuff submission -> 0
      $(`#pinSubmission`).on(`click`, (event) => {
        if (!$('#lat').val("")) return
        if (stateController === 2) {
          stateController = 3; //update to 3 so we prevent submit from being clicked again really quickly and posting twice
          addPin({
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
      });

    })
    .catch(e => console.log(e));
}
 */
