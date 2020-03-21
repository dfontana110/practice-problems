// YOUR CODE BELOW
const rotateArray = (arr, num) => {
  const direction = num >= 1 ? 'right' : 'left';

  const rotated = arr.slice();

  for (let i = 0; i < Math.abs(num); i++) {
    direction === 'right'
      ? rotated.unshift(rotated.pop())
      : rotated.push(rotated.shift());
  }

  return rotated;
};
