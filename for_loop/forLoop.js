/* 1 */

var fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

const listsName = ['Bob1','Bob2','Bob3','Bob4','Bob5','Bob6'];

// for (let i = 0; i < listsName.length; i++) {
//   console.log(i, listsName[i]);
// }

/* 2 */
/* REVERSING THE Array || String */
console.log("....................................");

// for(i = listsName.length-1; i >= 0; i--){
//     console.log(listsName[i]);

// }

/* 3 */ // Add curtain numbers
console.log("....................................");
// adds 4 + 5 + 7 = 16
// var sum = 0;
// for(i=4; i<8; i++){
//     if(i == 6){
//         // skip the match number
//         continue;
//     }
//     sum += i;
// }
// console.log(sum);


/* 4 */// only EVEN number's until 20
console.log("....................................");
// for(i=0; i<=20; i=i+1){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

/* 7 */// ODD # 's
console.log("....................................");
// for(i=1; i <= 100; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }

// }
/* 8 */// 5  only divided by 5
console.log("....................................");

// for(i=1; i <= 100; i++){
//     if(i % 5 == 0){
//         console.log(i);
//     }
// }

/* 9 */// зөюхөн 47 г хувууах тоонууд
console.log("....................................");

// for(i=0; i < 1000; i=i+2){
//     if(i % 47 == 0){
//         console.log(i)
//     }
// }

/* 10 */// log every other letter
console.log("....................................");

// var myString = "December is the time of New Year";

// for(i=0; i< myString.length; i= i+2){
//     console.log(i, myString[i]);

// }

console.log("....................................");

// function somet(x){

//     for(i=0; i < x.length; i++){
//         if(x[i] == "a" || "e" || "i" ){
//           return x[i];  
//         }
//     }  
// }

// function somet(x){

//     const vowels = [
//         'e',
//         'y',
//         'u',
//         'o',
//         'i',
//         'a'
//     ];

//     let counter = 0;

//     for(i=0; i < x.length; i++){
//         if(vowels.includes(x[i])){
//             counter = counter + 1;
//         }
//     }  
//     return counter;
// }

// somet('starening');
// console.log('my fn', somet('starening'));

/* 14 */// Write a function which takes two numbers as parameters, then uses a for loop to log every number BETWEEN those two numbers to the console.
console.log("....................................");
// function num(x,y){
//     for(i=+x; i < y; i++ ){
//         // console.log(i);

//     }
// }
// num(1,6);

/* 15 */ //  log number 0-10 but each number repeats own count in the its line

for(var i = 0; i <=10; i++){
  var n = '';
  for(var k=0; k<=i; k++){
    n = n + k;
  }
console.log(n)
};

/* 16 */ // pass a one word as in arguement in function, 
// to find how many letters are matching and that number returned and log those letters
// from specific letters in an array it's given in function

function somet(x) {
  const vowels = ['e', 'y', 'u', 'o', 'i', 'a'];

  let counter = 0;
  let haha = [];
  for (i = 0; i < x.length; i++) {
    if (vowels.includes(x[i])) {
      counter = counter + 1;
      haha.push(x[i]);
    }
  }
  console.log(haha);
  return counter;
}
console.log(somet('starening'));