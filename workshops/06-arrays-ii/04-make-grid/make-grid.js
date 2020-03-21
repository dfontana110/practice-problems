// YOUR CODE BELOW
const makeGrid = (numCols, numRows) => {
  const grid = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 1; j <= numCols; j++) {
      row.push(j);
    }
    grid.push(row);
  }

  return grid;
};
