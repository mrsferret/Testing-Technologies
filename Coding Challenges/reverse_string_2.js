/* Write a js function that takes in a string of one or more words, and returns the same string, but with all five or more 
letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces 
will be included only when more than one word is present. 

Examples 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(" ");
  
    // Iterate through each word
    let result = words.map(function(word) {
      // Reverse the word if it has five or more letters
      return (word.length >= 5) ? word.split("").reverse().join("") : word;
    });
  
    // Join the words back into a sentence
    return result.join(" ");
  }
  
  // Examples
  console.log(spinWords("Hey fellow warriors")); // Output: "Hey wollef sroirraw"
  console.log(spinWords("This is a test")); // Output: "This is a test"
  console.log(spinWords("This is another test")); // Output: "This is rehtona test"
  