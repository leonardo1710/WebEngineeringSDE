
//  Module pattern in JS
//  The module pattern encapsulates 'privacy', state and organization using closures
//  Protects pieces from leaking to global scope
var app = (function(){

  let getAllBreeds = function() {
      // Get all dog breeds from API
      fetch('https://dog.ceo/api/breeds/list/all')
          .then( function(response) {
            if(response.ok != true){
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
          })
          .then( function(data) {
            // Get random image of each breed
            for (const breed in data.message){
              let imageUrl = "";
              imageUrl = getRandomImageOfBreed(breed);

              // Render dog image and name in html
              const container = document.getElementById("all");

              const divElement = document.createElement("div");
              divElement.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.2)";
              divElement.style.padding = "2em";

              const nameElement = document.createElement("p");
              nameElement.textContent = breed;
              nameElement.style.color = "#66b2b2";

              const imageElement = document.createElement("img");
              imageElement.width = "200";
              imageElement.src = imageUrl;

              divElement.appendChild(nameElement);
              divElement.appendChild(imageElement);
              container.appendChild(divElement);
            }
          })
          .catch( function(error) {
              console.log(error);
          });
  };

  let getRandomImageOfBreed = function(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then( function(response) {
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then( function(data) {
        console.log('breed images :>> ', data);
        return data.message;
      })
      .catch( function(error) {
        console.log(error);
      });
  }

  //public functions and variables
  return {
    getAllBreeds: getAllBreeds
  }
}());

app.getAllBreeds();

