// Get the first card in the given deck.
function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}

// Test cases
const deck = [5, 9, 7, 1, 8];
console.log(getFirstCard(deck));

// Get the second card in the given deck.
function getSecondCard(deck) {
  const [_, secondCard] = deck;
  return secondCard;
}

// Test cases
const deck2 = [3, 2, 19, 6, 7];
console.log(getSecondCard(deck2));
