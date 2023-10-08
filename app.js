function numberOccur(numberArray) {
  let counts = {};

  numberArray.map((count) => {
    if (counts[count]) {
      counts[count] += 1;
    } else {
      counts[count] = 1;
    }
  });
  return counts;
}

const numberArray = [
  1, 3, 2, 3, 4, 5, 6, 2, 1, 4, 1, 3, 5, 3, 5, 1, 3, 4, 5, 6,
];

console.log(numberOccur(numberArray), numberArray.length);
