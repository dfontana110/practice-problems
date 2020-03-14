// YOUR CODE BELOW
const myIndexOf = (str, searchVal, startIdx = 0) => {
  for (let i = startIdx; i <= str.length - searchVal.length; i++) {
    let subStr = str.slice(i, i + searchVal.length);
    if (subStr === searchVal) return i;
  }
  return -1;
};
