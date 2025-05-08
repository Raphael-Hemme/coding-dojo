// https://www.codewars.com/kata/5b5604e26dc79e6832000101/train/javascript
// 7kyu - Inverting a hash

export const invertHash = (hash) => Object.fromEntries(Object.entries(hash).map(([key, val]) => ([val, key])));
