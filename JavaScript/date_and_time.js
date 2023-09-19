let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleString())

let myCreatedDate = new Date(2023,0,23,23,5,3)
let especificData = new Date("01-24-2001")
console.log(myCreatedDate.toLocaleString())
console.log(especificData.toLocaleString())


let timeStamp = Date.now()
console.log(timeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate())

newDate.toLocaleDateString('default',{
    weekday:"long"
})
