const firstName = "kynoh";
const job = "software engineer";
const birthYear = 1994;
const year = 2025;

const kynoh = "I'm " + firstName + ", a " + job + ", " +
  (year - birthYear) + " years old" + ", was born in " + birthYear; // type casting

console.log(kynoh);

/* Template literal */
const kynohInfo = `I'm ${firstName}, a ${job}, ${year - birthYear} years old, was born in ${birthYear}`;

console.log(kynohInfo);

/* 템플릿 문자열에 line break 사용하기 before ES6 */
console.log(`String with \n\
multiple \n\
line breaks`);


/* 템플릿 문자열에 line break 사용하기 after ES6 */
console.log(`String
multiple
line breaks
useful for HTML with JS`);