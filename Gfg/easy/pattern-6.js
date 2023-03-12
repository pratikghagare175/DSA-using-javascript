/* 
12345
1234
123
12
1
*/

const pattern_6 = (num) => {
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    console.log("");
  }
};

pattern_6(5);
