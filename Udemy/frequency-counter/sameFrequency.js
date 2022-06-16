/* 
Write a function called sameFrequency. Given two positive integers, find out if
two numbers have same frequency of digits.
*/

/*
    Test Cases
    sameFrequency(281,182) //true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

const sameFrequency = (num1, num2) => {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) return false;

  const hash = {};
  for (const s of str1) {
    if (hash[s]) hash[s]++;
    else hash[s] = 1;
  }

  for (const val of str2) {
    if (!hash[val]) return false;
    else hash[val]--;
  }

  return true;
};

console.log(sameFrequency(281, 182));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
