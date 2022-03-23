/* 
https://leetcode.com/problems/contains-duplicate

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

const containsDuplicate = (nums) => {
  //? create a object to hold the values of the array as object property
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    //? 
    if (hash[current]) return true;
    else hash[current] = 1;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
