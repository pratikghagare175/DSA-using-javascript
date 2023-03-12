/* 
    *    
   ***   
  *****  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *    
*/

const pattern_9 = (num) => {
  const ups = Math.floor(num / 2);
  for (let i = 0; i < ups; i++) {
    for (let j = 0; j < ups - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let s = 0; s < 2 * i + 1; s++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < ups - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log("");
  }

  for (let i = ups; i > 0; i--) {
    for (let sp1 = 0; sp1 < ups - i; sp1++) {
      process.stdout.write(" ");
    }

    for (let st = 0; st < 2 * i - 1; st++) {
      process.stdout.write("*");
    }
    for (let sp2 = 0; sp2 < ups - i; sp2++) {
      process.stdout.write(" ");
    }
    console.log("");
  }
};

pattern_9(10);
