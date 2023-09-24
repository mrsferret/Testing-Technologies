//let reverseArray = function (arr) {
// return arr.reverse();
//};

// convert to arrow function
let reverseArray = (arr) => arr.reverse();

// Test the function with different data types
const nums = [1, 2, 3, 4, 5];
const words = ["I", "like", "JavaScript"];

console.log(reverseArray(nums)); // Outputs [5, 4, 3, 2, 1]
console.log(reverseArray(words)); // Outputs ["JavaScript", "like", "I"]
