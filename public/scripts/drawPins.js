/* eslint-disable no-undef */

const drawPins = (pins, map) => {

  for (const pin of pins) {
    let marker = new google.maps.Marker({
      position: { lat: pin.lat, lng: pin.long },
      map,
      title: `Pin ${pin.id}!`,
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        url: pin.icon,
        scaledSize: new google.maps.Size(38, 31)
      }
    });

    const infowindow = new google.maps.InfoWindow({
      content: pin.description,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }


};


// function toggleBounce() {
// //   if (marker.getAnimation() !== null) {
// //     marker.setAnimation(null);
// //   } else {
// //     marker.setAnimation(google.maps.Animation.BOUNCE);
// //   }
// // }
// IN PROGRESS
