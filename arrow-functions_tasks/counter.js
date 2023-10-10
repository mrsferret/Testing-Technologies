// Declare variable called counterFunc
// when run it resets the counter to 0 if it exceeds 100, otherwise ir
// increments the counter.

// When you call counterFunc(120), it returns 0, and that value is logged to the
// assigned arrow function to variable. This arrow functop takes 1
// parameter - counter
// '?' is a ternary conditional statement - shorthand way pf writing if... else
let counterFunc = (counter) => (counter > 100 ? 0 : counter + 1);

// calls counterFunc, passing in param of 120
console.log(counterFunc(120));
