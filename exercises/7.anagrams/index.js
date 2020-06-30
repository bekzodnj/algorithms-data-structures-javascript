// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // clear-up punction symbols;
  var s1 = stringA.replace(/[^\w]/g, '');
  var s2 = stringB.replace(/[^\w]/g, '');

  if (s1.length !== s2.length) return false;

  //sort character order
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');

  return s1 === s2;
}

module.exports = anagrams;
