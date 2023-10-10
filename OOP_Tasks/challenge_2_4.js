// Challenge 2

// Coding Task 4 - Polymorphism

// In order to implement the polymorphism principle, you will create a User
// class that commits the classes
// that inherit from it to calculate the number of scores that a user has
// depending on the number of articles
// that he has authored or edited.

// On the basis of the User class, we are going to create the Author and
// Editor classes, and both will calculate the number of scores with the
// method calcScores(), although the calculated value will differ between
// the two classes.

// 1. Add to the User class the methods to set and get the number of articles:
//    setNumberOfArticles(int numberOfArticles)
//    getNumberOfArticles()

// 2. Add to the User class a third method:

//      calcScores(), that performs the scores calculations separately
//      for each class.

// 3. Create an Author class that inherits from the User class.

//    In the Author create a calcScores() method that returns the number
//    of scores from the following calculation:

//       numberOfArticles * 10 + 20

// 4. Create an Editor class that inherits from the User class.

//    In the Editor create a calcScores() method that returns the number
//    of scores from the following calculation:

//       numberOfArticles * 6 + 15

// 5. Create an object, author, from the Author class, set the number of
//    articles to 8, and print the scores that the author gained.

// 6. Create another object, editor, from the Editor class, set the number
//    of articles to 15, and print the scores that the editor gained.

class User {
  constructor(numberOfArticles) {
    this._numberOfArticles = numberOfArticles;
  }

  // setter methods
  set numberOfArticles(newnumberOfArticles) {
    this._numberOfArticles = newnumberOfArticles;
  }

  // getter methods
  get numberOfArticles() {
    return this._numberOfArticles;
  }

  calcScores() {}
}

class Author extends User {
  calcScores() {
    return this.numberOfArticles * 10 + 20;
  }
}

class Editor extends User {
  calcScores() {
    return this.numberOfArticles * 6 + 15;
  }
}

const author = new Author(8);
console.log("Author Scores:", author.calcScores());

const editor = new Editor(15);
console.log("Editor Scores:", editor.calcScores());
