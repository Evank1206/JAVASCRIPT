// should not over write unneccessry function again
function Animal(name){
    this.whatAnimal = name;
    this.action = function(){
        console.log(this.whatAnimal + " eats");
    }
}

let a1 = new Animal("Camle");
a1.action();
// console.log(a1.__proto__);


let a2 = new Animal("Cow");
a2.action();

let a3 = new Animal("Horse");
a3.action();

console.log("...........................");

// not DRY constructor function inside 

function Hun(name){
    this.who = name;
}
Hun.prototype.action = function(){
    console.log(this.who + " drinks");
}

let b1 = new Hun("AAA");
b1.action();
// console.log(b1.__proto__);
// b1.telant = function(){
//     console.log(this.who + " singer"); 
// }
// b1.telant()

let b2 = new Hun("BBB");
b2.action();

let b3 = new Hun("CCC");
b3.action();

// agrument baihgui bol ingej bolno

let x = new Animal;
