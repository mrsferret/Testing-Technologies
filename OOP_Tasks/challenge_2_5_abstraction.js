// Challenge 2
// Coding Task 5 - Abstraction
//=================================================================================================================
// Abstraction is an extension of encapsulation that uses classes and objects, which contain data and code,
// to hide the internal details of a program from its users. This is done by creatinga layer of abstraction between the user and
// the more complex source code  which helps protect sensitive information store withing the source code
// ie we can hide the implementation detail of a method and only expose the important things or attributes ti the user
// In OOP
//  - a class is like a blueprint for creating objects, like a recipe
//  - methods are functions defined inside the class. They are the actions an object can perform
//  - objects are instance created based on a class.
//
// An Abstract class
//  - is like a partial blueprint. It's not meant to be fully used on its own. It is designed to be extended by other classes
//  - can have regular methods with some default behaviour
//  - can have abstract methods which are methods that are declared but have no implementatopm

// Abstract Method
//  - is like a placeholder for a method. It's declared in the abstract class but doesn't have any code inside it
//  - when a class extends from an abstract class it must provide implementations for all the abstract methods declared in
//  - the parent abstarct class

// Why use them?
// - help ensure that specific behaviour is implemented in child classes
// - they are useful when you have a set of classes that share some common methods but also have unique behaviours. The common
//   mwthods can go in the abstract class while each child class provides its own implementation for the abstract methods
//
// Simply - abstract classes and methods ensure that different objects (like circles and rectangles) of related types follow
// certain rules while allowing each object to have its own unique behaviour

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
