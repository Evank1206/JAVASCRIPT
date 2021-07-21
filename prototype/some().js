// SOME() METHOD  BOOLEN
/* 1 */// Checking elemnt is even 
console.log("......................................");

// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// // const even = (element) => element % 2 === 0;
// function even(element){
//     console.log(element);
    
//     return element % 2 === 0;
// }
// const x = array.some(even);

// console.log(x);

// expected output: true
// console.log(2%3);


/* 2 */// 
console.log("......................................");

// const arr1 = [2, 5, 8, 1, 4];
// const arr2 = [12, 5, 8, 1, 4];

// function even(element, index, array) {
// // get 
//     return element > 10;
// }
// const x = arr1.some(even);
// console.log(x);
// const y = arr2.some(even);
// console.log(y);

/* 3 */
console.log("....................................");

// const fruits = ['apple', 'banana', 'mango', 'guava'];

// function tests(element,index,array){

//     return element = '';
// }
// const x = fruits.some(tests);
// console.log(x);


/* 4 */
console.log("....................................");

const fruits = ['apple', 'banana', 'mango', 'guava'];

function zzz(arr, index) {

    const tiim = arr.some(function (arrVal) {

        console.log(index === arrVal);
    })

    return tiim;

}

zzz(fruits, 'mango');
console.log("--------------");
zzz(fruits, 'banana');


