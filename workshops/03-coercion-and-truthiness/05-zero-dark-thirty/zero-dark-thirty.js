// YOUR CODE BELOW

const zeroDarkThirty = num => {
  if (num === 0) return NaN;
  let numString = String(num);
  let noZeroes = '';
  for (let i = 0; i < numString.length; i++) {
    let char = numString[i];
    if (char !== '0') noZeroes += char;
  }

  return Number(noZeroes);
};
