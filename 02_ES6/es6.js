/*
evens = [1,2,3,4,5,6];

odds  = evens.map(v => v + 1);
pairs = evens.map(v => ({even: v, odd: v+1}));
nums  = evens.map((v,i) => v + i);

console.log("odds: "+odds)
console.log("Pairs: ")
pairs.forEach(function (p) { console.log(p) })
console.log("evens: "+evens)*/


//EX3 - arrow functions
function Numbers(numbs) {

  this.nums = numbs;
  this.fives = [];
  this.nums.forEach(function (v) {
    if (v % 5 === 0) {
      this.fives.push(v);   
    }
  });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

