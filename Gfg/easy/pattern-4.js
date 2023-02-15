/* 
Print the pattern
1
22
333
4444
55555
 */

const pattern_4 = (num)=>{
    for(let i = 0; i<= num; i++){
        for(let j = 1;j<i+1;j++){
            process.stdout.write(i.toString())
        }
        console.log("")
    }
}

pattern_4(5)