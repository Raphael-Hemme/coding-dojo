// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5
// 6 kzu - Once

import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { once } from "./5307ff5b588fe6d7000000a5.js";

describe("Submission tests", () => {

  it("test function which throws", () => {

    const f = once(function() {
      throw new Error("Should throw an error the first time");
    });

    expect(() => f()).toThrow("Should throw an error the first time");
    expect(() => f()).not.toThrow("Should do nothing the second time");

  });

  it("test function returning some value", () => {

    const f = once(function(x) {
      return x;
    });

    expect(f(1)).toEqual(1);
    expect(f(1)).toEqual(undefined);

  });

});
