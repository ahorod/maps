var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.bike-button').click(function() {
    var location = $('#location').val();
    $('#location').val('');
    var serial = $('#serial').val();
    $('#serial').val('');
    var manufacturer = $('#manufacturer').val();
    $('#manufacturer').val('');
    var distance = $('#distance').val();
    $('#distance').val('');

    $.get('https://bikeindex.org:443/api/v3/search?' + '&manufacturer=' + manufacturer + '&location'+ location + '&distance=' + distance + '&stolenness=proximity&access_token=' + apiKey, function(response) {
      $('.result').text(response.bikes);
      console.log(response.bikes);
    });

  });

});
