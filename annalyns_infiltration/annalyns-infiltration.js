function canExecuteFastAttack(knightIsAwake) {
  const canMakeFastAttack = !knightIsAwake;
  return canMakeFastAttack;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  const canSignal = prisonerIsAwake && !archerIsAwake;
  return canSignal;
}

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  const firstWayToFreePrisoner = petDogIsPresent && !archerIsAwake;
  const secondWayToFreePrisoner =
    !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake;

  return firstWayToFreePrisoner || secondWayToFreePrisoner;
}
