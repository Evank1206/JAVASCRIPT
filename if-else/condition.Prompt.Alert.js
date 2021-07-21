// const birthYear = prompt("enter your birth year!");
// const currentYear = new Date().getFullYear();
// const age = currentYear - birthYear;
// // console.log("your age is " + (currentYear - birthYear));

// if (birthYear) {
//     if (age > 21) {
//         console.log("Adult" + age);
//     } else if (age > 16 && age < 20) {
//         console.log("STUDENT" + age);

//     } else if (age >= 10 && age <= 15) {
//         console.log("HIGH SCHOOL" + age);

//     } else if (age >= 6 && age <= 9) {
//         console.log("ELEMENTARY SCHOOL" + age);

//     } else {
//         console.log("CHILD" + age);

//     }

// } else {
//     console.log("enter your birth year");
// }

/* SWITCH CASE WITH FUNCTION */

function result(name, job, score) {

  switch (job) {
    case "teacher" : console.log(name + " good teacher");break;
    case "Engineering" : console.log(name + " good Engineering");break;
    case "Mechanician" : console.log(name + " good Mechanician");break;
    case "Boxer" : console.log(name + " good Boxer");break;
    case "Sportsman" : console.log(name + " good Sportsman");break;
  }

  switch(true){
    case score > 90 : console.log(name + " got A");break;
    case score > 80 && score < 90 : console.log( name + " got B");break;
    case score > 70 && score < 80 : console.log(name + " got C");break;
    case score > 60 && score < 70 :  console.log(name + " got D");break;
    case score < 50 : console.log(name + " got F");break;
  }
}

result("Evank", "Boxer", 61);
result("Anara", "teacher", 92);
result("Anton", "Engineering", 86);
result("Jania", "Sportsman", 76);
result("Vika", "teacher", 88);
result("Vitya", "Mechanician", 94);
result("Aruinbold", "teacher", 100);



