// The Asynchronous Shopper: Imagine you are building an online shopping application, Write an
// asynchronous function called placeOrder that simulates placing an order and returns a promise.
// The promise should resolve with an order confirmation message after a random delay.

const placeOrder = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(`order for ${order} is confirmed`);
    }, 1000 * Math.random() * 5);
  });
};

(async () => {
  let order = await placeOrder("Laptop")
    .then((confirm) => {
      return confirm;
    })
    .catch((err) => {
      return err;
    });
  console.log(order);
})();
