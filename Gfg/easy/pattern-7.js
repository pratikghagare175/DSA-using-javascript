/* 
    *    
   ***   
  *****  
 ******* 
*********

*/

const pattern_7 = (num) => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let s = 0; s < 2 * i + 1; s++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log("");
  }
};

pattern_7(5)
