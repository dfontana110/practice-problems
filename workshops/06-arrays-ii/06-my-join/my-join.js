// YOUR CODE BELOW
const myJoin = (arr, sep = ',') => {
  let joined = '';

  arr.forEach((elem, index) => {
    if (index !== 0) {
      joined += sep;
    }
    if (elem) joined += elem;
  });

  return joined;
};
