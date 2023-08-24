console.log("#### start demo call stack and hoisting ####");

/**
 * WINDOW - OBJECT
 * everything defined in global context
 * is attached to the window object
 */
console.log(window);

//global variables
var globalVar = "Jane";

//calling global functions
window.greetUser();
greetUser();

function greetUser(){
    var globalVar = "John";
    console.log(`Hello ${globalVar}`);
    console.log(globalVar);         // John
    console.log(window.globalVar);  // Jane
}


var myVar = "A";

var aFunction = (() => {
    var myVar = "B";

    return () => {
        console.log(`myVar: ${myVar}`); 
    }
})();

aFunction();




/*******
 * Hoisting
 * Code Execution
 * Call stack
 * Scope Chain
 * 
 *******/
function greetInEnglish(){
    console.log("Hello " + firstName);  
}

function greetInSpanish(){
    console.log("Hola " + firstName);   
}

var firstName = "John";
greetInEnglish();
greetInSpanish();







function greetInEnglish2(){
    // var name = undefined
    console.log("Hello " + name);  
    var name ="Polo";
    console.log(this);
    greetInSpanish2();
}

function greetInSpanish2(){
    console.log("Hola " + name); 
    console.log(this);
}

var name = "Marco";
greetInEnglish2();



function greetInFrench(){
    console.log("Bonjour " + name);
    console.log(this);
}

const frenchMessage = {
    name: 'my french message',
    greetInFrench
}

frenchMessage.greetInFrench();



console.log("#### end demo call stack and hoisting ####");