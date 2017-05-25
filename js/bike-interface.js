var Bike = require('./../js/bike.js').bikeModule;

var displayBike = function(response){
  response.bikes.forEach(function(bike){
    var bikeId = bike.id;
    var bikeSerial = bike.serial;
    var bikeManu = bike.manufacturer_name;
    var bikeLocation = bike.stolen_location;
    var imageUrl = bike.thumb;
    var date = new Date(bike.date_stolen*1000);
    var display =
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
      $('.result').append(display);
  });
};

$(document).ready(function() {

  var bikeObject = new Bike();

  $('.bike-button').click(function() {
    $('.result').text("");
    var location = $('#location').val();
    $('#location').val('');
    var serial = $('#serial').val();
    $('#serial').val('');
    var manufacturer = $('#manufacturer').val();
    $('#manufacturer').val('');
    var distance = $('#distance').val();

    bikeObject.getBikeData(location, distance, manufacturer,serial, displayBike);

    });
});
