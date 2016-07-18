// function doWork (shouldFail) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       if (typeof shouldFail && shouldFail) {
//         reject("failed.");
//       }else{
//         resolve('success');
//       }
//     }, 1000);
//   });
// }

// doWork().then(function(message){
//   console.log(message);
//   return doWork(true);
// }).then(function (message){
//   console.log("all done");
// }).catch(function(error){
//   console.log(error);
// });

function getLocation(){
  return new Promise(function(resolve, reject){
    resolve('san francisco');
    reject("Fail");
  })
}

function getWeather(location){
  return new Promise(function(resolve, reject){
    resolve('its 78 in ' + location);
    reject("Fail");
  })
}

getLocation().then(function(location){
  return getWeather(location);
}).then(function(currentWeather){
  console.log(currentWeather)
})