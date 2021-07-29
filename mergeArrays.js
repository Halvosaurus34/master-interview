// const mergeArrays = (arr1, arr2) => {
//   const newArray = [...arr1, ...arr2].sort((a, b) => a - b);
//   console.log(newArray);
//   return newArray;
// };
const mergeArrays = (arr1, arr2) => {
  let mergedArray = [];
  let continueLoop = true;
  while (continueLoop) {
    if (arr1.length < 1 || arr2.length < 1) {
      const emptyArray = arr1.length < 1 ? arr1 : arr2;
      mergedArray = [...mergedArray, ...emptyArray];
      continueLoop = false;
    }
    if (arr1[0] <= arr2[0]) {
      mergedArray.push(arr1[0]);
      arr1.shift();
    } else {
      mergedArray.push(arr2[0]);
      arr2.shift();
    }
  }
  console.log(mergedArray);
  return mergedArray;
};
mergeArrays([1, 2, 81], [1, 3, 7, 92]);
