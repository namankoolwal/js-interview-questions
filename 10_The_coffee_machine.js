// The Coffee Machine: In your coffee Shop application, you need to simulate the process Of brewing
// coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and
// returns a promise, The promise should resolve with a message indicating that the coffee is ready
// after a random delay.


const brewCoffee =(type) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`your ${type} is ready`)
        }, 1000 * Math.random()*5);
    })
}

(async ()=>{
    let readyCoffe = await brewCoffee("expreeso")
    .then((msg) =>{
        return msg
    })
    .catch(err=>{
        return err
    })
    console.log(readyCoffe)
})()