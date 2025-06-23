function needsLicense(kind) {
  let needsLicense;

  if (kind === "truck" || kind === "car") {
    needsLicense = true;
  } else {
    needsLicense = false;
  }

  return needsLicense;
}

function chooseVehicle(option1, option2) {
  let chosenOption;

  if (option1 < option2) {
    chosenOption = option1;
  } else {
    chosenOption = option2;
  }

  const decisionStatement = chosenOption + " is clearly the better choice.";
  return decisionStatement;
}

function calculateResellPrice(originalPrice, age) {
  const lessThan3YearsOld = age < 3;
  const moreThan10YeardOld = age > 10;
  const between3And10YearsOld = 3 <= age <= 10;
  let resellPrice;

  if (lessThan3YearsOld) {
    resellPrice = 0.8 * originalPrice;
  } else if (moreThan10YeardOld) {
    resellPrice = 0.5 * originalPrice;
  } else if (between3And10YearsOld) {
    resellPrice = 0.7 * originalPrice;
  }

  return resellPrice;
}
