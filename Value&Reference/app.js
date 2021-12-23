                                                            /* VALUE */
// Primitive data type: PART ONE
var a = 10;
var b = a;
console.log(a); // 10
console.log(b); // 10

a = 13;
console.log(b); // 10
b = 19;
console.log(a); // 13  buyu primitive data type d undsen utga uurchlugduhgui buguud dooshoogoo huulbarlagdaj yvna;

// Primitive data type: PART TWO

var city = "SF";
var age = 10;
console.log(city + " /n " + age); // anhniii utga

info(city, age);
console.log(city + " /n " + age); // after function d bolovsruulalt hiisnii daraa anhnii utga still heveree

function info(city, age){
    // anhnii utgiig ni uurchluh
    age = age + 1;
    console.log("city of " + city + " age changed to " + age);
}



                                                            /* REFERENCE */

// Objective data type: PART ONE

var item = {
    name : "Apple",
    number : 10
}

var item2 = item;

console.log(item); // anhnii utga
console.log(item2); // anhnii utga

item.name = "Orange";
item.number = 20;


item2.name = "Potato";
item2.number = 13;

console.log(item); // item g uurchilhud item2 n utga uurchiludsun
console.log(item2); // item2 g uurchilhud item n anhnii utga uurchiludsun

// Objective data type: PART TWO

var one = {
    name : "Mashroom",
    number : 10
};
console.log(one); // anhnii utga

fn(one);
console.log(one); // anhnii utga buyu value ni uurchlugdsun

function fn(one){
    // anhnii utgiig ni uurchluh
    one.name = "water"; 
    one.number = "it's a water"
    console.log(one);
}
