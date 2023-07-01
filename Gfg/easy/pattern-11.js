/*
print the following pattern

1
01
101
0101
10101
 
 */

const pattern_11 = (num) => {
  for (let i = 0; i < num; i++) {
    let startNum = 1;
    if (i % 2 !== 0) startNum = 0;
    for (let st = 0; st <= i; st++) {
      process.stdout.write(String(startNum));
      startNum = 1 - startNum;
    }
    console.log("");
  }
};

pattern_11(5);
