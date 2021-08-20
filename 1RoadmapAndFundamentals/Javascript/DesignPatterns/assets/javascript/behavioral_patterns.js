
/**
 * Observer Pattern
 */

// define a class
class Observable {
    // each instance of the Observer class
    // starts with an empty array of things (observers)
    // that react to a state change
    constructor() {
      this.observers = [];
    }
  
    // add the ability to subscribe to a new object / DOM element
    // essentially, add something to the observers array
    subscribe(f) {
      this.observers.push(f);
    }
  
    // add the ability to unsubscribe from a particular object
    // essentially, remove something from the observers array
    unsubscribe(f) {
      this.observers = this.observers.filter(subscriber => subscriber !== f);
    }
  
    // update all subscribed objects / DOM elements
    // and pass some data to each of them
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
}

// some DOM references
const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');

// some actions to add to the observers array
const updateP1 = function(text){p1.textContent = text};
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// instantiate new Observer class
const myObserver = new Observable();

// subscribe to some observers
myObserver.subscribe(updateP1);
myObserver.subscribe(updateP2);
myObserver.subscribe(updateP3);

// notify all observers about new data on event
input.addEventListener('keyup', e => {
  myObserver.notify(e.target.value);
});