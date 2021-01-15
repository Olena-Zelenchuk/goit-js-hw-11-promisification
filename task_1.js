const delay = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  console.log(promise);
  return promise;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(3000).then(logger);

// // Вызовы функции для проверки
// delay(2000); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms
