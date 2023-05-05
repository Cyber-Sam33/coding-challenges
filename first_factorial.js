//create function that return the multiplication of the factoria
// 3 outputs 6 (3x2x1)
//4 outputs 24 (4x3x2x1)

function firstFactoral(number) {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total = total * i;
    console.log(total);
  }
}

firstFactoral(1);
firstFactoral(2);
firstFactoral(3);
firstFactoral(4);