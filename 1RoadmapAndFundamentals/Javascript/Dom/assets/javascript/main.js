
//Module pattern in JS
//  The module pattern encapsulates 'privacy', state and organization using closures
//  Protects pieces from leaking to global scope
var app = (function(){
    'use strict'; // execute javascript in strict mode. Eg: usage of undeclared variables is not allowed.

    let initListOfItems = function(){
        let listContainer = document.getElementById("item-list");   //get the ul element
        
        // create 5 elements and append them to the list container
        for(let i = 1; i <= 5; i++){
            let listItem = _createListItem("Item " + i, "Add to Wishlist");
            listContainer.append(listItem);  //append list item to ul container
        }
        
        /*
        // Alternative: write innerHtml as a string value
        // Caution! XSS attacks!
        // Use libraries like DOMPurify
        let html = '';

        for(let i = 1; i <= 5; i++){
            html += '<li>' + 
                    '   Item ' + i + 
                    '   <button class="btn-light">Add to Wishlist</button>' +
                    '</li>';
        }
        listContainer.innerHTML = html
        */
    };

    /**
     * Creates a list element with specific text content and btn text
     * Returns the created element
     * @param {String} itemText 
     */
    let _createListItem = function(itemText, btnText){
        let li = document.createElement("li");      // creates a list element (node)
        let btn = document.createElement("button"); // creates a button element

        li.textContent = itemText;      // sets the textcontents of li
        btn.classList.add("btn-light"); // adds a class to the button element
        btn.textContent = btnText;      // sets the button text
        btn.addEventListener("click", function(){ app.addItemToWishlist(this); });  // adds an eventlistener to the button with a public function from app

        li.append(btn); // appends the list element with the button

        return li;
    }

    /**
     * Adds a new list item to the ul container
     */
    let addNewItem = function(){
        let listContainer = document.getElementById("item-list");   //get the ul element
        let cnt = document.getElementById("item-list").childElementCount + 1;   //count the child elements and add 1 to get proper item value

        let newItem = _createListItem("Item " + cnt, "Add to Wishlist");   //create the list element
        listContainer.append(newItem);  //append it to ul
    }

    let addItemToWishlist = function(btnElement){
        let parentListItem = btnElement.closest("li");
        let clonedItem = parentListItem.cloneNode(true);    //clone the li node -> this removes all eventListeners from childnodes!

        let btn = clonedItem.getElementsByTagName("button")[0]; //get the button element
        btn.textContent = "x";
        btn.addEventListener("click", function(){ this.closest("li").remove(); })   //click event that removes the list element

        document.getElementById("wishlist").append(clonedItem); //append li element to wishlist
        
    }

    let removeItemFromList = function(btnElement){
        btnElement.closest("li").remove();
    }

    //public functions and variables
    return {
        addNewItem: addNewItem,
        initListOfItems: initListOfItems,
        addItemToWishlist: addItemToWishlist
    }
}());

app.initListOfItems();
