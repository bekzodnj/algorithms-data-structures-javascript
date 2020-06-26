// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const str_arr = str.split('');
  const last = str_arr.length - 1;

  return str_arr.every((char, idx, arr) => {
    return char === arr[last - idx];
  });
}

module.exports = palindrome;

/* Alternative solution */
// function palindrome(str) {
//     const reversed = str.split('').reduce((rev, char) => char + rev);

//     return reversed === str;
//   }
