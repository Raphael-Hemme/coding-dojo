// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/typescript
// 6 kyu - Convert string to camel case

// V-1
export const toCamelCase = (str: string): string => {
  const result = str.split('')
    .map((char, i, arr) => {
      const lastChar = arr[i - 1];
      if (i !== 0 && (lastChar === '-' || lastChar === '_')) {
        return char.toUpperCase();
      } else if (char === '-' || char === '_') {
        return ''
      } else {
        return char
      }
    })
    .join('');
  return result
}
