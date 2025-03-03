/* 7 개의 기본 자료형 */
//Number    // 부동소수점, 정수 포함
//String    // sequence of chracters
//Boolean   // true or false

//undefined // variable declared but not assigned
//null      // value is empty and variable has not declared

// ES2015에서 소개된 자료형
//Symbol    // value가 수정될 수 없고 고유한 경우에 사용하는 자료형

// ES2020
//BigInt    // Number type보다 더 큰 숫자를 다룰 때 사용하는 자료형

/* 
Dynamic Typing
변수를 초기화할 때, 자료형을 명시할 필요가 없음.
literal에 따라서 자료형을 자동으로 결정함
즉 value 자체가 자료형을 명시함, 보통 다른 언어에서는 변수에 자료형을 명시하는데,
JS에서는 literal 자체가 자료형을 명시하게 됨.

그러므로 literal이 수정됨으로써 variable의 자료형이 바뀌는 것에 문제가 없다.
*/

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