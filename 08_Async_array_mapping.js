// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a
// new array Of Promises where each number is multiplied by 2 after a delay Of 500 milliseconds.


const prom = (arr)=>{
    let promisedaArr =[];
    
    for(let i of arr){
        promisedaArr.push(
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(i*2)
                }, 500);
            })
        )
    }
    
    return Promise.all(promisedaArr)
}

(async()=>{
  let double = await prom([1,2,3,4])
  console.log(double)
})()

