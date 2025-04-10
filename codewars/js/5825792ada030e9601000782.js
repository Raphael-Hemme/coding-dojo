// https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript
// 6 kyu - zipWith
const arrA1 = [10, 10, 10, 10];
const arrA2 = [0, 1, 2, 3];

const arrB1 = [1,4,7,1,4,7];
const arrB2 = [4,7,1,4,7,1];

const arrC1 = [0, 1, 2, 3, 4];
const arrC2 = [6, 5, 4, 3, 2, 1];

const arrD1 = [0,1,2,3,4,5];
const arrD2 = [6, 5, 4, 3, 2];

const plus = (a,b) => a+b ;
const zipWith = (fn, a0, a1) => a0.slice(0, a1.length).map((el, i) => fn(el, a1[i]));

console.log(zipWith(Math.pow, arrA1, arrA2));
console.log(zipWith(Math.max, arrB1, arrB2));
console.log(zipWith(plus, arrC1, arrC2));
console.log(zipWith(plus, arrD1, arrD2));
