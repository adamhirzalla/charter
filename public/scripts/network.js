/* eslint-disable func-style */

function getUserMaps(userId) {
  return $.ajax({
    method: 'get',
    url: `/api/allUserMaps/${userId}`,
  });
}

function getUser(userId) {
  const url = userId ? `/api/user/${userId}` : `/api/user`;
  return $.ajax({
    method: 'get',
    url
  });
}

function getUserId() {
  return $.ajax({
    method: 'get',
    url: '/api/userId'
  });
}

function getAllMaps(params) {
  let url = '/api/allMaps';
  if (params) {
    url += '?' + params;
  }
  return $.ajax({
    method: 'get',
    url
  });
}

function getAllMapPins(mapId) {
  return $.ajax({
    method: 'get',
    url: `/maps/${mapId}/pins`
  });
}

function getMap(mapId) {
  return $.ajax({
    method: 'get',
    url: `/api/getMap/${mapId}`
  });
}

function addPin(mapId, data) {
  return $.ajax({
    method: 'post',
    url: `/maps/${mapId}/pins`,
    data
  });
}

function removePin(pinId) {
  return $.ajax({
    method: 'post',
    url: `/pins`,
    data: {pinId}
  });
}

function getFavMaps(userId) {
  return $.ajax({
    method: 'get',
    url: `/api/favMaps/${userId}`
  });
}

function removeFav(mapId) {
  return $.ajax({
    method: 'post',
    url: `/api/favs/delete`,
    data: {mapId}
  });
}

function addFav(mapId) {
  return $.ajax({
    method: 'post',
    url: `/api/favs`,
    data: {mapId}
  });
}

function getContMaps(userId) {
  return $.ajax({
    method: 'get',
    url: `/api/contMaps/${userId}`
  });
}
