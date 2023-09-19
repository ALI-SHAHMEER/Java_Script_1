
function ashelyLookAtMe(){
    console.log("A")
    console.log("l")
    console.log("i")
}

ashelyLookAtMe()

function add2(num1,num2){
    console.log(num1+num2)
}

add2(411,-78)

function userLoginMessage(username){
    if(username === undefined)
    {
        console.log("Please enter valid user name")
    }
    return `${username} just got logged in`
}

console.log(userLoginMessage(""))

const obj = {
    name:"ali",
    price:199
}
function fObj(anyObj){
    console.log(`Name:${anyObj.name} Price:${anyObj.price}`)
}

fObj(obj)

const arr = [10,30,50,60,90]

function farr(anyArray){
    console.log(`Array Second element is ${anyArray[1]}`)
}

farr(arr)