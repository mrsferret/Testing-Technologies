// Sorting function
// sorting a numeric array Version 1
function Numeric_sort(ar) {
  let i = 0,
    j;
  while (i < ar.length) {
    j = i + 1;
    while (j < ar.length) {
      if (ar[j] < ar[i]) {
        let temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      }
      j++;
    }
    i++;
  }
}

// Original Array
let arr = [1, 15, 10, 45, 27, 100];

// Print Before sorting array
console.log("Original Array");
console.log(arr);

// Function call
Numeric_sort(arr);

console.log("Sorted Array");

// Print sorted Numeric array
console.log(arr);

// ================================================================================
// sorting a numeric array Version 2
// ================================================================================
console.log("Version 2");

let numbers = [4, 2, 8, 6, 5];

console.log("Original Array");
console.log(numbers);

// Sorting the array in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [8, 6, 5, 4, 2]

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [2, 4, 5, 6, 8]

// now sum the two lowest numbers ie. the first 2 numbers in the sorted array
console.log("now sum first 2 digits of array");
result = numbers[0] + numbers[1];
console.log(result);
