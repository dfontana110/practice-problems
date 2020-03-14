// YOUR CODE BELOW

const bacteriaTime = (curr, target) => {
  if (curr > target) return 'targetNum must be larger than currentNum';
  let numMins = 0;

  while (curr < target) {
    curr *= 2;
    numMins += 20;
  }

  return numMins;
};
