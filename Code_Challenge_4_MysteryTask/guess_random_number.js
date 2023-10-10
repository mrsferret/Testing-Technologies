// App to allow the users to guess a randomly-generated integer between
// 1 - 100 by entering it onto the screen
// This guess will be compared to a randomly generated integer  and
// an appropriate message will be output to say if the guess is higher
// lower or equal to this
// user's can exit the app by inputting "x"

//================================================================================-----------------------------------------------------------------
// FUnction to generate a random integer between an input min and max val
//============================================================================
// Notes:
// Math.random() returns a random number(dec) between 0 (included) and 1 (excluded)
//-----------------------------------------------------------------
// Math.floor() rounds the decimal number down to the nearest
// integer, effectively ensuring we have an integer
//-----------------------------------------------------------------

// so effectively we are using Math.random to generate a random number
// between 0 (included) and 1 (excluded). We can combine this with
// Math.floor to ensure we return an integer.

//const random_int = Math.floor(Math.random() * 101) + 1;
function get_random_int(min_val, max_val) {
  return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}

// const random_int = Math.floor(Math.random() * (max - min + 1) ) + min;
random_int = get_random_int(1, 100);

console.log(random_int);
