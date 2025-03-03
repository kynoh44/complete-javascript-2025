/*
var는 vanilla javaScript / const는 modern javaScript
*/

let age = 30; // initialization
console.log(age);
age = 31; // assignment (mutated variable)
console.log(age);

let empty;
empty = 2025;
console.log(empty);

/*  const는 ...
    - immutable kyword예요!
    - 반드시 initialization이 되어야 해요!
*/

const birthYear = 1994;
console.log(birthYear);

//birthYear = 2005; // Uncaught TypeError: invalid assignment to const 'birthYear'

//const job; // Uncaught SyntaxError: missing = in const declaration


/*
  var는 사실 피하는게 좋아요
  ES6이전에 사용하던 방식이예요.
  작동 원리상, let과 다른 방식으로 작동해요.
  겉으로는 유사해보이지만요!
*/
var job = "programmer"; // NOT RECOMMENDED!!!
console.log(job);
console.log(typeof job);

job = "teacher";
console.log(job);
console.log(typeof job);

lastName = "Noh"; // global scope.. NOT RECOMMENDED!!!
console.log(lastName);

/*
JavaScript에서 변수에 keyword를 명시하지 않는것은 매우 안 좋아요.
왜냐하면, 변수의 scope를 생성하지 않고,
global scope로 만들게되는데 그러면 의도치않은 오류의 원흉이 될 수 있기 때문이죠!!
*/


