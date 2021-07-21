/* 1 */
const bool = true;

if (bool === true) {
    console.log("the value is true!");
} else {
    console.log("the value is false!");
}

//   below short handed version of up code...

if (bool) {
    console.log("the value is true!");
} else {
    console.log("the value is false!");
}

// terniary expression  ******shortest way 
// асуултын тэмдэг нь "if" ба : - нь "else" -г илэрхийлнэ.
bool ? console.log(" value is true!") : console.log("the value is false!");

/* 2 */
// Write a function which takes two numbers as parameters, and checks if one number is evenly divisible by the other. If so, the function returns true. If not, the function returns false.
function num(x, y) {
    if (x % y === true) {

        return true;
    } else {
        return false;
    }

}
num(9, 3);

/* 3 */ //  triple operator
//sample-1
const name = "Anara";
const age = 19;
age >= 21 ? name + " +21 Over" : name + " -21 Under";

// sample-2
function some(x) {
    var sample = (x < 18) ? "GOOD" : "TRY AGAIN";
    // console.log(sample);
}
some(17);
// OR
var sample2 = name === "Anara" ? "She is my love" : " Still looking for you";
// console.log(sample2);

