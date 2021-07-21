/* CLOSURE example of get email address: "1"*/
// function showPost (newNews){
//     let post = "News : " + newNews + " \n\n Please install the newsApp!";
//     console.log(post)
//     return function(){
//         let email = prompt(post + " If you wanna recieve news updates pls enter your email address! ");
//         document.write("We will update news for every day to your email. Your email is: " + email + ", Thanks");
//     }
// }
// let todayNews = "Today is the nice weather in Bay Area CA USA + 70f.";
// let getEmail = showPost(todayNews);
// setTimeout(getEmail, 5000);

/* CLOSURE example of get answer: "2"*/

// function func(numbers) {
//     let x = numbers[0] + numbers[1];
//     let inner = " What is the sum of these to number? " + numbers; 
//     console.log(inner);
//     return function(){
//         let answer = prompt(inner + " Enter sum of the two numbers !");
//         if(x == answer){
//             document.write(answer + " is correct");
//         }else{
//             document.write(answer + " is NOT correct!");           
//         }
//     }
// }
// let xxx = [2, 3];
// let arrOfNum = func(xxx);
// setTimeout(arrOfNum, 3000);

// "3":
// function mainFun(){
//     let arr = [];
//     for (let i=0; i<3; i++){
//         arr.push(function(){
//             console.log(i);  
//         });
//     }
//     // console.log(arr);
//     return arr;
// }
// let xx = mainFun();
// xx[0]()
// xx[1]()
// xx[2]()

// "4":
// function someFun(){
//     let arr = [];
//     for(let i=0; i<3; i++){
//         arr.push(function(k){
//             return function(){
//                 console.log(k);  
//             }
//         }(i))
//     }
//     console.log(arr);
//     return arr;
// }

// let a = someFun();
// a[0]()
// a[1]()
// a[2]()
