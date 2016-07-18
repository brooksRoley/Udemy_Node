// function doWork (data, callback) {
//   callback('done');
// }

// function doWorkPromise (data) {
//   return new Promise(function (resolve, reject) {
//     resolve("everything worked");
//     reject({
//       error: 'something went wrong'
//     });
//   });
// }

// doWorkPromise('something').then(function (data) {
//   console.log(data);
// }, function(error){
//   console.log(error);
// })

var request = require('request');

function getWeather (location) {
  return new Promise(function(resolve, reject){
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=df4b40a4bf060e1d285db5104f171408';

    if (!location) {
      return reject('No location provided.');
    };

    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (error) {
        reject('Unable to fetch the weather.');
      } else {
        // console.log(JSON.stringify(body,null,4));
        resolve("The temp in " + body.name + " is " + body.main.temp);
      }
    });
  })
}

getWeather('san francisco').then(function(currentWeather) {
  console.log(currentWeather);
}, function(error){
  console.log("something went wrong");
})