

// By default, modules protect their variables and functions from leaking


const data = require("./data.json")


function sumOfVariable(a, b) {
    const sum = a + b
    
    console.log(sum);
    
}

var x = 7
console.log(x);

console.log(data);




// module.exports = sumOfVariable  => When we want to export one function or variable
//module.exports = { sumOfVariable: sumOfVariable, x:x};   // => When we want to export one function or variable
 
// module.exports = { sumOfVariable, x };  // shorted way

module.exports.x = x   // another way to export
module.exports.sumOfVariable = sumOfVariable  // another way to export



