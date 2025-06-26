function timeToMixJuice(name) {
  let timeNeededToMix;

  switch (name) {
    case "Pure Strawberry Joy":
      timeNeededToMix = 0.5;
      break;
    case "Energizer":
      timeNeededToMix = 1.5;
      break;
    case "Green Garden":
      timeNeededToMix = 1.5;
      break;
    case "Tropical Island":
      timeNeededToMix = 3;
      break;
    case "All or Nothing":
      timeNeededToMix = 5;
      break;
    default:
      timeNeededToMix = 2.5;
  }

  return timeNeededToMix;
}
