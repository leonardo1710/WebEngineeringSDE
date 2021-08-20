
/**
 * Decorator Pattern
 * 
 * 
 * Objects can be wrapped or 'decorated' with new behavior and
 * then continue to be used without needing to worry about the base 
 * object being modified
 */

 // What we're going to decorate
function MacBook() {
    this.cost = function () { return 997; };
    this.screenSize = function () { return 13.3; };
}

// Decorator 1
function Memory( macbook ) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}
// Decorator 2
function Engraving( macbook ){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 200;
    };
}
// Decorator 3
function Insurance( macbook ){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 250;
    };
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost()); //1522
console.log(mb.screenSize()); //13.3

