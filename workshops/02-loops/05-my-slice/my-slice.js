// YOUR CODE BELOW

const mySlice = (orgStr, startIdx = 0, endIdx = orgStr.length) => {
  let slicedStr = '';

  for (let i = startIdx; i < endIdx; i++) {
    slicedStr += orgStr[i];
  }
  return slicedStr;
};
