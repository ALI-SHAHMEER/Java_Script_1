const programming = ['py','js','rb','cpp','cs','c','dart']

programming.forEach(function (item){
    console.log(item)
});

function printMe(item){
    console.log(item)
}

programming.forEach(printMe)

programming.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const obj = [
    {
        languageName:'java script',
        languageFileName:'C++'
    },
    {
        languageName:'Ruby',
        languageFileName:'Swift',
    },
    {
        languageName:'Csharp',
        languageFileName:'C'
    }
]

obj.forEach((item) => {
    console.log(item.languageName + item.languageFileName)
})