$.ajax({
  url: 'https://places.ls.hereapi.com/places/v1/discover/search',
  type: 'GET',
  data: {
    at: '52.5165,13.3779',
    q: 'ev-charging-station',
    apiKey: 'H6XyiCT0w1t9GgTjqhRXxDMrVj9h78ya3NuxlwM7XUs'
  },
  beforeSend: function(xhr){
    xhr.setRequestHeader('Accept', 'application/json');
  },
  success: function (data) {
    alert(JSON.stringify(data));
  }
});
        