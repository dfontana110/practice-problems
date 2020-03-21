// YOUR CODE BELOW
const removeColumns = (grid, numCols) => {
  return grid.map(col => {
    let count = 0;
    while (count < numCols) {
      col.pop();
      count++;
    }
    return col;
  });
};
