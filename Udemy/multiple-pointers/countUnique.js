/* 
Implement a Function called countUniqueValues, which accepts sorted array, and counts
the unique values in the array.
*/

const countUniqueValues = (arr) => {
  let left = 0;

  if (arr.length === 0) return left;

  for (let j = 1; j < arr.length; j++) {
    if (arr[left] !== arr[j]) {
      left++;
      arr[left] = arr[j];
    }
  }

  return left + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
