// YOUR CODE BELOW

const crazyCaps = str => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    i % 2 ? (newStr += str[i].toUpperCase()) : (newStr += str[i]);
  }

  return newStr;
};
