import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { toCamelCase } from "./517abf86da9663f1d2000003.ts";

describe("toCamelCase: ", () => {
  it("Returns an empty string when receiving an empty string", () => {
    expect(toCamelCase('')).toEqual('');
  });
  it("'A-B-C' -> 'ABC'", () => {
    expect(toCamelCase("A-B-C")).toBe("ABC");
  })
  it("the_stealth_warrior' -> 'theStealthWarrior", () => {
    expect(toCamelCase("the_stealth_warrior")).toEqual("theStealthWarrior");
  })
  it("the-stealth-warrior' -> 'theStealthWarrior", () => {
    expect(toCamelCase("The-Stealth-Warrior")).toEqual("TheStealthWarrior");
  })
});
