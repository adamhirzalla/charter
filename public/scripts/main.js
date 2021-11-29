/* eslint-disable func-style */
/* eslint-disable no-undef */
// $(function() {

// Attach your callback function to the `window` object
function userMaps() {
  $.ajax({
    method: 'get',
    url: `/api/allUserMaps`
  })
    .then(maps => {
      drawMaps(maps);
    })
    .catch(e => console.log(e));

  // $.ajax({
  //   method: 'get',
  //   url: `/api/user`
  // })
  //   .then(userId => {

  //     drawMaps(userId);
  //   });
}

function allMaps() {
  $.ajax({
    method: 'get',
    url: '/api/allMaps'
  })
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
