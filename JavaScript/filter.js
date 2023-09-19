const myArr = [1,2,3,4,5,6,7,8,9,10]

const newArr = myArr.filter((num) => (num > 5))
const newArr1 = myArr.filter((num) => {return num > 5})
console.log(newArr)
console.log(newArr1)


const myArr2 = []

myArr.forEach((num)=>{
    if(num > 5){
        myArr2.push(num)
    }
})

console.log(myArr2)

const books = [
    {title:'Book One', genre:'Fiction', publish: 1981, edition: 2004},
    {title:'Book Two', genre:'Non-Fiction', publish: 1992, edition: 2008},
    {title:'Book Three', genre:'History', publish: 2000, edition: 2012},
    {title:'Book Four', genre:'Fiction', publish: 1989, edition: 2010},
    {title:'Book Five', genre:'Science', publish: 2009, edition: 2014},
    {title:'Book Six', genre:'Fiction', publish: 1987, edition: 2015},
    {title:'Book Seven', genre:'History', publish: 1999, edition: 2018},
    {title:'Book Eight', genre:'Fiction', publish: 1961, edition: 2001},
    {title:'Book Nine', genre:'Fiction', publish: 1971, edition: 2024},
    {title:'Book Tenth', genre:'Fiction', publish: 1411, edition: 2004},
]

const userBooksHistory = books.filter((bk) => bk.genre == 'History')
const userBooksFiction = books.filter((bk) => bk.genre == 'Fiction')
const userBooksPublish = books.filter((bk) => bk.publish >= 2000 && bk.genre == 'History')
console.log(userBooksHistory)
console.log(userBooksFiction)
console.log(userBooksPublish)
