// https://www.codewars.com/kata/5521d84b95c172461d0000a4/train/javascript
// 7 kyu - Binary Coded Decimal

const sumArr = (nums) => nums.reduce((a, c) => (a + c), 0);

const transformDigit = (digit) => [8, 4, 2, 1]
  .reduce((acc, curr) => ([...acc, curr <= (digit - sumArr(acc)) ? curr : 0]), [])
  .map(e => e > 0 ? '1' : '0')
  .join('');

export const toBcd = (decimalNum) => decimalNum.toString()
  .split('')
  .map((char) => char === '-' ? char : transformDigit(Number(char)))
  .join(' ')
  .replace('- ', '-');
