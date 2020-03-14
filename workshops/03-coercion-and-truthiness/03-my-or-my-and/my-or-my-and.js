// YOUR CODE BELOW

const myOr = (val1, val2, val3) => {
  if (val1) return val1;
  if (val2) return val2;
  if (val3) return val3;

  return val3;
};

const myAnd = (val1, val2, val3) => {
  if (!val1) return val1;
  if (!val2) return val2;
  if (!val3) return val3;

  return val3;
};
