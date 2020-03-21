// YOUR CODE BELOW
const oddCouple = arr => {
  const odds = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) odds.push(arr[i]);
    if (odds.length === 2) return odds;
  }

  return odds;
};
