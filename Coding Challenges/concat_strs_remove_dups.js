/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// the following code works in removing duplicates but returns an unsorted string
const removeDupsInStrings = (str1, str2) => {
  let merged = str1 + str2;
  const removed = merged.split("").filter((value, index, array) => {
    return array.indexOf(value) === index;
  });
  console.log("Removed: ", removed);
};

removeDupsInStrings("cba", "bcd");

// Method 2
function longest(s1, s2) {
  // Concatenate the two strings and convert them into a Set to get unique letters
  const uniqueLetters = new Set([...s1, ...s2]);

  // Convert the Set back to an array and sort it
  const sortedUniqueLetters = [...uniqueLetters].sort();

  // Join the sorted letters into a string
  const result = sortedUniqueLetters.join("");

  return result;
}

// Example usage
const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
console.log(longest(a, b)); // Output: "abcdefklmopqwxy"

const c = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(c, c)); // Output: "abcdefghijklmnopqrstuvwxyz"
