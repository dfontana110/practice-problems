// YOUR CODE BELOW

const myLastIndexOf = (arr, searchVal, startIdx = arr.length - 1) => {
  for (let i = startIdx; i >= 0; i--) {
    if (arr[i] === searchVal) return i;
  }
  return -1;
};
