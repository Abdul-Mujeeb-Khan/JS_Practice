const score = 400
console.log(score); //400

const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(0)); //100
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

console.log("****************************************");


// ************* MATHS *************

console.log(Math);

console.log(Math.abs(-4)); //4
console.log(Math.abs(4)); //4

console.log(Math.round(4.3)); //4

console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.min(4,5,2,7,6,8)) //2;
console.log(Math.max(4,5,2,7,6,8)) //8;

console.log(Math.random()); //any value between 0 and 1

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1))) + min);


console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);



