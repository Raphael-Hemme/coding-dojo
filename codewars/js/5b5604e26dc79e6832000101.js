// https://www.codewars.com/kata/5b5604e26dc79e6832000101/train/javascript
// 7kyu - Inverting a hash

// V-1
export const invertHashV1 = (hash) => Object.fromEntries(Object.entries(hash).map(([key, val]) => ([val, key])));

// V-2
export const invertHash = (o) => Object.entries(o).reduce((acc, [k, v]) => ({ ...acc, [v]: k }), {});
