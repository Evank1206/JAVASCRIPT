//1.. function have to call back
function sayHello(){
    console.log("hello");
}
// this is calling function
sayHello();

// 2.. function with for-loop
const arr = ["Evank", "Sain", "Enkhtaivan"];

function saidHello(){
    for(i=0; i < arr.length; i++){
        console.log(i, arr[i]);
    }
} 

saidHello();

// 3.. function with 1 arguement

function sayHi(argu){
    console.log('Helloo? '+ argu);
}
sayHi('Enkhtaivan');

// 4.. function with 2 arguements

function water(nam1, nam2){
    console.log(nam1 + ' and ' + nam2 + ' both like water');
}

water("Jenny" , "Thomas");

// 5.. нэг эгнээнд байрлуулаж, хоорондын зай өгч, хамгийн арын зайг -1 гэж хасна.
// let songName = "";

// for(var i=2; i < process.argv.length; i++){

//     if(i != process.argv.length - 1){
//         songName += process.argv[i] + " ";
//     }else{
//         songName += process.argv[i];
//     }
    
// }
// console.log(songName);
 
// 6. Fuction:
// double the number as one parameter
// function num(a){

//     return a*a;  
// }
// console.log(num(6));

// two parameter multifly
// function num(x,y){
//     // return x;  
// }
//     var othr = num(2,3);
//     console.log(othr)

// num(2,2);

/* 7 */
function add(x){
    return x[0];
}
let call = add("STRING");
console.log(call);

/* 8 */
function string(x){
    return x + "s"
}

let log = string("add");
console.log(log);
