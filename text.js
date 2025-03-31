const { LOADIPHLPAPI } = require("dns");

1. // EXECTUTION CONTEXT 
// VARIABLE
// THIS 
// SCOPE CHAIN 
// let arr = "today";

// let obj1 = {

//     work:"officer",
//     rest: "sleep",

//     y:function(name, age){
//         let location1 = "MUST LIVE IN USA";
//         console.log(name + " has " + this.work + " and " + this.rest + "\n" + " so " + location1);
//     }
// }

// let obj2 = {

//     job:"Engineering",
//     hobbi:"traveling",

//     x:function(name, age){

//         let location2 = "CAN LIVE ANYWHERE IN THE WORLD";
//         console.log(name + " has " + this.job + " and " + this.hobbi + "\n" + " so " + location2);
//         obj1.y("John", 21);

//     },
// };

// obj2.x("EVA", 31);

// let x;
// console.log(x);

// let y = {
//     name:"Evank",
// };
// console.log(y);
// y = null;
// console.log(y);
// y = 12;
// console.log(y);

// obj
let Person = function (name, gender) {
    // console.log();
    this.ner = name;
    this.huis = gender;
    this.updateAge = function (age) {
        this.nas = ++age;
        return this.nas
    }
}

let person1 = new Person("Evank", "male");
// let person2 = new Person("JAne", "female", 30);

console.log(person1.updateAge(1));
// console.log(person2.ner + ' ' + person2.huis + ' ' + person2.updateAge());

function print(name, age, city, country) {
    var a = arguments;
    // console.log(a[0]);
    // console.log("my name is " + name + " " + age + " years old " + " lve in " + city + " " + country);


}
print("Evank", 21, "Berkeley", "USA");

console.log("........................................");

const listsName = ['Bob1', 'Bob2', 'Bob3', 'Bob4', 'Bob5', 'Bob6'];
for (let i = listsName.length - 1; i > 0; i--) {
    // console.log(i, listsName[i]);
}

// let fullDate, year, month, day, time, minutes, seconds;
// first(second);

// function first(x) {
//     x();
// }

// function second() {
//     fullDate = new Date();
//     console.log(" full date : ", fullDate);
//     year = fullDate.getFullYear();
//     console.log(year);
//     month = fullDate.getMonth()+1;
//     console.log(month);
//     day = fullDate.getDate()
//     console.log(day);
//     time = fullDate.getHours()
//     console.log(time);
//     minutes = fullDate.getMinutes();
//     console.log(minutes);
//     seconds = fullDate.getMilliseconds()/60;
//     console.log(seconds);
// }







https://evank1206.github.io/MediaQuary/#
{/* <script> */}
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// </script>









