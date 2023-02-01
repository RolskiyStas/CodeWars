// Find Multiples of a Number
function findMultiples(integer, limit) {
  const arr = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer == 0) {
      arr.push(i);
    }
  }
  return arr;
}
