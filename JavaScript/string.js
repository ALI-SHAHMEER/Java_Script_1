const gmaeName = "ali"
const repoCount = 78

console.log(`Hello my name is ${gmaeName} and my repocount is ${repoCount}`)

const gameName = new String('Snop Dog')

console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.slice());
console.log(gameName.indexOf('D'));


const newString = gameName.substring(0,3)
const anotherString = gameName.slice(-8,4)

console.log(newString)
console.log(anotherString)


const x = "         Ali         "
console.log(x)
console.log(x.trim())

const url = "https://ALI-SHAHMEER/PORTFOLIO%20.io"

console.log(url.replace('%20','/github'))

console.log(url.includes('ali'))

const y = "A-L-I-S-H-A-H-M-E-E-R"
console.log(y.split('-'))