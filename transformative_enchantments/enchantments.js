// Double every card in the deck.

function seeingDouble(deck) {
  // Using the .map() array method, we loop through every card in the deck array and transform each of their values; multiplying them by 2, in order to double them.
  const doubledDeck = deck.map((card) => card * 2);
  return doubledDeck;
}

// Create triplicates of every 3 found in the deck.
function threeOfEachThree(deck) {
  // loop over each card in the deck
  for (let i = 0; i < deck.length; i++) {
    // check if the current card in the iteration has a value of 3
    if (deck[i] === 3) {
      // if so, at the index/position after that of the card, add 2 cards with values of 3 in front
      deck.splice(i + 1, 0, 3, 3);
      // skip over the two added cards with values of 3
      i += 2;
    }
  }

  return deck;
}

// Test case
const deck = [1, 3, 9, 3, 7];
console.log(threeOfEachThree(deck));
