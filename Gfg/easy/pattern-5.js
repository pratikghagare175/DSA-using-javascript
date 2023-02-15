const pattern_5 = (num) => {
  for (let i = num; i > 0; i--) {
    for(let j =i; j>0;j--){
        process.stdout.write("* ")
    }
    console.log("")
  }
};

pattern_5(5);
