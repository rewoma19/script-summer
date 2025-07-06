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

// Switch the position of the two cards.
function swapTwoCards(deck) {
  let [firstCard, secondCard] = deck;
  deck = [secondCard, firstCard];
  return deck;
}

// Test cases
const deck3 = [10, 7];
console.log(swapTwoCards(deck3));

// Rotate (shift) the position of the three cards (by one place)
function shiftThreeCardsAround(deck) {
  let [cardOne, cardTwo, cardThree] = deck;
  deck = [cardTwo, cardThree, cardOne];
  return deck;
}

const deck4 = [2, 6, 10];
console.log(shiftThreeCardsAround(deck4));
