function cookingStatus(remainingTime) {
  let status = "";

  if (remainingTime) {
    if (remainingTime === 0) {
      status = "Lasagna is done.";
    } else {
      status = "Not done, please wait.";
    }
  } else {
    status = "You forgot to set the timer.";
  }

  return status;
}

// Test cases
console.log(cookingStatus(12));
console.log(cookingStatus());
