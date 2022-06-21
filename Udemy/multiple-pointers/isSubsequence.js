const isSubsequence = (str1, str2) => {
    if (str2.length < str1.length) return false;
    let subStr = str1;
    for (const st of str2) {
      if (subStr.length === 0) return true;
      const current = subStr.slice(0, 1);
      if (st === current) {
        subStr = subStr.slice(1);
      } else continue;
    }
    if (subStr.length === 0) return true;
    else return false;
  };
  
  console.log(isSubsequence("abc", "abracadabr"));
  