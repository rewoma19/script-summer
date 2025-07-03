function twoSum(array1, array2) {
  // Join items in individual arrays to strings
  // An empty string will separate the combined characters / items
  const num1AsStr = array1.join("");
  const num2AsStr = array2.join("");

  //   Convert strings to numbers and add them together
  const sumOfNums = Number(num1AsStr) + Number(num2AsStr);

  return sumOfNums;
}

// Test case
console.log(twoSum([1, 2, 3], [0, 7]));
