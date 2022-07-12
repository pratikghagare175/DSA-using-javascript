// https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1/?page=1&difficulty[]=0&category[]=Arrays&sortBy=submissions
const MissingNumber = (array, n) => {
  const arr = array.sort((a, b) => a - b);
  let missingNum = 0;
  for (let i = 1; i < n; i++) {
    if (i !== arr[i - 1]) {
      missingNum = i;
      return missingNum;
    }
  }
  return n;
};

console.log(MissingNumber([1, 2, 3, 5], 5)); // 4
console.log(MissingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5], 10)); // 9
