function randomShipRegistryNumber() {
  // Generating a random number within a certain range
  // min + Math.random() * (max - min);
  const randomNum = 1000 + Math.random() * (9999 - 1000);
  //   Convert the randomNum from floating point number to integer using Math.floor()
  return `NCC-${Math.floor(randomNum)}`;
}

// Test case
randomShipRegistryNumber();
