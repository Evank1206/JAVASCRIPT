/* TO ES6 CORATION, ARROW FUNCTION, DISSTRUCTE OBJECT, convert DOM elemet to array list, 
findIndex method, SPREAD operator, REST operator, default parameter, new Map() operator, reduce() method, CLASS CONSTRACTOR FUNCTION,*/

// ES5 CORATIONS
const name = "Evank";
let age = 32;
let address = "233 magnolia ave Millbrea City, California";
console.log("My name is " + name + ". I am " + age + " years old. " + " I live in " + address + ".");
// ES6 CORATIONS
console.log(`My name is ${name}. 
I am ${age} years old. 
I live in ${address}.`);

console.log(name.startsWith("E"));
console.log(name.endsWith("n"));

console.log("name ".repeat(1)) //ES5
console.log(`${name} ` .repeat(1)) //ES6
console.log(".....................................")

// ES6 Arrow function 

const year = [1990,1998,2006,1993,1997];

// let process = year.map((el)=>{
//   return 2022 - el;
// });
// console.log(process);
// arrow function type : 1   (if there is passing single argument "el", may write without () )
let process1 = year.map(el => 2020 - el)
console.log(process1);

console.log(".....................................")

// arrow function type : 2  (if there is passing two or more arguments "el, index, arr", may write with () )
let process2 = year.map((el,index) => index + 2021 - el)
console.log(process2);

console.log(".....................................")

// arrow function type : 3  (if there are line of codes, may write using return & `${}`

let process3 = year.map((el, index) => {
  let j = index + 1;
  return `${j} : 2022 - ${el}`;
});
console.log(process3);

console.log(".....................................")

// arrow function define global variable or obj, 
let info = {
   name : "Evank",
   fun : function(){
     let human = {
       name : "JohnSmith",
       great : () => {
         console.log(this.name);
         setTimeout(()=>console.log(`${this.name}: inside of setTimeOut`),5000);
       },
       regularFunc : function(){
         console.log(this.name)
       }
     };
     human.great(); // arrow function's "this" points to that global obj
     human.regularFunc(); //regular function's "this" points to that obj contains itself
   }
};
info.fun();

// desstructure object in ES6
// ES5 METHOD (ARRAY -G ZADLAH)
let ar = ["Evank", 32, "233 magnolia ave", "Millbrea", "CA"];
const ner = ar[0];
let nas = ar[1]; // etc...
console.log("My name is " + ner + ". I'm " + nas + " old."); // etc ...

console.log(".....................................");

// ES6 METHOD (ARRAY -G ZADLAH)
let arr = ["Evank", 32, "233 magnolia ave", "Millbrea", "CA"];
let [firstName, a, add, city, state] = arr;

console.log(`My name is ${firstName}. I'm ${a} , My adresss is ${add} , city is ${city}, state is ${state}`);

// ES6 (OBJ - g ZADLAH)

let obj = {
  name: "Evank",
  persnalInfo: {
    number: "510",
    address: "San Francisco"
  }
};

let {name:ner1, persnalInfo:{number}} = obj;
console.log(ner1, number);

console.log(".....................................")
// if want to change variable's name 
let {name:yes, persnalInfo:{address:aa}} = obj;
console.log(yes, aa)

console.log(".....................................");

function my(){
  return [21,34,56,67];
};

let [aaa, bbb, ccc, ddd] = my();
console.log(aaa, bbb, ccc, ddd) // or
console.log(`${aaa}, nice ${bbb}, writing ${ccc}, on ${ddd}`);

console.log(".....................................");

// ES6 DOM - iin list of Element-g array ruu hurvuuleh 
// for(let i=0; i<box.length; i++){} VS for(const el of box) {}

const boxs = document.querySelectorAll(".box");
console.log(boxs);
// const lala = Array.prototype.slice.call(boxs);
// console.log(boxs);
// ES6
// const lalla = Array.from(boxs)
// boxs.forEach((el)=>{
//   console.log(el);
//   el.style.backgroundColor = "blue";
// });

// boxs.forEach(el=> el.style.backgroundColor = "dodgerblue");
// ES5 WAY
// for(let i=0; i<boxs.length; i++){
//   if(boxs[i].className === "box yellow") continue;
//   boxs[i].textContent = "I'm not yellow";
//   // console.log(boxs[i].className);
// };

// ES6 WAY
for(const el of boxs){
  // console.log(el.className);
  if(el.className === "box yellow") continue;
  //or
  // if(el.className.endsWith === "yellow") continue;
  //or
  // if(el.className.includes === "box active yellow") continue;

  el.textContent = "I'm not yellow";

};

console.log(`...............................................................`)

// ES6 findIndex METHOD
// ES5 indexOf() Method
let arra = [12,6,5,19,22,4,10,9];

let newArr = arra.map(function(el){
  return el >= 18;
});
console.log(newArr);
console.log("index: " + newArr.indexOf(true));
console.log("actual Num: " + arra[newArr.indexOf(true)]);

// ES6 findIndex Method 
let xxx = arra.findIndex((el)=> el >= 18);
console.log(`index: ${xxx}`);
console.log(`actual Num: ${arra.find(el => el >= 18)}`);

console.log(`...............................................................`)


// ES6 SPREAD operator // DOM elementiig array ruu hurvuulnej array ZADLANA

const newDivlist = document.querySelectorAll(".box");
// DOM ELEMENT -G ARRAY LIST RUU HURVUULEH

// const k = Array.prototype.slice.call(newDivlist);
// OR
// const k = Array.from(newDivlist);
// OR
// const k = [...newDivlist];

// console.log(k);

