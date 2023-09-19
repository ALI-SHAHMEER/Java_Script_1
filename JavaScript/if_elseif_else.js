// <,>,<=,>=,!=,==,===,!==


const balance = 1000

if( balance < 500 ){
    console.log("Less than 500")
}else if( balance < 750 ){
    console.log("Less than 750")
}else if( balance < 900){
    console.log("Less than 900")
}else{
    console.log("Less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false 

if(userLoggedIn){
    console.log("USER LOGGED IN")
    if(loggedInFromEmail){
        console.log("USER LOGGED IN FROM EMAIL")
        if(debitCard){
            console.log("User can purchase course")
        }else{
            console.log("User cannot purchase course")
        }
    }else if(loggedInFromGoogle){
        console.log("USER LOGGED IN FROM GOOGLE")
        if(debitCard){
            console.log("User can purchase course")
        }
        else{
            console.log("User cannot purchase course")
        }
    }
}else{
    console.log("USER LOGGED OUT")
}