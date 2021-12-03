/* eslint-disable func-style */
/* eslint-disable no-undef */

const drawPins = (pins, map) => {
  for (const pin of pins) {
    const marker = new google.maps.Marker({
      position: { lat: pin.lat, lng: pin.long },
      map,
      title: pin.title,
      animation: google.maps.Animation.DROP,
      icon: {
        url: pin.icon,
        scaledSize: new google.maps.Size(40, 55)
      },
      pin
    });
    addInfoWindow(marker, map);
  }
};

const addInfoWindow = (marker, map) => {
  const { pin } = marker;
  const content = `
  <div class="card" style="width: 150px;">
  <img class="card-img-top" src=${pin.img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${pin.title}</h5>
    <p class="card-text">${pin.description}</p>
  </div>
</div>
  `;
  const infoWindow = new google.maps.InfoWindow({ content });
  marker.addListener("click", () => {
    window.selectedMarker = marker;

    if (window.lastInfoWindow) {
      window.lastInfoWindow.close();
    }
    window.lastInfoWindow = infoWindow;

    marker.setDraggable(true);
    infoWindow.open({
      map,
      anchor: marker,
      shouldFocus: false,
    });
    const icon = getIcon(pin.icon);
    $('#title').val(pin.title);
    $('#description').val(pin.description);
    $('#image-url').val(pin.image);
    $('#lat').val(Math.round(marker.getPosition().toJSON().lat * 10000) / 10000);
    $('#long').val(Math.round(marker.getPosition().toJSON().lng * 10000) / 10000);
    $(`#icon`).val(pin.icon);
  });
};

const getIcon = (path) => {
  switch (path) {
  case '/images/icons/larry.gif':
    return 'default';
  case '/images/icons/pokeball.svg':
    return 'pokeball';
  case '/images/icons/poke-marker.svg':
    return 'poke-marker';
  }
};
