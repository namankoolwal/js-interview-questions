// The Sum Selector: You are working on a function that should sum all numbers in an array until it
// encounters a negative number. Write a function that performs this summation.


let arr = [1,2,1,3,4,-5,6,7,8,9]
let sum =0

function Sums(arr){
for(let i of arr){
    if(i<0){
        break;
    }
    else{
        sum+=i
    }
}
return sum
}

console.log(Sums(arr))