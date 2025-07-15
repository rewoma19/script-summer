// Make use of REST operator to allow indefinite number of arguments as an array
function getListOfWagons(...wagonIDs) {
  return wagonIDs; // return list of wagon IDs
}

// Test Case
console.log(getListOfWagons(1, 7, 12, 3, 14, 8, 5));
