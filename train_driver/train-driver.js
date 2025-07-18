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

// Fix the array of wagons by inserting an array of wagons after the first element in eachWagonsID.

function correctListOfWagons(ids, missingWagons) {
  const [locomotive, ...otherWagons] = ids;
  const correctWagonsList = [locomotive, ...missingWagons, ...otherWagons];
  return correctWagonsList;
}

// Test case
const eachWagonsID2 = [1, 5, 20, 7, 4, 8];
const missingWagons = [3, 17, 6, 15];
console.log(correctListOfWagons(eachWagonsID2, missingWagons));

// Extend route information by adding another object

function extendRouteInformation(information, additional) {
  const extendedRoute = { ...information, ...additional };
  return extendedRoute;
}

// Test case
const route = {
  from: "Berlin",
  to: "Hamburg",
};

const moreRouteInformation = {
  length: "100",
  speed: "50",
};

console.log(extendRouteInformation(route, moreRouteInformation));

function separateTimeOfArrival(information) {
  const { timeOfArrival, ...otherInfo } = information;
  const separatedRouteInfo = [timeOfArrival, { ...otherInfo }];
  return separatedRouteInfo;
}

// Test case
const routeInformation = {
  from: "Berlin",
  to: "Hamburg",
  length: "100",
  timeOfArrival: "10:10",
};

console.log(separateTimeOfArrival(routeInformation));
