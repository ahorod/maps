var apiKey = require('./../.env').apiKey;

function Bike(){

}

Bike.prototype.getBikeData = function(location, distance, manufacturer,serial, displayBike){
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=5&' + 'manufacturer=' + manufacturer + '&location='+ location + '&distance=' + distance + '&stolenness=proximity&appid=' + apiKey).then(function(response) {
      displayBike(response);

    }).fail(function(error) {
    $('.result').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
