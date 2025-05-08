import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { invertHash } from "./5b5604e26dc79e6832000101.js";

const runTest = (input, expected) => {
	const actual = invertHash(input);
	it (`transforms ${JSON.stringify(input)} into ${JSON.stringify(expected)} - got: ${actual}`, () => {
	  expect(actual).toStrictEqual(expected);
	})
}

describe('invertHash', () => {
  runTest({ a: '1' }, { 1: 'a' });
	runTest({ a: '1', b: '2', c: '3' },
			{ 1: 'a', 2: 'b', 3: 'c' }
	);
	runTest({ 1: '3' }, { 3: '1' });
	runTest({ hello: 'world', foo: 'bar' },
			{ world: 'hello', bar: 'foo' }
	);
});
