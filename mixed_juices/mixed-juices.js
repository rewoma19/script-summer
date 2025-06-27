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

function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let numOfLimesToCut = 0;
  let i = 0;

  while (wedges < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case "small":
        wedges += 6;
        break;
      case "medium":
        wedges += 8;
        break;
      case "large":
        wedges += 10;
        break;
      default:
        return;
    }

    numOfLimesToCut++;
    i++;
  }

  return limesToCut;
}
