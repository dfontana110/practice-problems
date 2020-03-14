// YOUR CODE BELOW

const onlyOdds = num => {
  if (num < 1) return 0;
  let sum = 0;
  for (let i = num; i >= 1; i--) {
    if (i % 2 === 1) sum += i;
  }
  return sum;
};
