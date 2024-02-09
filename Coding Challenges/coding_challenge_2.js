/* Create a function that returns the sum of the two lowest positive numbers given an
 array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(numbers) {
  // Sorting the array in ascending order
  numbers.sort((a, b) => a - b);
  // now sum the two lowest numbers ie. the first 2 numbers
  // in the sorted array
  result = numbers[0] + numbers[1];
  return result;
}
let numbers = [8, 100, 5, 6, 45];
//let output = 0;
const output = sumTwoSmallestNumbers(numbers);

console.log(output);

/* another more concise way of doing it 
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
*/


// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);
