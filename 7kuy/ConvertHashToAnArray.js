function convertHashToArray(hash) {
  const newArr = [];
  for (elem in hash) {
    const elemArr = [];
    elemArr.push(elem);
    elemArr.push(hash[elem]);
    newArr.push(elemArr);
  }
  return newArr.sort();
}

//Short version

const convertHashToArrayShort = (elem) => Object.entries(elem).sort();
