let colors = ["red", "blue", "green", "yellow", "orange", "teal"];
let numbers = [20,10,5,8,30,100,19];

let reversedColors = colors.reverse()
console.log("oooh, pretty", reversedColors);

let sortedColors = colors.sort();
console.log("sorted", sortedColors);

// BAD WAY TO SORT NUMBERS, ONLY SORTS THE FIRST CHARACTER//
let sortaSorted = numbers.sort();
console.log("uhhhh", sortaSorted);

let sortedNums = numbers.sort(function(first, second){
	return first - second;
});
console.log("sortedNums", sortedNums);

let joinedColors = colors.join(", ");
console.log("joined", joinedColors);

// SLICE CUTS FROM THE BEGINNING OF THE ARRAY YOU CHOOSE TO THE BEFORE POSITION OF THE CHARACTER AFTER THE DESIRED ONE//
let fruits = ["banana", "orange", "lemon", "apple", "mango"];
let citrus = fruits.slice(1, 3);
// console.log("fruits", fruits);
console.log("cirtus?", citrus);


// var colors = ["red", "blue", "green", "yellow", "orange", "teal"];

colors.forEach(function(color) {
	console.log(`I like the color ${color}`);
});






