class User {
  constructor(name, email, age) {
    this._name = name;
    this._email = email;
    this._age = age;
  }
// Getter methods
  get name() {
    return this._name;
  }
  
// setter methods
  set name(newName) {
    this._name = newName;
  }

  getAge() {
    return `User age is ${this._age}`;
  }
}

const user = new User("John", "john@mail.com", 34);

console.log(user.name); // John

user.name = "James";

console.log(user.name); // James
