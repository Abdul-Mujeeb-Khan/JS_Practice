// console.log(2 > 1);  //true
// console.log(2 >= 1); //true
// console.log(2 < 1);  //false
// console.log(2 <= 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //unpredictable result as true

console.log(undefined == 0); //false for all above cases
console.log(undefined < 0); //false
console.log(undefined > 0); //false

// ==== (strict check) -> checks value and data type
console.log("2" === 2); //false, here no conversion
