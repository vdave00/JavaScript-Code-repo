let score = "33"

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// if number is not number it will return NaN .. 
// if number is null than it will return zero .. 
// if number is undefine than it will return NaN ...
// if boolean than it will retun 1 for true and 0 for false .. 
// if empty string than it will return false .. but if you just send whiteSpace than it will be true as well ..

let val = "";

let  booleanisLoggedin = Boolean(val);
console.log(typeof booleanisLoggedin);
console.log(booleanisLoggedin);