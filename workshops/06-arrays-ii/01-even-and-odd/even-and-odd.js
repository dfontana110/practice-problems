// YOUR CODE BELOW
const evenAndOdd = arr => {
  const evens = [];
  const odds = [];

  arr.forEach(num => {
    num % 2 ? odds.push(num) : evens.push(num);
  });
  return [evens, odds];
};
