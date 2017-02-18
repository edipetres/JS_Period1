//ES6 Exercises

//EX-2 - Using arrow expressions
evens = [1, 2, 3, 4, 5, 6];
odds = evens.map(v => v + 1);
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
nums = evens.map((v, i) => v + i);

console.log("odds: " + odds)
console.log("Pairs: ")
pairs.forEach(function (p) { console.log(p) })
console.log("evens: " + evens)


//EX-3 A) - arrow functions
//Losing this when extracting a method
// -> Since the inner function has a different this from the outside, you need to use a helper variable (that)
function Numbers(numbs) {
  this.nums = numbs;
  this.fives = [];
  var that = this;
  this.nums.forEach(function (v) {
    if (v % 5 === 0) {
      that.fives.push(v);
    }
  });
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log("\nFives: " + numbers.fives);

//The same using arrow functions:
function Numbers(numbs) {
  this.nums = numbs;
  this.fives = [];
  var that = this;
  this.nums.forEach(v => { if (v % 5 === 0) that.fives.push(v) });
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log("Fives with arrow functions: " + numbers.fives);


//EX-3 B)
console.log("\nEX 3. B)")

var counter = {
  count: 0,
  inc: function () { this.count++; }
}
var func = counter.inc;  //Store "reference" to inc
func();
console.log(counter.count);  //Still zero
counter.inc();
console.log(counter.count);  //Now one


//EX-4 - Template literals
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`;
console.log("Message: " + message);


//EX-5 A - Rest Parameter and the spread operator
function myF(x, y, ...rest) {
  console.log("Sum = " + rest.length)
  for (i = 0; i < rest.length; i++) {
    console.log("rest value " + i + " is a " + rest[i].constructor.name);
  }
}
myF(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {})

//EX-5 B).
var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
myF(5, 2, ...restParams);


//EX-6
console.log("\nEX-6");
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

myObj = { fName, lName, age };
Object.keys(myObj).forEach(k => console.log("Key: " + k + ", value: " + myObj[k]));


//EX-7 A - Destructing Assignment
//Swap the value of two variables
let first = "Kurt", last = "Wonnegut";
console.log(`First:  ${first} , Last:  ${last} `);

[first, last] = [last, first];
console.log(`First:  ${first} , Last:  ${last} `);


//EX-7 B
//Initialise two variable given a method
function getPerson() {
  return {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender: "Male",
    email: "kurt@wonnegut.dk",
    phone: "12345"
  }
}
var {firstName, phone} = getPerson();
console.log("First name: " + firstName);
console.log("Phone: " + phone);


//EX-8 – ES2015 Modules - DOES NOT WORK(?)
/*import {myExternalFunction} from "./myModules/module1"
myExternalFunction(1,2,true,false,[1,2,3]);*/

//EX9 Classes and Inheritance with es2015

class Shape {
  constructor(color) {
    this._color = color;
  }
  getColor() {
    return this._color;
  }
  setColor(color) {
    this._color = color;
  }
  getArea() {
    return undefined;
  }
  getPerimeter() {
    return undefined;
  }

  toString() {
    return "Color: " + this._color;
  }
}

var testShape1 = new Shape("blue");
console.log("should be blue: " + testShape1.getColor());

var testShape2 = new Shape("red");
testShape2.setColor("orange")
console.log("should be orange: " + testShape2.getColor());


//Class inheritance - Base class access

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  toString() {
    return "Circle's radius: " + this.radius + "; " + super.toString();
  }
}

var circle1 = new Circle("red", 10);
console.log(circle1.toString());


class Cylinder extends Circle {
  constructor(color, radius, height) {
    super(color, radius);
    this.height = height;
  }
  getHeight() {
    return this.height;
  }
  setHeight() {
    this.height = height;
  }
  getVolume() {
    return this.radius * this.height;
  }
  toString(){
    return "Cylinder with volume: " + this.getVolume() + " and height: " + this.height + "\n\t" + super.toString();
  }
}

var cyl = new Cylinder("green", 10, 30);
console.log(cyl.toString());