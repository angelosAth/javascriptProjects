$(document).ready(function () {
  var lat, lon, url;
  // getting users location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation);

    function getLocation(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      // openweathermap API combined with users location to get the local weather   
      url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + 
      lon + '&units=metric&appid=3a6ea821910d137b3dfc46c99eb7966e';
            
      $.ajax({
        url : url,
        method : 'GET',
        success : function (response) {
          var temperature = response.main.temp;
          var weather = response.weather[0].description;
          var icon = response.weather[0].icon;  
          var country = response.sys.country;
          var city = response.name;
          var iconUrl = 'http://openweathermap.org/img/w/'+icon+'.png';
          $('#temperature').text(Math.round(temperature));
          $('#weather').text(weather);
          $('#country').text(country);
          $('#city').text(city);
          $("#deg").html("C");
          $("#sign").html("°");
          $('#icon').prepend('<img src="http://openweathermap.org/img/w/'+icon+'.png" />')
          }
      });
    }
  } 
  else {
    alert("Your browser doesn't support geolocation!");
  }
});

function convertDegree() {
    var oldDegree = $("#temperature").html();
    if ($("#deg").html() === "F"){
      $("#deg").html("C");
      oldDegree = Math.round((oldDegree - 32) / (9/5));
    }
    else{
      $("#deg").html("F");
      oldDegree = Math.round(oldDegree * 9/5 + 32);
    }
    $("#temperature").html(oldDegree);
}