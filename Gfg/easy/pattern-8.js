/* 
*********
 ******* 
  *****  
   ***   
    * 
*/

const pattern_8 = (num) => {
  for (let i = num; i > 0; i--) {
    for (let sp1 = 0; sp1 < num - i; sp1++) {
      process.stdout.write(" ");
    }

    for (let st = 0; st < 2 * i - 1; st++) {
      process.stdout.write("*");
    }
    for (let sp2 = 0; sp2 < num - i; sp2++) {
      process.stdout.write(" ");
    }
    console.log("");
  }
};

pattern_8(5);
