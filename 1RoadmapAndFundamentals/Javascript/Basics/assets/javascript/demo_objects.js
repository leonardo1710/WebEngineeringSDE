/**
 * Objects in Javascript
 */

 /**
  * Objects are created with brackets {...} and with an optional list of properties.
  * Properties are key:value pairs, where key is a string and value can be anything. 
  */

  let obj = new Object();   // constructor syntax
  let obj2 = {};            // literal syntax

  let student = {
      name: "Don",
      age: 40
  }

  console.log(student.age);     //get value of age
  console.log(student["age"]);  //alternative

  //add property
  student.isAdmin = true;

  //update property
  student.name = "John";
  student["name"] = "Jane";

  console.log('student :>> ', student); // prints an object

  //remove property
  delete student.age;

  //computed properties
  let userInput = "count";

  student[userInput] = 3;   //adds a key with value of userInput

  console.log('student :>> ', student);

  //property shorthand
  function createStudent(name, age){
      return {
        name,   //property name == variable name
        age
      }
  };

  let student2 = createStudent("Bart", 10);

  console.log('student2 :>> ', student2);

  //check if property exists
  console.log("age" in student2);       //true
  console.log("lastname" in student2);  //false

  //iterate properties
  for(let key in student2){
      console.log(key + ": " + student2[key]);
  }

  // objects can contain further objects
  const user = {
      name: "Lisa",
      age: 8,
      address: {
          city: "Springfield",
          country: "USA"
      },
      sayName: function(sayAge){     // functions are objects too
          console.log("My name is " + this.name);
          sayAge(this.age);
      }
  }

  // we can pass functions to functions - because they are objects
  user.sayName(sayAge);

  function sayAge(age){
    console.log("I am " + age + " years old.");
  }

  // arrays are objects
  let fruits = ["banana", "apple", "lemon"];

  console.log("Type of array: " + typeof fruits);

  // better
  let fruits2 = [
      "banana",
      "apple",
      "lemon"
  ];

  let fruits3 = new Array("banana", "apple", "lemon");

  //try to avoid "new Array" syntax!
  var myArr = new Array(40, 100);   // Creates an array with two elements (40 and 100)
  var myArr2 = new Array(40);        // Creates an array with 40 undefined elements!

  console.log('myArr :>> ', myArr);
  console.log('myArr2 :>> ', myArr2);

  //editing
  fruits2[0] = "pear";

  //iteration
  fruits3.forEach(function(item){
    console.log(item);
  })

  //iteration with index
  fruits3.forEach(function(item, index){
    console.log(item + " " + index);
  })

  //adding elements
  fruits3.push("papaya");