// change(k[0],k[1])
// OR
change(...newDivlist)
function change(a,b){
  a.style.backgroundColor = "dodgerblue";
  b.style.backgroundColor = "orange";
};

// also using "spread operator"

let interpretator = ["typescript", "javaScript", "php", "phyton"];
let compiler = ["java", "c#", "c++"];

let allprogrammingLanguages = [...interpretator, ...compiler];
console.log(allprogrammingLanguages);

console.log(`...............................................................`)


// ES6 REST OPERATOR 
// ES5
function findAge(){
  console.log(arguments);
  let a = Array.prototype.slice.call(arguments);
  console.log(a);
  a.forEach(function(el){
    el = 2022 - el;
    console.log(el)

  });
};
findAge("hey",1999,2010,2000,1996,1998);

// ES6 rest its reunited it to array 

function findAge2(...years){
  years.forEach(el => console.log(`ages: ${2022 - el}`))
}
findAge2(2012,2000,1997,1993);

console.log(`...............................................................`)


// ES6 DEFAULT

// ES6 paramter 
// ES5
function translate(language, lang){
  if(lang === "en")
    switch(lang){
      case "mn" : console.log("Angliar yaj heleh be?  " + language); break;
      case "en" : console.log("how to say " + language); break;
    }
  }
  translate("what is your name?", "en");
  translate("chmag hen gedeg be?", "mn");
  // ES6
  
  function translate2(question = "hhh", language = "mn"){
    switch(language){
      case "mn" : console.log("anglair Sainuu? gehiig yu gedeg ve? " + question); break;
      case "en" : console.log("how to say HI? by mongolian  " + question); break;
    }
  };
  translate2();

console.log(`...............................................................`)

// ES6 Map();

let l = new Map();
l.set(2, "month");
l.set("name", "John");
l.set(true, "age");
console.log(l);

console.log(l.get(true));
l.delete(2);

l.forEach((a,b)=>{
  console.log(a,b)
});

for(const el of l){
  console.log(el)
};

// davhardaagui ugiin toog oloh
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rem libero dolorem et laudantium iure 
aliquam quo vel cupiditate labore numquam, cumque esse placeat optio nostrum voluptatem eveniet repudiandae odit?`;
let textx = text.split(" "); //zaigaar ni zadlaad
let myMap = new Map(); // hooson object uusgeed

textx.forEach(el => myMap.set(el,1)); //uusgesen object ruugaa forEach davtaltaar text ee hiigeed
// textx.forEach(el => myMap.get(el, "lorem"));
// davhardaagui ugiin too 
console.log(myMap.size); // davhtsaagui ugiin toog haruulahs

console.log(`...............................................................`)

// ES6 CONSTRUCTOR FUNCTION


console.log(`...............................................................`);

// REDUCE() to find total amount;  min num;  max num; from the array 
let arr3 = [4,6,3,5,100,7,2,13];

let totalAmount = arr3.reduce((a,b)=> a + b);
console.log(totalAmount)
// es5
let minNum = arr3.reduce((min, b)=>{
  if (b < min) min = b;
  return min;
});
console.log(minNum);
// OR es6
let maxNum = arr3.reduce((max, b)=> b < max ? max : b);
console.log(maxNum);

console.log(`................................................................`);

// ES5 construtor function uusgeh ni
let Income = function(id, desc, val){
  this.id = id;
  this.desc = desc;
  this.val = val;
};
Income.prototype.infoo = function(){
  console.log(this.id + " " + this.desc + " " + this.val);
};
let e1 = new Income(1, "salary", "100000");
e1.infoo();

// ES6 constructor function uusgeh ni using CLASS
class Expenss{
  constructor(id,desc,val){
    this.id = id;
    this.desc = desc;
    this.val = val;
  }
  indo(){
  console.log(this.id + " " + this.desc + " " + this.val);
  };
  // neg l udaa ashigalh ch tiim function baivan daraah baidlaar bichni
  static lalaa(){
    console.log(`this is just function from class constructor`)
  }
};
let i2 = new Expenss(2, "food", "200");
i2.indo();

Expenss.lalaa();

console.log(`...............................................`);

// CLASS construct CLASS function nii udamshil
//super function
class Transaction {
    constructor(id,desc,val){
      this.id = id;
      this.desc = desc;
      this.val = val;
  }
   info(){
    //  using intanceof buyu ene ni tuhain obj g helj baigaa hereg
    let checkType = this instanceof Income2 ? "Income" : "Expense"; 
    console.log(`(${checkType}) ${this.id} ${this.desc} ${this.val}`);
  };
}
// sub function
class Income2 extends Transaction{ //sub function
  constructor(id,desc,val,onlyIncome = true){
      super(id,desc,val);
      this.onlyIncome = onlyIncome;
  }
  static thisISprivateFun(){
    let x = [12,34,683,23,6];
    let y = [23,54,65,87,890];
    let both = [...x, ...y];
    let minArr = [];
    both.forEach(el => el <= 50 ? minArr.push(el) : false);
    console.log(`Min NUm:  ${minArr}`);
  }
};
let i21 = new Income2(1,"kaka", 1234);
i21.info();
Income2.thisISprivateFun()

// sub function
class Expense2 extends Transaction { //sub function
  constructor(id,desc,val){
    super(id,desc,-val);
  }
}
let in1 = new Income2(1,"inc", 10000);
let in2 = new Income2(2,"inc", 100001);
let in3 = new Income2(3,"inc", 1000002);
let ex1 = new Expense2(1,"ex", 100);
let ex2 = new Expense2(2,"ex", 90);
let arrr = [];
arrr.push(in1,in2,in3,ex1,ex2);
console.log(arrr);
arrr.forEach(el=> el.info());

// Income2.thisISprivateFun();

console.log(`...............................................`);
