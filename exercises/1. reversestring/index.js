// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, item) => item + reversed, '');
}

module.exports = reverse;

// 1st way
// function reverse(str) {
//   return str.split('').reverse().join('');
// }
