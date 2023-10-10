// Challenge 2

// Coding Task 5 - Abstraction

// In this task , we will create an abstract User class and two child classes (Admin and Viewer classes) that inherit from the abstract class.

// 1. Create an abstract class with the name of User:

//    Add to the class, a property with the name of username.
//    Add to the class, an abstract method with the name of stateYourRole().
//    Add to the class, the setter and getter methods to set and get the username.

// 2. Create an Admin class that inherits the User abstract class:

//    Add to the class a method stateYourRole() and let it return the string "admin".

// 3. Create another class, Viewer that inherits the User abstract class:

//    Add to the class a method stateYourRole() and let it return the string "viewer".

// 4. Create an object, admin, from the Admin class, set the username to
//    "Balthazar", and make it return the string "admin".

// 5. Create an object, viewer, from the Viewer class, set the username to
//    "Melchior", and make it return the string "viewer".

// Create an abstract User class
class User {
  constructor() {
    this._username = "";
  }

  // Abstract method to be implemented by child classes
  stateYourRole() {}

  // Getter method for username
  get username() {
    return this._username;
  }

  // Setter method for username
  set username(newUsername) {
    this._username = newUsername;
  }
}

// Create Admin class that inherits from User
class Admin extends User {
  stateYourRole() {
    return "admin";
  }
}

// Create Viewer class that inherits from User
class Viewer extends User {
  stateYourRole() {
    return "viewer";
  }
}

// Create an object admin from the Admin class
const admin = new Admin();

admin.username = "Balthazar";
console.log("Admin Role:", admin.stateYourRole());

// Create an object viewer from the Viewer class
const viewer = new Viewer();

viewer.username = "Melchior";
console.log("Viewer Role:", viewer.stateYourRole());
