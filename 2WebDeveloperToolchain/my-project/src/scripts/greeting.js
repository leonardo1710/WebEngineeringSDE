/**
 * This file demonstrates native Javascript modules
 * */

function hello() {
  console.log('Hello World from named exports!');
}

function goodbye() {
  console.log('Goodbye');
}

export { hello, goodbye }; // export multiple functions by name
