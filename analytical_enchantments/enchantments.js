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
