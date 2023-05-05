// * Have the function abCheck(str) take the str parameter being passed and return
// * the string true if the characters a and b are separated by exactly 3 places
// * anywhere in the string at least once (ie. "lane borrowed" would result in
// * true because there is exactly three characters between a and b). Otherwise
// * return the string false.


function ABCheck(str) {
  //remove all white space to account for spaces
  str = str.replace(/ /g, '');
  // console.log(str);

  //search function returns the first index position that satisfies the regex condition
  let match = str.search(/a..b/);
  console.log('match', match);
  return match >= 0 ? 'true' : 'false';
}

console.log(ABCheck("lane corraweb"));
console.log(ABCheck("lane borrawed"));
console.log(ABCheck("lane borraweb"));



// SOLUTION 2
// function abCheck(str) {
//   let searchLetters = ['a', 'b'];
//   let letterSpace = 3;

//   if (str.length < letterSpace + 2) {
//     return 'false';
//   }

//   for (let i = 0; i < str.length - letterSpace - 1; i++) {
//     if (str[i] === searchLetters[0]) {
//       if (str[i + letterSpace + 1] === searchLetters[1]) {
//         return 'true';
//       }
//     }

//     if (str[i] === searchLetters[1]) {
//       if (str[i + letterSpace + 1] === searchLetters[0]) {
//         return 'true';
//       }
//     }
//   }

//   return 'false';
// }

