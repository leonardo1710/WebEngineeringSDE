
//  Module pattern in JS
//  The module pattern encapsulates 'privacy', state and organization using closures
//  Protects pieces from leaking to global scope
var app = (function(){
  'use strict'; // execute javascript in strict mode

  let getDogs = () => {

      // Ajax call with fetch API
      fetch('https://dog.ceo/api/breeds/list/all')
          .then( response => {
              if(response.status !== 200){
                  console.log("Error: " + response.status);
                  return;
              }
              return response.json();
          })
          .then( data => {
              console.log('Request successful');
              showDogs(data.message);
          })
          .catch( error => {
              console.log('Request failed', error)
          });

      
      // Ajax call with XMLHttpRequest Object
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
          let data = JSON.parse(xhttp.responseText);
          showDogs(data.message);
        }
      }
      xhttp.open("GET", "https://dog.ceo/api/breeds/list/all", true);
      xhttp.send();
  }

  let showDogs = function(data){
      let listContainer = document.getElementById("item-list");   //get the ul element
      let count = 0;
      for(let key in data){
          if(count === 10){   //render only 10 dogs
              break;
          }

          let listItem = createListItem(key, "Add to Wishlist");
          listContainer.append(listItem);
          count++;
      }
  }

  /**
   * Creates a list element with specific text content and btn text
   * Returns the created element
   */
  let createListItem = function(itemText, btnText){
      let li = document.createElement("li");      // creates a list element (node)
      let btn = document.createElement("button"); // creates a button element

      li.textContent = itemText;      // sets the textcontents of li
      btn.classList.add("btn-light"); // adds a class to the button element
      btn.textContent = btnText;      // sets the button text
      btn.addEventListener("click", () => addDogToWishlist(btn) );  // adds an eventlistener to the button with a public function from app

      li.append(btn); // appends the list element with the button

      return li;
  }

  let addDogToWishlist = function(btnElement){
      let parentListItem = btnElement.closest("li");
      let clonedItem = parentListItem.cloneNode(true);    //clone the li node -> this removes all eventListeners from childnodes!
      let btn = clonedItem.getElementsByTagName("button")[0]; //get the button element
      btn.textContent = "x";
      btn.addEventListener("click", () =>  removeItemFromList(btn) )   //click event that removes the list element

      document.getElementById("wishlist").append(clonedItem); //append li element to wishlist
  }

  let removeItemFromList = function(btnElement){
      btnElement.closest("li").remove();
  }

  //public functions and variables
  return {
    getDogs: getDogs
  }
}());

