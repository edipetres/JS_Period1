//DAY 1 EXERCISES CONTINUED - OBJECTS
//EX1
var myPerson = { name: "Ed", birthday: 1996, email: "email@email.com", hobbies: ["golf", "swimming"] }

//Using for loop to iterate over an object's properties
var printProps = function (obj) {
    console.log("My properties:");
    for (property in obj) {
        console.log("\t" + property);
    }
    console.log();
}
printProps(myPerson);

//Use the delete method to remove an object's property
delete myPerson.birthday;
printProps(myPerson);

//Test wether a property exists
console.log("Has birthday prop: " + myPerson.hasOwnProperty('birthday'));
console.log("Has name prop: " +myPerson.hasOwnProperty('name'));


//EX2 - constructor function
function Person(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.toString = function() {
        console.log("Person: " + fname + " " + lname + " " + age);
    };
}

var pers1 = new Person("Edmond", "Petres", 1996);
console.log("pers1: " + printProps(pers1) + "\n");
pers1.toString();


//EX3 - Enumerate the properties of an object
console.log("keys(): " + Object.keys(pers1));
console.log("getOwnPropertyNames(): " + Object.getOwnPropertyNames(pers1));


//Reusable Modules with Closures
//EX1 - implement the closure counter example
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1)},
        decrement: function() {changeBy(-1)},
        value: function() {return privateCounter}
    }
}

var counter1 = makeCounter();
var counter2 = makeCounter();


//EX2
var makePerson = function() {
    var name;
    var age;
    return {
        setAge: function(newAge) {age = newAge},
        setName: function(newName) {name = newName},
        getInfo: function() {return name + ", " + age}
    }
}

var persClosure = makePerson();
console.log("Person: " + persClosure.getInfo());

persClosure.setAge(18);
persClosure.setName("Eddie");
console.log("Person after setters: " + persClosure.getInfo());
