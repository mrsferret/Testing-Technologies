// Challenge 2

// Coding Task 1 - Classes and Objects

// Write the class User and add the properties.
// Add the method that says hello.
// Create the first instance, and call it user1. Use the new
// keyword to create an object from the class.
// Set the values for the first and last name to user1.

// firstName = 'John'
// lastName = 'Doe'

// Get the user first and last name, and print it to the screen.
// Use the hello() method with the first and last name
// variables in order to say hello to the user:

// Expected result:
// hello, John Doe

// Add another object, call it user2, give it a first name of
// 'Jane' and last name of 'Doe', then say hello to the user.

// Expected result:
// hello, John Doe
// hello, Jane Doe

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  hello() {
    return `hello, ${this.firstName} ${this.lastName}`;
  }
}

// Create user1
const user1 = new User("John", "Doe");
console.log(user1.hello()); // Output: hello, John Doe

// Create user2
const user2 = new User("Jane", "Doe");
console.log(user2.hello()); // Output: hello, Jane Doe
