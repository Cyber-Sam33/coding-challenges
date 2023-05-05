// * Have the function wordCount(str) take the str string parameter being passed
// * and return the number of words the string contains (e.g. "Never eat shredded
// * wheat or cake" would return 6). Words will be separated by single spaces.

function wordCount(str) {
  //plits at the seperator, in this case a space " ". Seperator can be any character
  return str === "" ? 0 : str.split(' ').length;
}

console.log(wordCount('one two'));
