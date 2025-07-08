// Determine how many cards of a certain type there are in the deck
function cardTypeCheck(stack, card) {
  // Using the forEach() array method, for each card in the stack that is of the same type as a particular card, we increase the numOfCardsOfType variable
  let numOfCardsOfType = 0;

  stack.forEach((stackCard) => {
    if (stackCard === card) {
      numOfCardsOfType++;
    }
  });

  return numOfCardsOfType;
}

// Determine how many cards are odd or even
function determineOddEvenCards(stack, type) {
  let numOfEvenCards = 0;
  let numOfOddCards = 0;

  for (let card of stack) {
    if (card % 2 === 0) {
      numOfEvenCards++;
    }

    if (card % 2 !== 0) {
      numOfOddCards++;
    }
  }

  const numOfCardsToReturn = type === true ? numOfEvenCards : numOfOddCards;
  return numOfCardsToReturn;
}
