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
