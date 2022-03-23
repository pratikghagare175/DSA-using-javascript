/*
There are Two Arrays, The elements of the second array are squared to that of the
elements of the first array, Find if all the squares of the element of the first array
is present in the second array and return true or else return false.
Note:- The order is not important
*/

const counting = (arrOne, arrTwo) => {
  //? check length of both the arrays, if not equal return false
  if (arrOne.length !== arrTwo.length) return false;

  const check = {};
  
  //? Using the first array we'll store the square of each number as object property,
  
  for (let i = 0; i < arrOne.length; i++) {
    const num = arrOne[i] ** 2;
    if (!check[num]) {
      check[num]++;
    } else {
      check[num] = 1;
    }
  }

  for (let j = 0; j < arrTwo.length; j++) {
    const numToCheck = arrTwo[j];
    if (!check[numToCheck]) return false;
    else {
      check[numToCheck]--;
    }
  }

  return true;
};

console.log(counting([1, 2, 3, 3], [4, 1, 9, 9]));
