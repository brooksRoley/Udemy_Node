var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    .option('location', {
      demand: false,
      alias: 'l',
      description: 'Your location to fetch weather for',
      type: 'string'
    })
    .help('help')
    .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
  console.log("Finding the weather for " + argv.l);
  weather(argv.l)
  .then(function(currentWeather){
    console.log(currentWeather);
  }, function(error){
    console.log(error);
  });
} else {
  console.log("No location provided");
  location()
  .then(function(location){
    return weather(location.city);
  }).then(function(currentWeather){
    console.log(currentWeather);
  }).catch(function(error){
    console.log(error);
  });
}