/*

*
**
***
****
*****
****
***
**
*

*/

const pattern_10 = (num) => {
  for (let i = 1; i <= 2 * num - 1; i++) {
    let st = i;
    if (i > num) st = 2 * num - i;
    for (let j = 0; j < st; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
};

pattern_10(5);
