const name = "Mujeeb"
const repoCount = 10
console.log(name + repoCount + " Value"); // Outdated Syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// for above syntax backticks (``) should be used 
// instead of "" or ''.

console.log("hello");
const gameName = new String("Mujeeb-mk")

console.log(gameName[1]); //access key - 1
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,4) // substr(start, length)
console.log(newString);

const anotherString = gameName.slice(-8,4) //slice(start, end)
console.log(anotherString);

const newStringOne = "    Mujeeb        "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://mujeeb.com/mujeeb%20khan"
console.log(url.replace('%20','-'));

console.log(url.includes('mujeeb'));

console.log(gameName.split('-'));