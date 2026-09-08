console.log("#### start demo call stack and hoisting ####");

/**
 * WINDOW - OBJECT
 * everything defined in global context
 * is attached to the window object
 */

/* console.log('window :>> ', window);

//global variables
var myName = "Jane";

//calling global functions
window.greetUser();
greetUser();

function greetUser(){
    var myName = "John";
    console.log(`Hello ${myName}`);
    console.log(myName);         // John
    console.log(window.myName);  // Jane
} */


//console.log('global :>> ', global);

/*******
 * 1. HOISTING example
 * 
 *******/

/* var myVar = "A";

var aFunction = (() => {    // IIFE - Immediately Invoked Function Expression
    var myVar = "B";

    return () => {
        console.log(`myVar: ${myVar}`); 
        console.log('this in aFunction :>> ', this);
    }
})();

aFunction(); */





/*******
 * 2. HOISTING example
 * 
 *******/

/* function greetInEnglish(){
    console.log("Hello " + firstName);  
}

function greetInSpanish(){
    console.log("Hola " + firstName);   
}

let firstName = "John";
greetInEnglish();
greetInSpanish(); */




/*******
 * 3. HOISTING example
 * 
 *******/

/* function greetInEnglish2(){
    console.log("Hello " + name);  
    name ="Polo";
    //console.log(this);
    greetInSpanish2();
}

function greetInSpanish2(){
    console.log("Hola " + name); 
    //console.log(this);
}

var name = "Marco";
greetInEnglish2(); */


/******
 * THIS / FEC example
 * this inside a function exposes its
 * current execution context
 * *****/
/* function greetInFrench(){
    console.log("Bonjour " + this.name);
    console.log('this in greetInFrench :>> ', this);
}

const frenchMessage = {
    name: 'Amélie',
    greetInFrench
}

frenchMessage.greetInFrench(); */
