// YOUR CODE BELOW

const onlyOne = (val1, val2, val3) => {
  if (val1 && !val2 && !val3) return true;
  if (val2 && !val1 && !val3) return true;
  if (val3 && !val1 && !val2) return true;

  return false;
};
