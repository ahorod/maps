var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.bike-button').click(function() {
    $('.result').text("");
    var location = $('#location').val();
    $('#location').val('');
    var serial = $('#serial').val();
    $('#serial').val('');
    var manufacturer = $('#manufacturer').val();
    $('#manufacturer').val('');
    var distance = $('#distance').val();

    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=5&' + 'manufacturer=' + manufacturer + '&location='+ location + '&distance=' + distance + '&stolenness=proximity&appid=' + apiKey).then(function(response) {
      console.log(response);
      response.bikes.forEach(function(bike){
        var bikeId = bike.id;
        var bikeSerial = bike.serial;
        var bikeManu = bike.manufacturer_name;
        var bikeLocation = bike.stolen_location;
        var imageUrl = bike.thumb;
        var date = new Date(bike.date_stolen*1000);

        console.log(date.toDateString());
        var result =
          '<div class="col-md-4 mb-3">' +
            '<div class="card">' +
              '<img class="card-img-top" src="' + imageUrl + '" alt="Card image cap">' +
              '<div class="card-block">' +
                '<h4 class="card-title">Bike ID: ' + bikeId + '</h4>' +
                "<p>Date Stolen: " + date.toLocaleDateString() + "</p>" +
                "<p>Manufacturer: " + bikeManu + "</p>" +
                "<p>Location: " + bikeLocation + "</p>" +
              '</div>' +
            '</div>' +
          '</div>';
          $('.result').append(result);
        });
      });
    });
});
