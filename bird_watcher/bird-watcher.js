function totalBirdCount(birdsPerDay) {
  let totalNumOfBirds = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    totalNumOfBirds += birdsPerDay[i];
  }

  return totalNumOfBirds;
}

function birdsInWeek(birdsPerDay, week) {
  const startDay = (week - 1) * 7;
  let totalBirdsInWeek = 0;

  for (let i = startDay; i < startDay + 7; i++) {
    totalBirdsInWeek += birdsPerDay[i];
  }

  return totalBirdsInWeek;
}
