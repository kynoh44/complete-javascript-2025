console.log("HELLO");

const age = 18;

if (age === 18) console.log("You just became an adult");
/* 
===는 operand의 data type이 동일한 경우로 타이트하게 비교
==는 operand의 data type의 type coercion을 처리하고 비교
*/

if ("18" == 18) console.log("18 is string! but passed")
if ("18" === 18) console.log("18 is string! not passed")

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite, typeof(favorite));

if (favorite === 23) {
  console.log(`${favorite} | ${typeof(favorite)} | equality operator : ===`);
} else if (favorite === 7) {
  console.log(`${favorite} | ${typeof(favorite)} | equality operator : ===`);
} else {
  console.log(`${favorite} | ${typeof(favorite)}`);
}

if (favorite !== 23) console.log(`${favorite} | ${typeof(favorite)} | equality operator : !==`);

