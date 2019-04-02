var moment = require('moment');
var tinycolor = require('tinycolor2');

console.log("Hello world!");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

var name = "Susmita", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

var color1 = tinycolor("#fff");
console.log(color1.getBrightness());

function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

console.log(square(2, 4, 7.5, 8, 11.5, 21)); // returns: [4, 16, 56.25, 64, 132.25, 441]

function g({name: x}) {
  return x;
}
console.log(g({name: 5}));