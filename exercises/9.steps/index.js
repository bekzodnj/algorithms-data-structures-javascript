// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let word = '';
    let j;
    for (j = 1; j <= i; j++) {
      word += '#';
    }
    for (let k = 1; k <= n - j + 1; k++) {
      word += ' ';
    }
    console.log(word);
  }
}

module.exports = steps;
