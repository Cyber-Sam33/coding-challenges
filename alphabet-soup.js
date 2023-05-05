/**
 * Have the function alphabetSoup(str) take the str string parameter being
 * passed and return the string with the letters in alphabetical order (ie.
 * hello becomes ehllo). Assume numbers and punctuation symbols will not be
 * included in the string.
 */

function alphabetSoup(str) {
  //first split into an array of single characters
  let letters = str.split('');
  console.log(letters);
  //sort into alphabetical order - this returns an array.  Need the JOIN METHOD (with no space to get rid of commas)
  return letters.sort().join('');
}


console.log(alphabetSoup('kjdhkjashnz'));

