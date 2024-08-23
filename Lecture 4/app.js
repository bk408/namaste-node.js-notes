require("./xyz")
//const obj = require("./sum");


const {x, sumOfVariable} = require("./sum")  // destructuring way

var a = 10;
var b = 20; 

//obj.sumOfVariable(a, b)
sumOfVariable(a,b)

//console.log(obj.x);
console.log(x);



console.log(globalThis === global);
