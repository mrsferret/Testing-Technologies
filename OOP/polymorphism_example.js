class Animal {
  makesSound() {
    console.log("Animal makes sound");
  }
}

class Duck extends Animal {
  makesSound() {
    console.log("Quack Quack");
  }
}

class Cat extends Animal {
  makesSound() {
    console.log("Meow Meow");
  }
}

const cat = new Cat();
cat.makesSound(); // Meow Meow

const duck = new Duck();
duck.makesSound(); // Quack Quack
