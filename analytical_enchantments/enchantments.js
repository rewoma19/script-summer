// Get the position (index) of the card in the given stack

function getCardPosition(stack, card) {
  const cardPosition = stack.indexOf(card);
  return cardPosition;
}

// Determine if the stack contains the card
function doesStackIncludeCard(stack, card) {
  const isCardInStack = stack.includes(card);
  return isCardInStack;
}

// Determine if each card is even
function isEachCardEven(stack) {
  // For a card to be even, it should have a remainder of 0 after being divided by 2
  // We check if this is so, by using the modulus operator: %
  const areAllCardsEven = stack.every((card) => card % 2 === 0);
  return areAllCardsEven;
}

// Check if stack contains odd-value card
function doesStackIncludeOddCard(stack) {
  // Using the .some() array method, we check if ANY of the cards in the stack is not perfectly divisible by 2
  const isOddCardInStack = stack.some((card) => card % 2 !== 0);
  return isOddCardInStack;
}
