let javascriptIsFun = true; // declare a variable
console.log(javascriptIsFun);

// typeof operator

console.log(typeof javascriptIsFun);
console.log(typeof true);
console.log(typeof "kynoh");
console.log(typeof 23);

javascriptIsFun = "kynoh is the master of JavaScript!"; // dynamic typing
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);


/* undefined */
let year;
console.log(year); // value is undefined yet
console.log(typeof year); // data type is undefined

year = 2025; // dynamic typing
console.log(year); // 2025
console.log(typeof year); // number


console.log(typeof null); // object -> legacy bug! null은 data type이예요.
/* 
undefined 자료형이 typeof로써 undefined를 return하듯이, null은 null type임을 return해야하지만,
legacy적인 이유로 null의 typeof는 object를 return하도록 명시하고 있어요.
일단 null type을 typeof하면, object가 나온다는 것만을 염두에 두자고요!
 */
console.log(null); // value is null