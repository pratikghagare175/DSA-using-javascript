//* Time Complexity - O(N)

const maxSubArray = (arr, num) => {
  if (arr.length < num) return false;

  let temp = 0;
  for (let i = 0; i < num; i++) {
    temp += arr[i];
  }
  let max = temp;

  for (let j = num; j < arr.length - num; j++) {
    temp = temp - arr[j - num] + arr[j];
    max = Math.max(temp, max);
  }

  return max
};

console.log(maxSubArray([2, 6, 7, 9, 3, 1, 4, 5], 2));
