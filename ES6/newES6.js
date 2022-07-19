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

// ES6 SPREAD operator

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
console.log(allprogrammingLanguages)