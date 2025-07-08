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
