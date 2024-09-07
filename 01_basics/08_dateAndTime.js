// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());

let xDate = new Date("01-20-2002")
console.log(xDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); //to get milliseconds

console.log(Math.floor(Date.now()/1000)); //to get seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`The date is ${newDate.toLocaleDateString()} and the time is ${newDate.toLocaleTimeString()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})); //custom format

