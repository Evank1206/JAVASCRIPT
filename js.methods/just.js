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

/**
 var user_Data = {
  // data: {
  //   inc: [12, 34, 134],
  //   exp: [2, 4, 1],
  // },
  total: {
    inc: 1234566789,
    exp: 1000001,
  },
  net: 100999898898899000234,
};
var strng = '' + user_Data.net;

var type = 'exp';
var x;

var y, final, e; 
if (type === 'inc') {
  x = '' + user_Data.total.inc;
  // console.log('form inside : ' + "+" + x);
  var y = x.split('').reverse().join('');
 e = '';
 num = 1;
for (let i = 0; i < y.length; i++) {
  e = e + y[i];
  if (num % 3 === 0) e = e + "'";
  num++;
}
 final = e.split('').reverse().join('');
if (final[0] === "'") final = final.substring(1, final.length); final = "+" + final;

console.log('inside : ' + final);
} else {
  x = '' + user_Data.total.exp;
  // console.log('form inside ' + "-" + x);
    x = '' + user_Data.total.exp;
  // console.log('form inside : ' + "+" + x);
  var y = x.split('').reverse().join('');
 e = '';
 num = 1;
for (let i = 0; i < y.length; i++) {
  e = e + y[i];
  if (num % 3 === 0) e = e + "'";
  num++;
}
 final = e.split('').reverse().join('');
if (final[0] === "'") final = final.substring(1, final.length); final = "-" + final;

console.log('inside : ' + final);
}

var rev = strng.split('').reverse().join('');

var emty = '';
var count = 1;
for (let i = 0; i < rev.length; i++) {
  emty = emty + rev[i];
  if (count % 3 === 0) emty = emty + "'";
  count++;
}

var n = emty.split('').reverse().join('');
if (n[0] === "'") n = n.substring(1, n.length); n = "+" + n;

console.log('net : ' + n);


if (type === 'inc') console.log("+" + user_Data.total.inc);
if (type === 'exp') console.log("-" + user_Data.total.exp);

 */