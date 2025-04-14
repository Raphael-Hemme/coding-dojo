import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { stripComments } from "./51c8e37cee245da6b40000bd.js";

const tests = [
    ['aa bb cc', [], 'aa bb cc'],
    ['aa bb cc  ', [], 'aa bb cc'],
    ['  aa bb cc', [], '  aa bb cc'],
    ['  aa # bb # cc  ', [], '  aa # bb # cc'],

    ['aa bb cc', ['#'], 'aa bb cc'],
    ['aa bb # cc', ['#'], 'aa bb'],
    ['aa# bb cc', ['#'], 'aa'],
    ['aa #bb cc', ['#'], 'aa'],
    ['aa # bb # cc', ['#'], 'aa'],
    ['#aa bb cc', ['#'], ''],

    ['#aa bb\ncc dd', ['#'], '\ncc dd'],
    ['aa # bb\ncc dd', ['#'], 'aa\ncc dd'],
    ['aa bb\n#cc dd', ['#'], 'aa bb\n'],
    ['aa bb\ncc # dd', ['#'], 'aa bb\ncc'],
    ['aa bb\ncc dd#', ['#'], 'aa bb\ncc dd'],

    ['aa bb\ncc dd', ['#', '!'], 'aa bb\ncc dd'],
    ['aa # bb\ncc dd', ['#', '!'], 'aa\ncc dd'],
    ['aa bb\ncc ! dd', ['#', '!'], 'aa bb\ncc'],
    ['#aa bb\n!cc dd', ['#', '!'], '\n'],
    ['aa ! bb\ncc # dd', ['#', '!'], 'aa\ncc'],
    ['aa bb#\ncc dd!', ['#', '!'], 'aa bb\ncc dd'],

    ['aa + bb\ncc - dd\nee * ff', ['+', '-', '*'], 'aa\ncc\nee'],
    ['aa / bb\ncc ^ dd\nee $ ff', ['/', '^', '$'], 'aa\ncc\nee'],
];

const runTest = (text, markers, expected) => {
  const title = `text = ${JSON.stringify(text)}, markers = ${JSON.stringify(markers)}`;
  const result = stripComments(text, markers);
  it(title, () => expect(result).toEqual(expected));
}

describe("stripComment: ", () =>{
  tests.forEach(([text, markers, expected]) => runTest(text, markers, expected));
});
