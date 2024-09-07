const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[3]);
console.log(marvel_heroes[3][1]);
console.log(dc_heroes);

// .concat() -> better than push as no change in original array and returns new array without any indexing within indexes

const marvel_heroes1 = ["Thor", "Ironman", "Spiderman"]
const dc_heroes1 = ["Superman", "Flash", "Batman"]

const allHeroes = marvel_heroes1.concat(dc_heroes1)
console.log(allHeroes);


//Spread -> best use to combine 2 or more arrays
const all_new_heroes = [...marvel_heroes1, ...dc_heroes1]
console.log(all_new_heroes);

//********************************

const anotherArray = [1,2,3,[4,5,6,],7,[6,7,[4,5]]] //array within array within array
const real_another_array = anotherArray.flat(Infinity) //removes depth witin an array
console.log(real_another_array);

console.log(Array.isArray("Mujeeb")) //checks if its an array
console.log(Array.from("Mujeeb")); //converts object, string, etc.to array

console.log(Array.from({name:"Mujeeb"})); //empty array as doesnt know what to do

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //returns a set of elements as an array
