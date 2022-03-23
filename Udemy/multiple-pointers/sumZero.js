// SUM ZERO - RETURN THE FIRST PAIR OF NUMBERS WHOSE SUM IS ZERO

//* TIME COMPLEXITY - O(N);
//* SPACE COMPLEXITY - O(1);

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    //? if sum is zero return that pair and exit the loop
    if (sum === 0) return [arr[left], arr[right]];

    if (sum > 0) {
      //? if the sum is greater than zero i.e on the positive side, then decrease the right pointer by 1
      right--;
    } else {
      //? if the sum is less than zero i.e on the negative side, then increase the left pointer by 1
      left++;
    }
  }
};

const check = [-6, -3, -2, -1, 0, 2, 3, 4, 5];
console.log(sumZero(check));
