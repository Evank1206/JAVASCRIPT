/* (1) To Find a Prime Numbers 0-100 */
// a. create the function has returning Boolen value
// b. create variable Boolen has value with "true"
// c. create forLoop to count "20"
// d. create if condition. Check if the for parameter (passed number) divided by each forLoop counting number and it equals to "0"
// e. if condition divided and value is "0",  then Boolen value changed to "false" and forLoop "break"
// f. and function returns the Boolen Value

// a. Create forLoop counting to "100" 
// b. create if condition
// c. call the function here and pass the counting forLoop number as argument
// d. check condiotion with function with argument equals Boolen value "true", if so print the number "i"

for(var i = 0; i<=100; i++){
    if(pFun(i) === true) console.log("This is prime Number " + i)
  }
  // console.log(pFun(4));
  function pFun(x) {
    var pNum = true;
    for (var i = 0; i <= 20; i++) {
      if (x % i === 0) {
        pNum = false;
        break;
      }
    }
    return pNum;
  };
  
/* */ 