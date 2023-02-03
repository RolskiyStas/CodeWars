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
