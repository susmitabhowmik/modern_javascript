var moment = require('moment');
var tinycolor = require('tinycolor2')

console.log("Hello world!")

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

var color1 = tinycolor("#fff");
console.log(color1.getBrightness());