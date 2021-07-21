// console.log("Hello");
// const greating = "Hello";
// document.write(greating);


/* CREATING DYNAMIC HTML ELEMENT VALILIA JS */

function dynamic(){

document.getElementsByTagName("body")[0].setAttribute("class", "demoClass"); // give class name for body element

const newDiv = document.createElement("div"); // create new div
      newDiv.setAttribute("id","app");      // give id attr
      document.body.appendChild(newDiv);   // put inside of body element

const headerH1 = document.createElement("h1");  // creating h1 tag
      headerH1.textContent = "Aplication Header";   // write something inside h1
document.getElementById("app").appendChild(headerH1);   //put that h1 inside main div


const btn = document.createElement("button"); // creating button tag
      btn.setAttribute("id", "SearchBtn"); // give attr name
      btn.textContent = "SEARCH";   // button name
document.getElementById("app").appendChild(btn); // put that button inside the div


}

const g = {
      name: "h",
      age: 1,
      email: "sjdfsdj"
}
console.log(g.name);

console.log(g['email']);


const arr = ['boy', 'girl', 'dog', 'cat'];

arr[3] = "nice"

console.log(arr);

// const y = "Hello world";
// const y = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < y.length; i++){

//       console.log(y[i],);
      
// }

// for(let i = y.length-1; i >=0; i--){

//       console.log(y[i],i);
      
// }

const word = ["now", "present", "time", "recently"];

for(let i = 0; i < word.length; i++){
      console.log(word[i]);
}

console.log(".............");


for(let i = word.length-1; i >= 0; i--){
      console.log(word[i]);
      
};

console.log(".............");

for(i=0; i < word[0].length; i++){
      console.log(i, word[0][i]);
      
}

console.log(".............");

for(i = word[0].length-1; i >= 0; i--){
      console.log(word[0][i]);
      
}

console.log("....................");

let add = function(num1,num2){
      return num1 + num2;
}

let sum = add(1,6);

console.log(sum);

console.log("....................");

function getSecond (arr){
      return arr[1]
}

let get = getSecond("Hello");
console.log(get);

console.log("....................");

function string(x){
      return x + "s"
}

let log = string("add");
console.log(log);








 