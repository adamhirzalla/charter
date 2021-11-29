/* eslint-disable func-style */

function getUserMaps(data) {
  return $.ajax({
    method: 'get',
    url: `/api/allUserMaps`,
    data
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

function getAllMapPins(data) {
  return $.ajax({
    method: 'get',
    url: '/api/allMapPins',
    data
  });
}
