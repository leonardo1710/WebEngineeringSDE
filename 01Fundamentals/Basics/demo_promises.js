
const posts = [
    { post_id: 1, post_title: 'First Post' },
    { post_id: 2, post_title: 'Second Post' },
    { post_id: 3, post_title: 'Third Post' },
  ];
  
  const comments = [
    { post_id: 2, comment: 'Great!'},
    { post_id: 2, comment: 'Nice Post!'},
    { post_id: 3, comment: 'Awesome Post!'},
  ];


const getPost = (id, callback) => {
    const post = posts.find( post => post.post_id === id);
    if(post) {
        callback(null, post);
    } else {
        callback("No such post found", undefined);
    }
};
   
const getComments = (post_id, callback) => {
    const result = comments.filter( comment => comment.post_id === post_id);
    if(result) {
      callback(null, result);
    } else {
      callback("No comments found", undefined);
    }
}


/** Example of CALLBACK HELL
 * 
 *  Nesting Callback functions inside other Callback functions and so on...
 */
getPost(2, (error, post) => {
    if(error) {
     return console.log(error);
    }
    console.log('Post:', post);
    getComments(post.post_id, (error, comments) => {
        if(error) {
          return console.log(error);
        }
        console.log('Comments:', comments);
    });
});



/** WHAT are PROMISES?
 * 
 * A promise represents an asynchronous operation whose result will come in the future.
 * 
 * Before ES6, there was no way to wait for something to perform some operation. For example, when we wanted to make an API call, there was no way to wait until the results came back.
 * 
 * A Promise can go through three states:
 *      Pending
 *      Fulfilled
 *      Rejected
 */

// Create a Promise 
// The Promise constructor takes a function as an argument and that function internally receives resolve and reject as parameters.
// When we create a promise, it’s in a pending state. When we call the resolve function, it goes in a fulfilled state, and if we call reject it will go into the rejected state.
const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        const sum = 4 + 5 ;//+ 'a';
        if(isNaN(sum)) {
          reject('Error while calculating sum.');
        } else {
          resolve(sum);
        }
    }, 2000);
});

promise.then(result => {
    console.log(`The promise result is: ${result}`); // 9
}).catch( error => {
    console.log(error);
});


/** What is PROMISE CHAINING and Why is it Useful? 
 * 
 * In promise chaining, we can attach multiple .then handlers in which result of previous .then handler is automatically passed to the next .then handler.
 * Using promise chaining helps to avoid the problem of callback hell which we have seen previously.
 * Also, when using promise chaining, we can attach only one.catch handler at the end of all the .then handlers. 
 * If any of the in-between promises fail, the last .catch handler will be automatically executed.
*/

promise.then(result => {
    console.log('first .then handler');
    return result;
}).then(result => {
    console.log('second .then handler');
    console.log(result);
}).catch(error => {
    console.log(error);
});

/** How to Use Async/Await in JavaScript
 * 
 * Async/await gives developers a better way to use promises.
 */

// To use async/await, you need to create a function and add the async keyword before the function name using ES5 function declaration syntax
const sayHello = async () => {
    return 'Hello';
};
  
sayHello(); // returns a Promise
// to get the actual string:
sayHello().then( result => {
    console.log(result);
})

// The sayHello() function from above is the same as:

const sayHello2 = function() {
    return new Promise((resolve, reject) => {
        resolve('Hello');
    });
}

// As well as:

const sayHello3 = function () {
    return Promise.resolve('Hello');
};


/** Resolve Callback Hell example from before with async/await and promises
 * 
 */

const getPost2 = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  // simulate asynchronous request
            const post = posts.find( post => post.post_id === id);
    
            if(post) {
                resolve(post);
            } else {
                reject({error: 'No such post found', undefined});
            }
            return post;
        }, 2000);
    })    
};
   
const getComments2 = async (post_id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  // simulate asynchronous request
            const result = comments.filter( comment => comment.post_id === post_id);
            if(result) {
                resolve(result);
            } else {
                reject({error: "No comments found", undefined});
            }
        }, 2000);
    })
}

const printResults = async () => {
    try {
        let post = await getPost2(2);   // get the post
        let post_comments = await getComments2(post.post_id);   // get comments of post loaded before
        
        console.log(post);
        console.log(post_comments);
    } catch (error) {
        console.log(error)
    }
}

printResults();


/*

var myPromise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
    let x = false;
    if (x) { // everything turned out fine
        // timeout to simulate async
        setTimeout(() => resolve("it worked"), 1000);
    } else {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    }
});

myPromise.then(
    result => console.log(result)
).catch(
    error => console.log(error)
);


// Chaining of promises
var myPromise2 = new Promise(function(resolve, reject) {
    let x = true;
    if (x) {
        setTimeout(() => resolve(3), 1000);
    } else {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    }
});

myPromise2.then(function(result){ 
    console.log("First: " + result);
    return result * 3
}).then(function(result){
    console.log("Second: " + result);
}).catch(function(error){
    console.log(error);
});


// Async Await
async function f() {
    try {
      let response = await myPromise2;  // wait here until myPromise2 has settled
      console.log('response :>> ', response);
    } catch(err) {
      console.error(err);
    }
}
  
f();


*/