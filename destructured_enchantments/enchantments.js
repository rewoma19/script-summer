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

// Test cases
const deck4 = [2, 6, 10];
console.log(shiftThreeCardsAround(deck4));

// Grab the chosen pile from the available piles
function pickNamedPile(piles) {
  // making use of object destructuring
  const { chosen, disregarded } = piles;
  return chosen;
}

// Test cases
const deck5 = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];

console.log(pickNamedPile({ chosen, disregarded }));

// Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
function swapNamedPile(piles) {
  let { chosen, disregarded } = piles;
  [chosen, disregarded] = [disregarded, chosen];
  return { chosen, disregarded };
}
