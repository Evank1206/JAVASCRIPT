// number
var num = 123456789;
// to conivert to String
var strn = "" + num;
// to conivert to split string then reverse string then join it back
var x = strn.split("").reverse().join("");
console.log(x);
// to prepare an empty srting for put numbers
var newStr = "";
// to prepare count number
var count = 1;
// to loop through string number
for (let i=0; i<x.length; i++){
    // to put into an empty string for everysingle repeat
  newStr = newStr + x[i];
//   to check if every three digit equal to 0
  if(count % 3 === 0)
//   then comma every third time of repeat which was divided by 3 and equal to 0
    newStr = newStr + ',';
    // to keep counting the string number
    count ++;
  
}
console.log(newStr);
// to reverse the string
var num2 = newStr.split("").reverse().join("");
console.log(num2);
console.log(num2[0]);
// to erase first comma front of number
if(num2[0] === ",") num2 = num2.substring(1, num2.length);
console.log(num2);