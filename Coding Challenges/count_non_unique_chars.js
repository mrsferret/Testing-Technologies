// removes unique chars from a string and returns non-unique chars
function duplicateCount(text) {
  // convert input string to all lowercase
  //lower_case_string = text.toLowerCase();
  sorted_string = text.toLowerCase().split("").sort().join("");
  console.log("sorted string: ", sorted_string);
}
text = "addkbsS";
duplicateCount(text);
