/* 1 */
console.log("..........................................");

// function Car(make, model, doors, color) {
//     // this нь function name -г орлоно.
//     this.make = make;
//     this.model = model;
//     this.doors = doors;
//     this.color = color;
// }

// // propotype is the method attached to the constructors
// Car.prototype.sayStatus = function () {
//     console.log(this.make);
//     console.log(this.model);
//     console.log(this.doors);
//     console.log(this.color);
// }
// const someCar = new Car("Benz", "CLk-350", 4, "White");

// console.log(someCar);
// someCar.sayStatus();

/* 2 */
console.log("..........................................");

// function Num(country, state, city) {
//     this.country = country;
//     this.state = state;
//     this.city = city;

// }
// Num.prototype.x = function () {
//     return this.country + ' ' + this.state + ' ' + this.city;
// }

// const display = new Num('USA', 'CA', 'DALY CITY');

// console.log(display);
// console.log(display.x());

/* 3 */ 
console.log("..........................................");

// const x = ['banana', 'apple', 'carrot', 'f', 'd'];

// x.sort();

/* 4 */
console.log("..........................................");

const day = new Date();
// console.log(day);

const y = new Date();
const year = y.getFullYear();
// console.log(year);

const fullYear = y.setFullYear(2020);
// console.log(fullYear);

const a = Math.floor(); // бутайрхай тоо
// console.log(a);

const b = Math.floor(Math.random()); // бүхэл тоо
// console.log(b)

const c = Math.random()*10; // decaimal number 0-10
// console.log(c);

const d = Math.floor(Math.random()*10); // integer number 0-10
// console.log(d);

const mx = Math.max(10,20, 39,200,300); // max number -г олох
// console.log(mx);

const l = Math.sqrt(9);
// console.log(l);

console.log(".............................................");
/* 5 */
/* CONSTRUCTOR FUNCTION */
function Residents(name1, name2) {
    this.fistName = name1;
    this.lastName = name2;
    this.detail = function (phone, email) {
        this.phone = phone;
        this.email = email;
        console.log(this.fistName + " " + this.lastName + " HAS " + this.phone + " && " + this.email);
    }
};

var f1 = new Residents("Evank", "James"); f1.detail("111", "evank@.com");
var f2 = new Residents("Anara", "Anarchik"); f2.detail("2222", "anara@.com");
var f3 = new Residents("Anton", "bran"); f3.detail("333", "anton@.com");
var f4 = new Residents("jan", "ovs"); f4.detail("555", "jan@.com");

console.log(Residents.prototype);
console.log(f4.__proto__ === Residents.prototype);
