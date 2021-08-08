const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let smallest;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; i < array.length - i; j++) {
      if (array[j] < array[j + 1]) {
        smallest = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallest.index];
    array[smallest.index] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
