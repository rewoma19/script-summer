function totalBirdCount(birdsPerDay) {
  let totalNumOfBirds = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    totalNumOfBirds += birdsPerDay[i];
  }

  return totalNumOfBirds;
}
