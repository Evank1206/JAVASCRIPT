// // WITHOUT Constructor function
// function Animal(name) {
//     let x = Object.create(Animal.prototype);
//     x.what = name;
//     x.eat = function(){
//         console.log(this.what + " drinks water");
//     }
//     return x;
// };
// let n = Animal("Cow");
// n.eat();

// console.log("........................");

// // WITH CONSTRUCTOR FINCTION

// function Hun(name) {
//     // let x = Object.create(Animal.prototype);
//     this.who = name;
//     this.diet = function(){
//         console.log(this.who + " drinks juice");
//     }
//     // return x;
// };
// let a = new Hun("Ankhiliun");
// a.diet();

// // should not over write unneccessry function again
// function Animal(name){
//     this.whatAnimal = name;
//     this.action = function(){
//         console.log(this.whatAnimal + " eats");
//     }
// }

// let a1 = new Animal("Camle");
// a1.action();
// // console.log(a1.__proto__);


// let a2 = new Animal("Cow");
// a2.action();

// let a3 = new Animal("Horse");
// a3.action();

// console.log("...........................");

// // not DRY constructor function inside 

// function Hun(name){
//     this.who = name;
// }
// Hun.prototype.action = function(){
//     console.log(this.who + " drinks");
// }

// let b1 = new Hun("AAA");
// b1.action();
// // console.log(b1.__proto__);
// // b1.telant = function(){
// //     console.log(this.who + " singer"); 
// // }
// // b1.telant()

// let b2 = new Hun("BBB");
// b2.action();

// let b3 = new Hun("CCC");
// b3.action();

// // agrument baihgui bol ingej bolno

// let x = new Animal;

////////////////////////////////////////////////////////////////////////////////////////


function Animal(ner){
    this.name = ner;
    
  }
  Animal.prototype.info = function(addr, pho){
    this.address = addr;
    this.phone = pho;
    console.log(this.name + " lives at " + this.address + ", her phone number is " + this.phone + ".");
  }
  
  let func = new Animal("Eva");
  func.info("4322 str", "123456");
  
  func.status = function(gen){
    this.gender = gen;
    this.married = false;
    console.log(this.name + "'s gender is " + this.gender);
    if(this.married !== true){
      console.log(this.name + " is a single");
    }else{
      console.log(this.name + " has boyfriend");
    }
  }
  func.status("male");
  
  let func2 = new Animal("Anna");
  func2.info("1212323 str", "8978798331048");
  func2.status = function(gen){
    this.gender = gen;
    this.married = false;
    console.log(this.name + "'s gender is " + this.gender);
    if(this.married !== false){
      console.log(this.name + " is a single");
    }else{
      console.log(this.name + " has boyfriend");
    }
  }
  func2.status("female");
  
//   console.log(func.__proto__ === func2.__proto__)
//   console.log(func.__proto__ === Animal.prototype)
  
