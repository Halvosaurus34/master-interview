// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
  let fib = [0, 1];
  while (fib.length !== n + 1) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  //   for (let i = 1; i < n - 1; i++) {
  //     fib.push(fib[i - 1] + fib[i]);
  //   }
  return fib[n];
}
console.log(fibonacciIterative(3));

function fibonacciRecursive(n) {
  //code here;
  let fib = [0, 1];
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8));
