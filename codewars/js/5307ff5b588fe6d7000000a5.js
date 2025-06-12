// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5
// 6 kyu - Once

export const once = (fn) => {
  let hasRun = false;
  return (...args) => {
    if (!hasRun) {
      hasRun = true;
      return fn(...args);
    }
  };
};

const logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
