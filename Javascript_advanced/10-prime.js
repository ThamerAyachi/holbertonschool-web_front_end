const countPrimeNumbers = () => 25;

let start = window.performance.now();

for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

let finish = window.performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${
    finish - start
  } miliseconds`
);
