// YOUR CODE BELOW

const arrayFlattener = arr => {
  const flatArr = [];

  arr.forEach(val => {
    if (Array.isArray(val)) {
      flatArr.push(...arrayFlattener(val));
    } else {
      flatArr.push(val);
    }
  });

  // for (let i = 0; i < arr.length; i++) {
  //   let elem = arr[i];
  //   if (Array.isArray(elem)) {
  //     for (let j = 0; j < elem.length; j++) {
  //       flatArr.push(elem[j]);
  //     }
  //   } else {
  //     flatArr.push(elem);
  //   }
  // }

  return flatArr;
};
