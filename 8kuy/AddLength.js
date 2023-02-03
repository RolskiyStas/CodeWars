function addLength(str) {
  const words = str.split(" ");
  const newArr = [];

  for (word of words) {
    const wordLength = word.length;
    const newWord = `${word} ${wordLength}`;
    newArr.push(newWord);
  }
  return newArr;
}

// Short version

function addLength(str) {
  return str.split(" ").map((word) => `${word} ${word.length}`);
}
