
const sym = Symbol("key1")

const obj = {
    name : "Ali",
    "full name": "Ali Shahmeer",
    [sym]:"keyPair",
    age : 21,
    email:"areo5459@gmail.com"
}

console.log(obj.name)
console.log(obj["full name"])
console.log(obj.age)
console.log(obj.email)
console.log(typeof obj.sym)

console.log(obj)

obj.greeting = function(){
    console.log("Hello World")
}
obj.greeting()

obj.greeting2 = function(){
    console.log(`Hello Master ${this["full name"]}`)
}
obj.greeting2()


const tinder =  new Object()
// const tinder = {}

tinder.id = "123abc"
tinder.name = "Johny"
tinder.loggedIn = true

console.log(typeof tinder)

const reguser = {
    email: "afd",
    fullname:{
        userfullname:{
            firstname:"ali",
            lastname:"shahmeer"
        }
        
    }
}

console.log("My name is "+ reguser.fullname.userfullname.firstname)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.keys(tinder))
console.log(Object.values(obj3))
console.log(Object.values(tinder))
console.log(Object.entries(obj3))
console.log(Object.entries(tinder))

const course = {
    courseName:"JS",
    coursePrice:"999",
    courseInstructor:"Ali"
}

const {courseName} = course
const {coursePrice} = course
const {courseInstructor} = course

console.log(`Name:${courseName} Instructor:${courseInstructor} Price:${coursePrice}`)