// https://www.codewars.com/kata/5375f921003bf62192000746/train/typescript
// 6 kyu - Word a10n (abbreviation)

// V-1
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

export const abbreviateV1 = (str: string): string => {
  const wordArr = extractWords(str.split(''));
  let abbrString = str;
  wordArr.forEach(word => {
    abbrString = abbrString.replace(word, getAbbrWord(word));
  });
  return abbrString;
}

//V-2
type WordReducerStateV2 = { words: string[], currWord: string };
const INITIAL_STATE_V2: WordReducerState = { words: [], currWord: '' };

const isAlphabetV2 = (char: string): boolean => /[a-zA-Z]$/.test(char);
const abbreviateWordV2 = (word: string): string => word.length >= 4 ? `${word.charAt(0)}${word.length - 2}${word.charAt(word.length - 1)}` : word;
const wordReducerV2 = (acc: WordReducerState, curr: string, i: number, arr: string[]): WordReducerStateV2 => {
  const newState = { ...acc };
  const endWord = !isAlphabetV2(curr) || i >= arr.length - 1;
  if (isAlphabetV2(curr)) {
    newState.currWord += curr;
  }
  if (endWord && newState.currWord.length > 0) {
    newState.words.push(newState.currWord);
    newState.currWord = '';
  }
  return newState;
}

export const abbreviateV2 = (str: string): string => {
  const {words} = str.split('').reduce((acc, curr, i, arr) => wordReducerV2(acc, curr, i, arr), INITIAL_STATE_V2);
  let result = str;
  words.forEach(word => result = result.replace(word, abbreviateWordV2(word)));
  return result;
}

//V-3
type WordReducerState = { words: string[], currWord: string };
const INITIAL_STATE: WordReducerState = { words: [], currWord: '' };

const isAlphabet = (char: string): boolean => /[a-zA-Z]$/.test(char);
const abbreviateWord = (word: string): string => word.length >= 4 ? `${word.charAt(0)}${word.length - 2}${word.charAt(word.length - 1)}` : word;
const wordReducer = (acc: WordReducerState, char: string, i: number, arr: string[]): WordReducerState => {
  const endWord = !isAlphabet(char) || i >= arr.length - 1;
  const currWord = isAlphabet(char) ? acc.currWord + char : acc.currWord;
  const newState = {
    ...acc,
    words: endWord ? [...acc.words, currWord] : acc.words,
    currWord: endWord ? '' : currWord
  };
  return newState;
}

export const abbreviate = (str: string): string => {
  const {words} = str.split('').reduce((acc, curr, i, arr) => wordReducer(acc, curr, i, arr), INITIAL_STATE);
  let result = str;
  words.forEach(word => result = result.replace(word, abbreviateWord(word)));
  return result;
}
