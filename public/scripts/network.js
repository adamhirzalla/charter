/* eslint-disable func-style */

function getUserMaps() {
  return $.ajax({
    method: 'get',
    url: `/api/allUserMaps`,
  });
}

function getUser() {
  return $.ajax({
    method: 'get',
    url: `/api/me`
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
