
/**
 * WINDOW - OBJECT
 * everything defined in global context
 * is attached to the window object
 */
console.log(window);

//global variables
var globalVar = 2;

//calling global functions
window.greetUser();
greetUser();

function greetUser(){
    var globalVar = 3;
    console.log("Hello User");
    console.log(globalVar);         // 3
    console.log(window.globalVar);  // 2
    console.log("---------------");
}

/*******
 * Hoisting
 * Code Execution
 * Call stack
 * Scope Chain
 * 
 *******/

    function greetInEnglish(){
        console.log("Hello " + firstName);  // 
    }

    function greetInSpanish(){
        console.log("Hola " + firstName);   //
    }

    var firstName = "John";
    // this works because firstName was hoisted
    greetInEnglish();
    greetInSpanish();

    




    function greetInEnglish2(){
        // var == undefined
        console.log("Hello " + name);   // undefined
        let name ="Polo";
        greetInSpanish2();
    }

    function greetInSpanish2(){
        console.log("Hola " + name); // marco
    }

    var name = "Marco";
    greetInEnglish2();
 