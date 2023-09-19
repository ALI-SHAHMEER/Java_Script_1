
// const myArr = [1,2,3,4,5,6]



// myArr.push(7,8,9)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)


// myArr.unshift(0)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)


//slice and splice

// const myn = [1,2,3,4,5,6]
// console.log("Orginal",myn)

// const myn1 = myn.slice(0,3)
// console.log("Slice ",myn1)
// console.log("Orginal",myn)

// const myn2 = myn.splice(0,3)
// console.log("Splice ",myn2)
// console.log("Orginal",myn)

const arr1 = ["iron man", "spider man","thor"]
const arr2 = ["bat man","super man","flash"]

// arr2.push(arr1)
// console.log(arr2)

const arr3 = arr1.concat(arr2)
console.log(arr3)

const arr4 = [...arr1,...arr2]
console.log(arr4)

const problem_Array = [1,2,3,4,[1,2],[0,4,7],[1,4,[9,9,4,8]]]

const solved_Array = problem_Array.flat(Infinity)

console.log(solved_Array)


console.log(Array.isArray("ali"))
console.log(Array.from("ali"))