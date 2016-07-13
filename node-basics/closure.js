function createAdder(number) {
  return function(additive) {
          return number + additive;
         }
}


var addTen = createAdder(10);
console.log(addTen(5));