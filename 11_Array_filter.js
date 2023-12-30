// The Array Filterer, You are building a search feature for your e-commerce site. Write a function
// named filterProducts that takes an array of product objects and a filter criterion. The function
// should return a new array containing only the products that match the filter criterion.

let productArr = ["jacket", "t-shirt", "hoddies", "trousers", "joggers","cap","belt", "bag"]

const filterProducts = (products, critiria)=>{
   let filteredProduct =  products.filter(critiria)
    return filteredProduct
}



const lengthfn = val => val.length>5
const startfn = val => val.startsWith("j")


console.log(filterProducts(productArr , startfn))


