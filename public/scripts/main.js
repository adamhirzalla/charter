/* eslint-disable func-style */
/* eslint-disable no-undef */
// $(function() {

// Attach your callback function to the `window` object
function userMaps(options) {
  getUserMaps(options)
    .then(maps => {
      drawMaps(maps);
    })
    .catch(e => console.log(e));
}

function playGround(options) {
  getUserMaps(options)
    .then(maps => {
      const googleMaps = drawMaps(maps);
      $(`#edit-1`).on('click',null,googleMaps,(event)=>{
        $(`#edit-1`).unbind('click');
          let marker = mapListener.attachMarker(googleMaps[0]);
          console.log(marker);
        $('#confirm-1').on('click',null,marker,(event)=>{
          console.log(event.data);

        })
      })
    })
    .catch(e => console.log(e));
}

// initilize all user maps -> attach a listener

function allMaps(options) {
  getAllMaps(options)
    .then(maps => {
      drawMaps(maps);
    })
    .catch(e => console.log(e));
}


// });

/*
const options1 = {
  center: { lat: -25.363, lng: 131.044 },
  mapId: '93b06d228f001f87',
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false
};

const options2 = {
  center: { lat: 49.2827, lng: -123.1207 },
  mapId: '93b06d228f001f87',
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false
}; */
