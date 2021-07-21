/* 1 */// every() method
console.log("........................................");

// const func = (curVal) => curVal < 40;
// or
function func(curVal){
    
    return curVal > 0; // this return logic 'if WHOLE ARRAY greater than 0, it sum returns true if not returns false
}
const array = [1,2,3,4,5,6,7,10];
// above logic console.log TRUE cuz all numbers in array is greater than number 0;
const sum = array.every(func);
console.log(sum);


/* 2 */
console.log("........................................");

// function bigEnough(element, index, array) {

//     // console.log(element,index,array);
//     return element >= 10; // main logic of array element ni 10 ih buyu tentsuu tohioldold return "true"

// }

// const arr = [12, 34, 56, 10]; // these numbers greater than 10 output will "true"
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // these numbers ni 10-s baga buyu tentsuu bgaa bolhoor output will be "false"

// const x = arr.every(bigEnough);
// const y = arr2.every(bigEnough)
// console.log(x);
// console.log(y);

/* 3 */// Modifying items
console.log("........................................");

// let arr = [1, 2, 3, 4];

// arr.every((elem, index, arr) => {
//     arr[index -1] -= 1
//     // console.log(elem);
//     // console.log(arr);
//     console.log(`[${arr}][${index}] -> ${elem}`);
//     return elem < 4
// })

/* 4 */// Appending items
console.log("........................................");

// const arr = [1,2,3];
// arr.every(function(elements, index, array){
//     arr.push("new");
//     console.log(`[${array}][${index}] -> ${elements}`);
//     return arr;
// });

/* 5 */// Deleting items
console.log("........................................");

// const arr = [1,2,3];
// arr.every(function(elements, index, array){
//     arr.pop();
//     console.log(`[${array}][${index}] -> ${elements}`);
//     return arr;
// });


