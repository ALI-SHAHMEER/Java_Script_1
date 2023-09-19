

const shopCart = [199,54,86,96,47,25,36]

const bill = shopCart.reduce((acc,curval)=>(acc + curval),0)

console.log(bill)


const shoppingCart = [
    {
        itemName:'Js course',
        price:999
    },
    {
        itemName:'Py course',
        price:1999
    },
    {
        itemName:'Mobile course',
        price:19999
    },
    {
        itemName:'TS course',
        price:9999
    },
    {
        itemName:'Web course',
        price:99999
    },
]

const cartBill = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(cartBill)