// removes unique chars from a string and returns non-unique chars
const removeUniqueChars = (str1, str2) => {
  let merged = str1 + str2;
  const duplicated = merged.split("").filter((value, index, array) => {
    return array.indexOf(value) !== index;
  });
  console.log("Duplicated: ", duplicated);
  console.log("Num duplicates: ", duplicated.length);
};

removeUniqueChars("cba", "bcd");
