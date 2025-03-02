const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promised resolved and returned successfully!");
  }, 2000);
});

promise
  .then((res) => {
    console.log(`Response : ${res}`);
  })
  .catch((error) => {
    console.log(error);
  });
