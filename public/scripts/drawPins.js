/* eslint-disable func-style */
/* eslint-disable no-undef */

const drawPins = (pins, map) => {
  for (const pin of pins) {
    const marker = new google.maps.Marker({
      position: { lat: pin.lat, lng: pin.long },
      map,
      title: `Pin ${pin.id}!`,
      animation: google.maps.Animation.DROP,
      icon: {
        url: pin.icon,
        scaledSize: new google.maps.Size(38, 31)
      }
    });
    addInfoWindow(map, pin.description, marker);
  }
};

const addInfoWindow = (map, content, marker) => {
  const infoWindow = new google.maps.InfoWindow({content});
  marker.addListener("click", () => {
    infoWindow.open({
      map,
      anchor: marker,
      shouldFocus: false,
    });
  });
};
