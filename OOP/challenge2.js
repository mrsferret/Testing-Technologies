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
