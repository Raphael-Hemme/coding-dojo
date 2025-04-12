// https://www.codewars.com/kata/5375f921003bf62192000746/train/typescript
// 6 kyu - Word a10n (abbreviation)

type Triplet = [string | undefined, string, string | undefined];

const isAlphabetical = (char: string | undefined): boolean => !char ? false : /[a-zA-Z]$/.test(char);
const isEndOfWord = ([ last, curr, next ]: Triplet ) => isAlphabetical(last) && isAlphabetical(curr) && !isAlphabetical(next);
const getTriplet = (arr: string[], i: number): Triplet => [arr[i - 1], arr[i], arr[i + 1]];
const getAbbrWord = (word: string): string => word.length >= 4 ? `${word.charAt(0)}${word.length - 2}${word.charAt(word.length - 1)}` : word;

const extractWords = (arr: string[]): string[] => {
  const result: string[] = [];
  let currWord = '';
  arr.forEach((el: string, i, arr) => {
    const isAlpha = isAlphabetical(el);
    const isEnd = isEndOfWord(getTriplet(arr, i));
    if (isAlpha && isEnd) {
      currWord += el;
      result.push(currWord);
    } else if (isAlpha && !isEnd) {
      currWord += el;
    } else {
      currWord = ''
    }
  })
  return result;
}

export const abbreviate = (str: string): string => {
  const wordArr = extractWords(str.split(''));
  let abbrString = str;
  wordArr.forEach(word => {
    abbrString = abbrString.replace(word, getAbbrWord(word));
  });
  return abbrString;
}
