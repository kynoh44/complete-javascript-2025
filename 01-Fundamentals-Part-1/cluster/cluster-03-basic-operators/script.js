/* Basic Operators */
const now = 2025;
const ageKynoh = now - 1994;
const ageSarah = now - 1996;

console.log(ageKynoh, ageSarah); // 31 29
console.log(ageKynoh * 2, ageSarah / 10, 2 ** 3); // 62 2.9 8


const firstName = "Kynoh";
const lastName = "Noh";

console.log(firstName + " " + lastName); // KynohNoh

/* Template String도 유용해요 */


/* assignment operators */
let x = 10 + 5;
let y = 10 * 5;
x += 10;
y *= 15;
console.log(x);

x--;
console.log(x);

x--;
console.log(x);

/* comparison operators */
console.log(ageKynoh < ageSarah);

const isFullAge = ageSarah >= 18;

console.log(now - 1994 > now - 1996)