// Define the User class
class User {
  // Constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to say hello
  hello() {
    return `hello ${this.firstName} ${this.lastName}`;
  }
}

// create new object

const user1 = new User("John", "Doe");

console.log(user1.hello());

const user2 = new User("Jane", "Doe");

console.log(user2.hello());
