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

function errorMessage(input) {
  const noInputValues = ["", null, undefined];
  const inputAsNum = Number(input);
  let errMessage = "";

  //   Check if user input is either an empty string, null, or undefine
  if (noInputValues.includes(input)) {
    errMessage = "Required field";
    // Check if user input is not a number or 0
  } else if (Number.isNaN(inputAsNum) || inputAsNum === 0) {
    errMessage = "Must be a number besides 0";
  }

  return errMessage;
}

// Test cases
console.log(errorMessage("123"));
console.log(errorMessage(""));
console.log(errorMessage("abc"));
