for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element)
}


for(let i = 1; i <= 10; i++){
    console.log(`Table of ${i}`)
    for(let j = 1 ; j <= 10; j++){
        // console.log(`Inner loop value ${j} and outer loop value ${i}`)
        console.log(` ${i} X ${j} = ${i*j}`)
    }
}


let arr = ["Flash","Batman","Superman","Aquaman"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

for (let index = 1; index < 20; index++) {
    const element = index;
    if(index == 5)
    {
        console.log("5 Detected")
        continue
    }
    console.log(`value of index is ${index}`)
}
for (let index = 1; index < 20; index++) {
    const element = index;
    if(index == 5)
    {
        console.log("5 Detected")
        break
    }
    console.log(`value of index is ${index}`)
}