




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

