var animal = '{"name": "cat"}';

var object =JSON.parse(animal);
object.age = 5;

animal = JSON.stringify(object);

console.log(animal);