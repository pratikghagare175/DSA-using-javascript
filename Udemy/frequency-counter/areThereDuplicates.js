const areThereDuplicates = (...arr) => {
  if (arr.length === 0) return false;

  const hash = {};
  for (const d of arr) {
    if (hash[d]) hash[d]++;
    else hash[d] = 1;
  }

  for (const val in hash) {
    if (hash[val] > 1) return true;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 2));
