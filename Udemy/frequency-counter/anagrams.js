// An Anagram is word, phrase or name formed by rearranging the letters of another
// such as cinema, formed as iceman

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const checkWord = {};

  for (const val of str1) {
    if (checkWord[val]) checkWord[val]++;
    else checkWord[val] = 1;
  }

  for (const el of str2) {
    if (!checkWord[el]) return false;
    else checkWord[el]--;
  }

  return true;
};

// * =========== Test Cases =============== //
console.log(validAnagram("cinema", "iceman"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("qwq", "wqr"));
