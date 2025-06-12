// https://www.codewars.com/kata/5521d84b95c172461d0000a4/train/javascript
// 7 kyu - Binary Coded Decimal

import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { toBcd } from "./5521d84b95c172461d0000a4.js";

describe("toBcd", () => {
  it("expects to handle positive and negative numbers correctly", () => {
    expect(toBcd(10)).toEqual("0001 0000");
    expect(toBcd(-10)).toEqual("-0001 0000");
  });
});
