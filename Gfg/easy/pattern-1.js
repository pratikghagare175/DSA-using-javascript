/* 
Print the pattern
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
 */

const pattern_1 = (num) => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      process.stdout.write("* ");
    }
    console.log("");
  }
};
pattern_1(5);
