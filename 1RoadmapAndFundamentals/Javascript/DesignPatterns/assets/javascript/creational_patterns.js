/** Creational Patterns */

// Idea of "creating new things", eg. new objects.
var newObject = {}; // or
var newObject = Object.create(null); // or
var newObject = new Object();

//adding properties
newObject.prop = true;
newObject["prop2"] = 1;
Object.defineProperties(newObject, {
    "someKey": {
        value: "test",
        writable: true
    },
    "anotherKey": {
        value: "cannot be changed",
        writable: false    //value cant be changed
    }
})

//console.log('newObject :>> ', newObject);

newObject.someKey = "test2";
newObject.anotherKey = "change value";

//console.log('newObject :>> ', newObject);


/**
 * Constructor Pattern
 */

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString());

/**
 * Singleton Pattern
 */

var Singleton = (function () {
    var instantiated;
    
    function init() {
        // singleton here
        return {
            publicMethod: function () {
                console.log('hello world');
            },
            publicProperty: 'test'
        };
    }
    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();


/**
 * Module Pattern
 * 
 * The module pattern encapsulates 'privacy', state and organization using closures
 * Protects pieces from leaking to global scope
 */

// class notation
class App {
    #myPrivateVariable = 0;

    #myPrivateMethod = function(textToLog){
        console.log(textToLog);
        console.log(this.#myPrivateVariable);
    }

    myPublicFunction = function(){
        console.log("I am public");
        this.#myPrivateVariable++;
    }

    getVar = function(){
        return myPrivateVariable;
    }
}

let app = new App();
app.myPublicFunction();

// Closure notation e.g. self invoking function
var app2 = (function(){
    'use strict'; // execute javascript in strict mode. Eg: usage of undeclared variables is not allowed.

    let myPrivateVariable = 0;
    
    let myPrivateMethod = function(textToLog){
        console.log(textToLog);
    }

    let myPublicFunction = function(){
        console.log("I am public");
        this.myPrivateVariable++;
    }

    let getVar = function(){
        return myPrivateVariable;
    }

    //public
    return {
        publicVariable: "I am a public variable",
        myPublicFunction: myPublicFunction,
        getVar: getVar
    }
}());


app2.myPublicFunction();
console.log(app2.publicVariable);
console.log(app2.getVar());