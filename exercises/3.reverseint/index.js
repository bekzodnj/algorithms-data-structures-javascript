// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = 0;
  let num_copy = n;

  while (num_copy !== 0) {
    reversed = reversed * 10 + (num_copy % 10);
    num_copy = parseInt(num_copy / 10);
  }

  return reversed;
}

module.exports = reverseInt;
