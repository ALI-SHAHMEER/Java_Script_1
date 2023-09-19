const arr = []


if(arr.length === 0)
{
    console.log("Empty Array")
}
const obj = {}
if(Object.keys(obj).length === 0)
{
    console.log("Empty Object")
}


// const val1 = 10 ?? 5
// const val1 = NaN ?? 5
// const val1 = undefined ?? 5
// const val1 = undefined ?? null ?? 10
const val1 = undefined ?? null

console.log(val1)

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80"):console.log("more than 80")