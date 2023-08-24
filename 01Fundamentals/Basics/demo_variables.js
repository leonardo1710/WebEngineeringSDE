/**
 * Variable Declarations in Javascript
 * 
 * var, let and const
 * 
 */

/**
 * Var Keyword
 */

  // var is defined globally and can be accessed from anywhere
  var greetingText = "Hello John";

  if(true){
    //multiple declarations possible
    var greetingText = "Another declaration is allowed with var keyword"; //Error-prone!
  }

    //Immediately-invoked Function
    (function(){
        //function scope
        var greetingText = "Some other text";   //this var will be deleted after function execution
        var localScope = "This var is defined in local scope";
        console.log(greetingText);
    })()

    console.log(greetingText);  // "Another declaration is allowed with var keyword"
    //console.log(localScope);    // Reference Error

    /* Hoisting of var */
    // var variables are hoisted to the top of their scope and initialized with a value of undefined.
    console.log(hoistVar);      // undefined
    var hoistVar = "hello";


/**
 * Let Keyword
 */

  // let is block scoped
  let lastName = "Doe";     // this let is defined globally and any function can use it

  if(true){
      let lastName = "Miller";
      let firstName = "Jane";
      console.log(lastName); // Miller
  }

  console.log(lastName);    // Doe
  //console.log(firstName);   // firstName is not defined

  // let can be updated within its scope but not redeclared
  let myVar = "Hallo";
  myVar = "Hola";
  //let myVar = "Hello";  // Identifier 'myVar' has already been declared

  // No error in different scopes
  if(true){
      let myVar = "Hello";
      console.log(myVar);
  }

  console.log(myVar);

  /* Hoisting of let */
  // let variables are hoisted to the top of their scope and NOT initialized
  //console.log(myVar2);  // Cannot access 'myVar2' before initialization
  let myVar2 = "init";  

/**
 * Const Keyword
 */

  // Like let declarations, const declarations can only be accessed within the block they were declared.
  if(true){
    const constant = "Hello";
    console.log(constant);
  }

  //console.log(constant);    // constant is not defined

  // constant cannot be updated or redeclared
  const constantVar = "Psst";
    // not possible:
    //constantVar = "Pssssssst";    // "TypeError: Assignment to constant variable."
    //const constantVar = "Test";   // "Identifier 'constantVar' has already been declared"

  // const objects cannot be updated, but it's properties can!
  const student = {
      firstName: "John",
      age: 24
  }

  student.firstName = "Jane";

  // arrays are objects!
  const myArray = [1, "text", true, 20.3];
  myArray[2] = false;
  console.log(myArray);

  /* Hoisting of const */
  // const variables are hoisted to the top of their scope and NOT initialized
  //console.log(myConstant);  // Cannot access 'myConstant' before initialization
  let myConstant = "init";  

  

