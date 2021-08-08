const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let counter = 0;
  while (counter < array.length) {
    for (let i = 0; i < array.length - counter; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    counter++;
  }
}

bubbleSort(numbers);
console.log(numbers);
