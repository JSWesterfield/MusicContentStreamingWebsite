// // get geolocation data from ip via ip-api.com
// var getIP = 'https://ip-api.com/json/';
// $.getJSON(getIP).done(function(location) {
//     //show location object in console, to pull out 'regionName' or the state for rendering in html
//     console.log(location);
//     console.log("Your region/state name is: " + location.regionName);
//       var regionName = location.regionName;
//       var cityName = location.city;
//       //Now that we have the location data we can pass this within our Billboard Ajax call
//       var billboardURL = 'https://billboard.modulo.site/charts/{2018-01-25}'
//       // To bypass the Cross Domain Error, can I pass in an object of mode: 'no-cors' as my proxy variable?
//     //   var corsProxy = 'https://cors-anywhere.herokuapp.com/' //can I pass in a mode: 'no-cors' object in place of this proxy?
//       // var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/' API key needed for Billboard API?
//     //   var locationData = location.lat + "," + location.lon; 
//       // var requestObject = corsProxy + billboardURL + apiKey + locationData;
//       //start Ajax call pass in the above data, in order:
//       // CORS + DarkSky API URL + API KEY + locationData
//       $.getJSON(billboardURL).done(function(response) {
//             console.log(response);
//       }, false);
// });  
// var billboard = require('billboard-top-100').getChart;

// billboard('hot-100', '2016-08-27', function(songs, err) {
//     if(err) console.log(err);
//     console.log(songs);
//     console.log(songs[3]);
// })

// var corsProxy = 'https://cors-anywhere.herokuapp.com/' //can I pass in a mode: 'no-cors' object in place of this proxy?
// var billboardURL = 'https://www.npmjs.com/package/billboard-top-100'
// var requestObject = corsProxy + billboardURL;
// $.getJSON(requestObject).done(function(response) {
//     console.log('Here is the Billboard API Data you requested: ');
//     console.log(response);
// }, false);