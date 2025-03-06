/*
[JavaScript Operator Precedence - MDN]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/

/* 
BMI = mass / height ** 2

TODO
1. Mark와 john의 체중을 formula 사용해서 저장
2. 두 사람의 BMI 지수 계산
3. markHigherBMI 라는 Boolean type variable을 초기화
Mark가 John보다 BMI 높은지 아닌지 의미

Test Data
Data 1:
Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.

Data 2:
Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.
*/

/* Data 1 */
const markWeight = 78.0;
const markHeight = 169.0;

const johnWeight = 92.0;
const johnHeight = 195.0;

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
