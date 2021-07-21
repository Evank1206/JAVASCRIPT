/* 1 */// call() method
let map = Array.prototype.map;

let a = map.call('Hello World', function(x) { 
console.log(x);
  return x.charCodeAt();
});
console.log(a);

console.log("........................................");
