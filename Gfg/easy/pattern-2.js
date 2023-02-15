/* 
Print the pattern
*
* * 
* * * 
* * * * 
* * * * *
 */

const pattern_2 = (num) => {
    for(let i = 0;i<num;i++){
        for(let j =0;j<i+1;j++){
            process.stdout.write("* ")
        }
        console.log("")
    }
};

pattern_2(5);
