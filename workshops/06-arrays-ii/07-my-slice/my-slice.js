// YOUR CODE BELOW

const mySlice = (arr, start = 0, end = arr.length) => {
  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;
  let sliced = [];

  for (let i = start; i < end; i++) {
    let elem = arr[i];
    sliced.push(elem);
  }

  return sliced;
};
