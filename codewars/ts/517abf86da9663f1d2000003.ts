// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/typescript
// 6 kyu - Convert string to camel case

// V-1
export const toCamelCaseV1 = (str: string): string => {
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

// V-2
const lastChar = (arr: string[], i: number) => arr[i - 1];
const isCharDashOrUnderscore = (char: string): boolean => (char === '-' || char === '_')
export const toCamelCase = (str: string): string => str
    .split('')
    .map((char, i, arr) => (i !== 0 && isCharDashOrUnderscore(lastChar(arr, i))) ? char.toUpperCase() : char)
    .filter((char) => !isCharDashOrUnderscore(char))
    .join('');
