// YOUR CODE BELOW
const isVowel = char => 'aeiouAEIOU'.includes(char);

const mostVowels = str => {
  let currWord = '';
  let currCount = 0;

  let maxWord = '';
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && i !== str.length - 1) {
      currWord += str[i];
      if (isVowel(str[i])) currCount += 1;
    } else {
      if (currCount > maxCount) {
        maxCount = currCount;
        maxWord = currWord;
      }
      currWord = '';
      currCount = 0;
    }
  }

  return maxWord;
};
