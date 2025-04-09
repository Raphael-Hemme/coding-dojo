// https://www.codewars.com/kata/5a04133e32b8b998dc000089
// 7kyu - Dominant array elements

// V-1
function solve(arr) {
  return arr
    .slice()
    .filter(
      (el, i, cpArr) =>
        i === cpArr.length - 1 || el > Math.max(...cpArr.slice(i + 1)),
    );
}

// V-2
const solve = (arr) => arr.filter((el, i) => i === arr.length - 1 || el > Math.max(...arr.slice(i + 1)));
