// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let spaces = n - 1;
  let hashes = 1;

  //loop for lines of output
  for (let j = 1; j <= n; j++) {
    let output = '';
    hashes = j * 2 - 1;

    //spaces adder starting
    for (let i = 0; i < spaces; i++) {
      output += ' ';
    }

    // # (hash) addeer
    for (let i = 0; i < hashes; i++) {
      output += '#';
    }

    //spaces adder ending
    for (let i = 0; i < spaces; i++) {
      output += ' ';
    }
    console.log(output);

    spaces--;
  }
}

module.exports = pyramid;
