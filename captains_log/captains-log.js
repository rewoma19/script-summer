// Generate a random starship registry number.

function randomShipRegistryNumber() {
  // Generating a random number within a certain range
  // min + Math.random() * (max - min);
  const randomNum = 1000 + Math.random() * (9999 - 1000);
  //   Convert the randomNum from floating point number to integer using Math.floor()
  return `NCC-${Math.floor(randomNum)}`;
}

// Test case
console.log(randomShipRegistryNumber());

// Generate a random stardate.

function randomStardate() {
  const randomStar = 41000.0 + Math.random() * (42000.0 - 41000.0);
  return randomStar;
}

// Test case
console.log(randomStardate());

function randomPlanetClass() {
  const planetaryClasses = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  //   Generate an index for the random planet that will be returned from the planetaryClasses array
  const randomPlanetIndex = Math.floor(Math.random() * planetaryClasses.length);
  const randomPlanet = planetaryClasses[randomPlanetIndex];
  return randomPlanet;
}

// Test case
console.log(randomPlanetClass());
