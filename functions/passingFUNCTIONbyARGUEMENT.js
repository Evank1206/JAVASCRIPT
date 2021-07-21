/* Arga: 1 */ // find out age form these years, 21+ to give true -21 false, heart rate to find out from ages 
// years from data-base

// const birthYear = [1989, 1990, 1993, 1996, 1999, 2009, 2010, 2013]; 

// let today = new Date().getFullYear();
// // function for finding ages
// function findOutAges(){
//   let arr = [];
//   for(let i=0; i < birthYear.length; i++){
//   let ages = today - birthYear[i];
//   arr.push(ages)
// }
//   return arr;
// }
// let agesFromFun =  findOutAges();
// console.log(agesFromFun);

// // function for find adult and uderAge people
// function arragneAges(){
//   let arr = [];
//   for(let i= 0; i < agesFromFun.length; i++){
//     arr.push(agesFromFun[i] <= 21);
//   }
//   console.log(arr)
//   return arr;
// }
// arragneAges();

// // function for findOut Heart rate of ages

// function findHeartRate(){
//   let arr = [];
//   for(let i=0; i<agesFromFun.length; i++){
//     arr.push(Math.round(206.9 - 0.67 * agesFromFun[i]))
//   }
//   console.log(arr)
//   return arr;
// }
// findHeartRate()

/* Arga: 2 */ // pass function as a arguement buyu FIRST CLASS FUNCTION
let birthYear = [1989, 1990, 1993, 1996, 1999, 2009, 2010, 2013]; 
let today = new Date().getFullYear();

function general(myArr, ageFun){
  let arr = [];
  for(let i = 0; i < myArr.length; i++){
    arr.push(ageFun(myArr[i]))
  }
  // console.log(arr)
  return arr;
}

function findOutAge(bYears){
  return today - bYears;
}

let age = general(birthYear, findOutAge);
console.log(age);


function ageDefference(sortAge){
  return sortAge > 21
}

let tr = general(age, ageDefference);
console.log(tr);

function heartRate(heart){
  return Math.round(206.9 - 0.67 * heart)
}

let rate = general(age, heartRate);
console.log(rate);



