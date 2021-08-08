// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
let answer = 1;
function findFactorialRecursive(number) {
  //code here
  //   if (number > 1) {
  //     answer = answer * number;
  //     findFactorialRecursive(number - 1);
  //   }
  if (number < 3) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  //code here
  while (number > 1) {
    answer = answer * number;
    number--;
  }
  return answer;
}

console.log(findFactorialRecursive(10));
