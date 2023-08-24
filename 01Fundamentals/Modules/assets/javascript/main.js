// main.js
import {sayHi} from './modules/helperFunctions.js'; // default name
import {sayBye as bye} from './modules/helperFunctions.js';// with name

import User from './modules/user.js';

let user = new User("Jane");

sayHi(user.name);

var app = (function(){
  'use strict';

  let myVar = 0;
  let user = new User('Jane');

  let greetUser = function(){
    console.log(user);
    sayHi(user.name);
  }

  let sayByeToUser = function(){
    bye(user.name);
  }

  return{
    myVar,
    greetUser: greetUser,
    sayByeToUser
  }
}());

app.greetUser();
app.sayByeToUser();