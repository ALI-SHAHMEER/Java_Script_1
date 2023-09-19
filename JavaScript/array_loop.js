const name = "Ali Shahmeer"

for (const i of name) {
    console.log(`char is ${i}`)
}

const obj = {
    js:'java script',
    cpp:'C++',
    rb:'Ruby',
    st:'Swift'
}

for (const key in obj) {
    console.log(`${key} == ${obj[key]}`)
}