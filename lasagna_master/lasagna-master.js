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

function preparationTime(layers, avgPrepTimePerLayer = 2) {
  const numOfLayers = layers.length;
  const prepTime = numOfLayers * avgPrepTimePerLayer;

  return prepTime;
}

// Test cases
const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
console.log(preparationTime(layers, 3));
console.log(preparationTime(layers));
