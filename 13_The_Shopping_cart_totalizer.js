// The Shopping Cart Totalizer. You are working on an e-commerce website, and you need to calculate
// the total cost of items in the shopping cart. Implement a function named calculateTotal that takes
// an array of products with prices and quantities and returns the total cost.


const calculateTotal =(items)=>{
return items.reduce((abb,curr)=>{
    return abb+ curr.price
},0)
}


let itemArr = [
    {
        itemName : "jacket",
        price: 250
    },
    {
        itemName : "shirt",
        price: 150
    },
    {
        itemName : "trousers",
        price: 450
    },
    {
        itemName : "shoes",
        price: 750
    }

]

console.log(calculateTotal(itemArr))