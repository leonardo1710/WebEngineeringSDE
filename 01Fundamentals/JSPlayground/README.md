# JS Playground Exercise
Exercise to practice advanced JS concepts in the course of Web Engineering. 

## Application
The given playground contains some bugs and bad JS coding practices for you to fix. First take a look into the component files and get a grasp of the inner working of the provided code.

The intended functionality is as follows:
* Consume data from the [Dog API](https://dog.ceo/dog-api/). 
* When the page is first loaded it should fetch all dog breeds from the API
* After all breeds are fetched, the app should 1) fetch an image for each breed and 2) render the breed and image in HTML

Error cases:
* if there are errors with fetching (e.g. no internet connection, url not found, http status errors, ...) there should be a proper message for the user
* if the returned image url from the api does not exist, the image should not be loaded. "No image available" should be rendered in HTML instead.

## Tasks
Fix application code, answer the questions and submit them in your learning diary:
* Fix the image loading problem and adapt the code to use ``async/await`` instead of callbacks (`then()`). (3pt)
  * Why are the images not rendered in html?
* Refactor the functions to use arrow function syntax (`() => {}`) instead of `function()`. (1pt)
* Add proper error handling to the code (`try/catch` all the way). (2pt)
* Check image url availability before rendering the images in html. (1pt)
* Eliminate all the **bad coding practices** you can find. (2pt)
  * What bad practices did you find? Why is it a bad practice and how did you fix it?
* What problems might occur when using the app? Think of problems regarding the `Refresh` button in combination with asynchronous operations. (1pt)
