
//  Module pattern in JS
//  The module pattern encapsulates 'privacy', state and organization using closures
//  Protects pieces from leaking to global scope
var app = (function(){
  'use strict'; // execute javascript in strict mode

  let fetchData = function() {
      // Ajax call with fetch API
      fetch('https://dog.ceo/api/breeds/list/all')
          .then( function(response) {
              if(response.status !== 200){
                  console.log("Error: " + response.status);
                  return;
              }
              return response.json();
          })
          .then( function(data) {
              console.log('Request successful');
              console.log('data :>> ', data);
          })
          .catch( function(error) {
              console.log('Request failed', error)
          });
  }

  //public functions and variables
  return {
    fetchData: fetchData
  }
}());

app.fetchData();

// TODO
// * adapt code to use arrow function syntax
// * render loaded data in items list
// * 

function foo(b) {
    var a = 5;
    return a * b + 100;
}

function bar(x) {
    var y = 3;
    return foo(x * y);
}

console.log(bar(3));

function baz() {
    baz();
}

baz();