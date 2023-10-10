// Define the User class
class User {
  // Constructor
  constructor(name, email, age) {
    this._Name = name;
    this._email = email;
    this._age = age;
  }

  hello() {
    
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  getAge() {
    return "User age is ${this._age}";
  }
}

// create new object

const user = new User("John", "john@mail.com", 34);

console.log(user.name);

user.name = "James";

console.log(user.name);
