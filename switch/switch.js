/* 1 */
let fruits = "banana";

switch (fruits) {

    case "apple":
        console.log("apple is fruit");
        break;

    case "banana":
        console.log("The banana is fruit");
        break;

    default:
        console.log("can't find OR some other message");

}
/* 2 */
console.log("....................................");

// find a matching number
var num = 5;

switch (num) {
  case 2:
    console.log('yes This is number ' + num);
    break;
  case 3:
    console.log('yes This is number ' + num);
    break;
  case 4:
    console.log('yes This is number ' + num);
    break;
  case 5:
    console.log('yes This is number ' + num);
    break;

  default:
    console.log('can not find matching number ....');
}

// recuruting
var name, age, job, drivingStatus, experience, interest;
    name = 'John';
    age = 25;
    job = 'driver';
    drivingStatusYears = 12;
    record = 'clean';
    interest = 'like to drive';

// switch (true) {
//   case job === 'cook' ||
//     (interest === 'like to drive' &&
//       age >= 21 &&
//       drivingStatusYears >= 10 &&
//       record === 'clean'):
//     console.log(name + ' hired');
//     break;

//   default:
//     console.log('still looking...');
// };

//with function
var fun = function(){
    switch (true) {
     case job === 'cook' ||
        (interest === 'like to drive' &&
         age >= 21 &&
          drivingStatusYears >= 10 &&
          record === 'clean'):
          return 1;
        console.log(name + ' hired');
     
      break;
  
      default:
      return 0;
      console.log('still looking...');
  };
  
  };
  
  var rfun = fun();
  // console.log(rfun);
  rfun !== 0 ? console.log("received") : console.log("NOT received");

/* 3 */
console.log("....................................");

// get accure week date from Pacific Time Zone 

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         console.log("Today is sunday");

//         break;
//     case 1:
//         day = "Monday";
//         console.log("Today is monday");

//         break;
//     case 2:
//         day = "Tuesday";
//         console.log("Today is tuesday");

//         break;
//     case 3:
//         day = "Wednesday";
//         console.log("Today is wednesday");

//         break;
//     case 4:
//         day = "Thursday";
//         console.log("Today is thursday");

//         break;
//     case 5:
//         day = "Friday";
//         console.log("Today is friday");

//         break;
//     case 6:
//         day = "Saturday";
//         console.log("Today is saturday");

// }

/* 4 */
console.log("....................................");


