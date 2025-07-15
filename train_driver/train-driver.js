// Make use of REST operator to allow indefinite number of arguments as an array
function getListOfWagons(...wagonIDs) {
  return wagonIDs; // return list of wagon IDs
}

// Test Case
console.log(getListOfWagons(1, 7, 12, 3, 14, 8, 5));

// Reorder the array of wagons by moving the first 2 wagons to the end of the array.
function fixListOfWagons(ids) {
  const [wagon1, wagon2, ...allOtherWagons] = ids;
  const fixedListOfWagons = [...allOtherWagons, wagon1, wagon2];
  return fixedListOfWagons;
}

// Test Case
const eachWagonsID = [2, 5, 1, 7, 4, 12, 6, 3, 13];
console.log(fixListOfWagons(eachWagonsID));
