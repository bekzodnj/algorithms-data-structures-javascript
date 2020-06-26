// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charSet = {};

  //iterate over string
  for (let char of str) {
    //assing 1 if key is undefined, otherwise increment
    charSet[char] = charSet[char]++ || 1;
  }

  // getting array of (1) values and (2) keys of charSet object
  const valuesArr = Object.values(charSet);
  const keysArr = Object.keys(charSet);

  // getting maximum element's index from Values array
  const maxValueIndex = valuesArr.reduce(
    (maxIndex, item, idx, arr) => (item > arr[idx] ? idx : maxIndex),
    0
  );

  return keysArr[maxValueIndex];
}

module.exports = maxChar;
