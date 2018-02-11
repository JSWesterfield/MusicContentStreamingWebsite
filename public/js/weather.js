var userWeatherData = {

}

var weatherData = {
    city: document.querySelector ("#userCity"),
    state: document.querySelector ("#userState"), 
    weather: document.querySelector ("#userWeather"),
    temperature: document.querySelector("#userTemperature"),
    icon: document.querySelector ('#userWeatherIcon'),
    temperatureValue: 0,
    units: "°F"
  };

  // Might want to refactor code to make this a global function
  // so that multiple 
  // var roundTemperature = function(temperature) {
  //       temperature = temperature.toFixed(1);
  //       return temparature;
  // }
  function roundTemperature(temperature){
        temperature = temperature.toFixed(1);
        return temperature;
  }

  function switchUnits () {
    if (weatherData.units == "°C") {
      weatherData.temperatureValue = roundTemperature(weatherData.temperatureValue * 9/5 + 32);
      weatherData.units = "°F";
    
    } else {
      weatherData.temperatureValue = roundTemperature ((weatherData.temperatureValue - 32) * 5/9);
        weatherData.units = "°C";  
    }
      weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units + " ";
  }
  //https://api.darksky.net/forecast/845ff6b003aba8bd1a9434ab040ef79c/37.8267,-122.4233

  // get geolocation data from ip via ip-api.com
  var getIP = '//ip-api.com/json/';
  //Dark Sky API key: 845ff6b003aba8bd1a9434ab040ef79c 
  $.getJSON(getIP).done(function(location) {
      //show location object in console, to pull out 'regionName' or the state for rendering in html
      console.log(location);
      console.log("Your region/state name is: " + location.regionName);
        var regionName = location.regionName;
        weatherData.state.innerHTML = regionName;
        var cityName = location.city;
        
        //Now that we have the location data we can pass this within our DarkSky Ajax call
        var darkSkyURL = 'https://api.darksky.net/forecast/'
        // To bypass the Cross Domain Error, can I pass in an object of mode: 'no-cors' as my proxy variable?
        var corsProxy = 'https://cors-anywhere.herokuapp.com/' //can I pass in a mode: 'no-cors' object in place of this proxy?
        var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/' 
        var units = '/?units=si'
        var locationData = location.lat + "," + location.lon; 
        var requestObject = corsProxy + darkSkyURL + apiKey + locationData + units;
        //start Ajax call pass in the above data, in order:
        // CORS + DarkSky API URL + API KEY + locationData
        $.getJSON(requestObject).done(function(response) {
              console.log(response);
              var weatherDescription = response.currently.summary;
              //set our initial temperature to Fahrenheit due to the response data return the unit of celsius as the response data
              var weatherTemperature = (roundTemperature((response.currently.temperature) * 9/5 + 32));
              
              var userWeatherIcon = response.currently.icon;
              console.log('Your icon code is:' + ' ' + response.currently.icon);
              /* Set icons to the value of specific Skycons functions*/
              var icons = new Skycons({"color": "white"});
              icons.add(document.getElementById('userWeatherIcon'), userWeatherIcon);
              icons.play();

              weatherData.temperatureValue = weatherTemperature;
              weatherData.city.innerHTML = cityName + "," + " ";
              weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;

        }, false);
  });  

