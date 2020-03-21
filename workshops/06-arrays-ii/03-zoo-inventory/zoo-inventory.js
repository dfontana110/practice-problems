// YOUR CODE BELOW
const zooInventory = zooArr => {
  return zooArr.map(animalArr => {
    animalArr = `${animalArr[0]} the ${animalArr[1][0]} is ${animalArr[1][1]}.`;
    return animalArr;
  });
};
