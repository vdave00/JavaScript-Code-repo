// array : 

const myArray = [0,1,2,3,4,5]

//console.log(myArray[0])

const myHero = ["Hanuman","Jambuvant","Nill"]

//console.log(myHero[2]);

//Array Methods ..

// myArray.push(6)
// myArray.push(7)

// myArray.pop()

//add value in the first place ...
//myArray.unshift(9)
 //myArray.shift()
 
// console.log(myArray.includes(9));

// console.log(myArray.indexOf(5));

// const newArr = myArray.join()
// console.log(newArr);
// console.log(typeof(newArr));
// console.log(myArray);

// slice , splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3);
console.log(myn1);

const myn2 = myArray.splice(1,3);
console.log(myArray);
console.log(myn2);


// splice will remove the data from the orignal array .. 