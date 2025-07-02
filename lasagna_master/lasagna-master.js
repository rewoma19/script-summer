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

function quantities(layers) {
  let gramsOfNoodles = 0;
  let litersOfSauce = 0;

  for (let layer of layers) {
    if (layer === "noodles") {
      gramsOfNoodles += 50;
    } else if (layer === "sauce") {
      litersOfSauce += 0.2;
    }
  }

  return { noodles: gramsOfNoodles, sauce: litersOfSauce };
}

// Test cases
console.log(
  quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
);

function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

// Test cases
const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];

addSecretIngredient(friendsList, myList);

console.log(myList);

function scaleRecipe(recipe, numOfPortions) {
  const copyOfRecipe = recipe;
  const multiple = numOfPortions / 2;

  for (let ingredient in copyOfRecipe) {
    copyOfRecipe[ingredient] *= multiple;
  }

  return copyOfRecipe;
}
