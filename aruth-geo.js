// /**
//  * Have the function arithGeo(arr) take the array of numbers stored in arr and
//  * return the string "Arithmetic" if the sequence follows an arithmetic pattern
//  * or return "Geometric" if it follows a geometric pattern. If the sequence
//  * doesn't follow either pattern return -1. An arithmetic sequence is one where
//  * the difference between each of the numbers is consistent, where as in a
//  * geometric sequence, each term after the first is multiplied by some constant
//  * or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2,
//  * 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be
//  * entered, and no array will contain all the same elements.
//  *

function arithGeo(arr) {
  if (arr.length <= 1) return -1;

  let geomet = true;
  let arith = true;

  const diff = arr[1] - arr[0];
  const constant = arr[1] / arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      arith = false;

      if (arr[i + 1] / constant !== arr[i])
        geomet = false;
    }
  }

  return arith ? 'Arithmetic' : geomet ? 'Geometric' : -1;

}

console.log(arithGeo([2, 4, 6, 8]));
console.log(arithGeo([2]));
console.log(arithGeo([]));
console.log(arithGeo([-1]));
console.log(arithGeo([2, 6, 18, 54, 162]));


