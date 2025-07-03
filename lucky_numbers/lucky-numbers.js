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

function luckyNumber(value) {
  let valueAsStr = String(value);
  let reversedValue = "";

  for (let i = valueAsStr.length - 1; i >= 0; i--) {
    reversedValue += valueAsStr[i];
  }

  const isPalindrome = valueAsStr === reversedValue;
  return isPalindrome;
}

// Test cases
console.log(luckyNumber(1441));
console.log(luckyNumber(123));
