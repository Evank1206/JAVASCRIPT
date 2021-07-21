/* 1 */
// continue & break
// find number/s from array & divided by 7 & square the sum  
const arrOfsomething = [12, 34, 56, 90, 21, 1, 97, 100];

for (let i = 0; i < arrOfsomething.length; i++) {
    if (arrOfsomething[i] % 7 !== 0) continue; // untill finish array this line keep look the number divided by 7 if finds
    // let run below code then
    const x = arrOfsomething[i] / 7;
    const square = x ** 2;
    console.log(square);
    break;                                  // break will stop the search if first number found divided by 7
}
// console.log("programm duuslaa");

const arr = [1, 23, 21, 45, 34, 32, 76, 56, 89, 90, 100];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] % 7 !== 0) continue;
    console.log(arr[i] + " this is the one")
    break;
}
// console.log("program ended here")