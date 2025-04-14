/* A. shift(), unshift(), push(), pop(), indexOf(), length */
/* B. slice(), splice() */
/* C. ForLoop */
// A.
// 1. Create massive
// 2. add five items
// 3. delete first item
// 4. delete last item
// 5. add one item to the first
// 6. add  one item to the last
// 7. count how many items in massive (arr)
// 8. find out each certain items index
// 9. find certain item by itself name then see index of the item using "indexOf"
// 10. check certain items in array using "length"
// 11.replace certain item using "length"

// 1.
var arr = [];
// 2.
arr[0] = 'name';
arr[1] = 'city';
arr[2] = 'country';
console.log(arr);

// 3.
arr.shift();
console.log(arr);
// 4.
arr.pop();
console.log(arr);
// 5.
arr.unshift('lala1');
console.log(arr);
// 6.
arr.push('lala2');
console.log(arr);
// 7.
var x = arr.length;
console.log(x + ' items in array');
// 8.
console.log(arr[2] + ' index 2');
// 9.
console.log(arr);
console.log(arr.indexOf('lala2') + ' lala is index 2 in array');
console.log(
  arr.indexOf('USA') +
    " : if the item searched by name is NOT in array it will return '-1'"
);
// 10.
console.log(arr);
console.log(arr[arr.length - 2]);
// 11.
console.log((arr[arr.length - 2] = 'country'));
console.log(arr);

// B.
// 1. create massive
// 2. delete certain items by their index, using splce();
// 3. copy certain items, using slice();

// 1.
var mas = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];
// 2.
// mas.splice(1, 10);
// console.log(mas);
// var a = mas.splice(1, 10);
// console.log(a);

// 3.
var b = mas.slice(1, 10);
// console.log(b);