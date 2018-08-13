const {
  pipe, length, gte, always, converge, concat, curry,
  slice, head, flip, append, last, cond, T, sort, subtract
} = require('ramda');

const first_element = pipe(head, flip(append)([]));
const last_element = pipe(last, flip(append)([]));

module.exports = function(rem = []) {
  return (function min_max(rem, fin) {
    return cond([
      [pipe(length, gte(1)), always(concat(fin, rem))],
      [T, pipe(
        converge(concat)([first_element, last_element]),
        concat(fin),
        curry(min_max)(slice(1, -1, rem))
      )]
    ])(rem)
  })(sort(subtract, rem), []);
}
