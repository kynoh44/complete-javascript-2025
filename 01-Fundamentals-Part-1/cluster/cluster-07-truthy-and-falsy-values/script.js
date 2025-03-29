/*
5 falsy values in js

0
""
undefined
null
NaN

*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean({})); // empty object
console.log(Boolean(NaN));

const money = 10;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height || height == 0) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED");
}