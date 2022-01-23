/* 1 */// call() method
let map = Array.prototype.map;

let a = map.call('Hello World', function(x) { 
console.log(x);
  return x.charCodeAt();
});
console.log(a);

console.log("........................................");

/* METHOD BORROWING */
var obj = {
  content: "PHOTO",
  name: "DOG",
  print: function(x,color){
    console.log(this.content + " is about happy "+ x + " " + this.name + " & it has " + color + " color ");
  }
};
obj.print("BIG", "BROWN");
// CREATING OBJET 1
// var obj2 = obj;
// obj2.content = "MONEMENT";
// obj2.name = "CAT";
// obj2.size = "6*6";
// obj2.print();

// CREATING OBJET 2
var obj2 = {
  content: "MONEMENT",
  name: "CAT",
};

// USING THE METHODS FOR CHANGING "THIS"
/* bind */
// var sample = obj.print.bind(obj2, "SMALL",);
// sample("WHITE");

/* call */
// obj.print.call(obj2, "MEDIUM", "BLUE");

/* apply */
// var arr = ["HOT","WHITE"]
// obj.print.apply(obj2,arr);
