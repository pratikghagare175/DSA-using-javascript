const duplicates = (a, n) => {
  //your code here
  const obj = {};
  const ans = [];
  for (let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      obj[a[i]]++;
    } else {
      obj[a[i]] = 1;
    }
  }

  for (const val in obj) {
    if (obj[val] > 1) {
      ans.push(Number(val));
    }
  }

  if (ans.length === 0) {
    return [-1];
  } else {
    return ans;
  }
};

console.log(duplicates([2,3,1,2,3],5)); // [2,3]
console.log(duplicates([0,3,1,2],4)); // [-1]