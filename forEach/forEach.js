/* The forEach() method calls a function once for each element in an array, in order. */
// forEach()
/* 1 */
let rand2 = ['banana', 'apple', 'orange', 21, 34, 45, 45, 34];
// rand2.forEach(some => console.log(some));

// document.write(some);

/* 2 */
let num = 0;
let arr = [1,2,3,4,5,6];

arr.forEach(some = (x) =>{
    num += x;
    console.log(num);
    
});

/* 3 */
// For each element in the array: multiply the value with 10 and update the element value:
let numbers = [1,2,3];
numbers.forEach(function(items, index, arr){
    arr[index] = items * 10;
    // console.log(arr);
    
})
// console.log(numbers);

/* 4 */
let rating = [5,4,5];
let sum = 0;

let sumFunction = function(a , b){
    // console.log(a+b)
    return a + b;
}

rating.forEach(function(rating){
   sum = sumFunction(sum , rating)
// console.log(rating);

})
console.log(sum);







