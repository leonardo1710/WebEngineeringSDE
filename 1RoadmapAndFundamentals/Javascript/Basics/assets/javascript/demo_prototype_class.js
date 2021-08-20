// Javascript uses a prototypal approach - 
// even with introduction of classes in ECMAScript2015


/** 
 * "Old" approach to write "class"-like in Javascript 
 */ 

// Kind of constructor
function Cat(name){
    this.name = name;
}

Cat.prototype.meow = function meow(){
    console.log(this.name + ' meow!');
}

//calling the object with new keyword
let cat = new Cat("Garfield");
cat.meow();

// if we dont use "new" we will overwrite the window object
/* 
cat2 = Cat("Garfield");
console.log(window.name);
*/


//class notation
class SuperCat extends Cat{
    constructor(name){
        super(name);
        this.superpower = 'ROAR';
    }
    
    meow(){
        super.meow();
    }
    
    static MegaMeow(){
        console.log('MEEEEOOOW!!');
    }
}

let supercat = new SuperCat("Super Garfield");
supercat.meow();

let cat2 = new Cat("Lucy");
delete cat2.__proto__.meow;

console.log('supercat :>> ', supercat);
