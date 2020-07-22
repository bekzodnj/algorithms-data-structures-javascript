// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let counter = 0;

  let first = 1;
  let second = 1;

  let sum = 0;
  while (counter != n) {
    sum = first + second;
    second = sum;
    first = second;

    counter++;
  }

  return second;
}

module.exports = fib;
