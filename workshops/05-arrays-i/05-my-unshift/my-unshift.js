// YOUR CODE BELOW
const myUnshift = (arr, val) => {
  const newArr = [val, ...arr];

  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i]);
  // }

  return newArr;
};
