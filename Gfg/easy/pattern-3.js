/* 
Print the pattern
1
12
123
1234
12345
 */

const pattern_3 = (num) => {
  for (let i = 0; i < num; i++) {
    for (let j = 1; j <= i + 1; j++) {
      process.stdout.write(j.toString());
    }
    console.log("");
  }
};

pattern_3(5);
