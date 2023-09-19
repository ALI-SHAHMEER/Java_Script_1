

const map = new Map

map.set('Pk','Pakistan')
map.set('IN','India')
map.set('AFG','Afghanistan')
map.set('Pk','Pakistan')
map.set('IS','Israel')
map.set('CAN','Cannada')

for (const [key,value] of map) {
    console.log(`${key}:-${value}`)
}

const myArr = [1,2,3,4,5,6,7,8,9,10]

const  newArr = myArr.map((num) => {return num + 10})

console.log(newArr)