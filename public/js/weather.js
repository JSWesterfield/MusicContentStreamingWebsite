// get geolocation data from ip via ip-api.com
var getIP = 'https://ip-api.com/json/';
$.getJSON(getIP).done(function(location) {
    //show location object in console, to pull out 'regionName' or the state for rendering in html
    console.log(location);
    console.log("Your region/state name is: " + location.regionName);
      var regionName = location.regionName;
      var cityName = location.city;
      // Now that we have the location data we can pass this within our Dark Sky Ajax call
      var darkSkyURL = 'https://'
      // To bypass the Cross Domain Error, can I pass in an object of mode: 'no-cors' as my proxy variable?
      var corsProxy = 'https://cors-anywhere.herokuapp.com/' //can I pass in a mode: 'no-cors' object in place of this proxy?
      var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/' //darkSkyAPI key
      var locationData = location.lat + "," + location.lon; 
      var requestObject = corsProxy + darkSkyURL + apiKey + locationData;
      // start Ajax call pass in the above data, in order:
      // CORS + DarkSky API URL + API KEY + locationData
      $.getJSON(darkSkyURL).done(function(response) {
            console.log(response);
      }, false);

        //create a weatherObject template/model for us to pass our response weather data into
        const weatherObject = {
            weather: response.weather,
            temperature: response.temperature,
            city: location.cityName,
            state: location.regionName
        };

        //Set selectors within my .ejs view to use the response data, will overright current html
        $('#weather').html(weatherObject.weather);
        $('#temperature').html(weatherObject.temperature);
        $('#city').html(weatherObject.city);
        $('#state').html(weatherObject.state);

});  
