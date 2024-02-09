// creating an object constructor and assigning values to it
let obj = { prop: function () {}, name: "adam" };

// Displaying the properties of the object created
console.log(obj);

// Updating the properties of the object
obj.name = "billy";
delete obj.prop;
// Displaying the updated properties of the object
console.log(obj);

// Freezing the object using object.freeze() method
let o = Object.freeze(obj);

// Updating the properties of the frozen object
obj.name = "chris";

// Displaying the properties of the frozen object -->
console.log(obj);
