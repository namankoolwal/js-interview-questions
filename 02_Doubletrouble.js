// The Double Trouble: You are tasked with writing a function that doubles each element in an array.
// However, there's a catch: if the array contains consecutive duplicate elements, only double one of
// Them,


let arr =[2,4,4,6,8,7,5,3,1,9,5,8,7,7,8,2,1,4]
let arr2 =[]
for (let i =0; i<arr.length ; i++){
    if(arr[i] != arr[i+1]){
        arr2.push(arr[i])
    }
}

let double = arr2.map((element)=> element*2)
console.log(double)

