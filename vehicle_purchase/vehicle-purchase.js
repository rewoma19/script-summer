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
