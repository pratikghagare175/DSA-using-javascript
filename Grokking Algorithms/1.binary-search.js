const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = low + high;
    let guess = list[mid];

    if (guess === item) return mid;

    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
};

const arr = [1, 3, 5, 7, 9, 12, 15, 18];
console.log("== ANS ==", binary_search(arr, 9));
