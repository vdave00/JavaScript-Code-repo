const another_array = [1,2,23,24,[5,6,7,8,9,[10,12,13,[0,1,]]]]

console.log(another_array);

const real_array = another_array.flat(Infinity)

console.log(real_array);

const name = "Ram";

console.log(Array.isArray(name));
console.log(Array.from("Ram Shree Ram"));