// Challenge 2

// Coding Task 2 - Encapsulation

// Get and Set Methods
// Using the User class created challenge_2_1:
//
// Add the class constructor.
// Add the getters and setters methods after the class constructor.
// Change your hello() method to return 'Hello World!'.
//
// Add the following:
// 1. Create an user object called user that will represent the User class.
// 2. Use the setters methods to set the firstName and lastName instance
//    variables of your user object.
// 3. Use getters methods to retrieve the firstName and lastName Strings
//    from the user object and add a blank space in between.

class User {
  constructor(name, lastName) {
    this._name = name;
    this._lastName = lastName;
  }
  // Getter methods
  get name() {
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }

  // setter methods
  set name(newName) {
    this._name = newName;
  }

  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  hello() {
    //return `User age is ${this._age}`;
    return "Hello World";
  }

  myname() {
    return `My name is ${this._name} ${this._lastName}`;
  }
}

const user = new User("John", "Fisher");

console.log(user.name); // John
console.log(user.lastName); // Fisher

console.log(user.hello());

user.name = "James";

console.log(user.myname()); // James
