// Double every card in the deck.

function seeingDouble(deck) {
  // Using the .map() array method, we loop through every card in the deck array and transform each of their values; multiplying them by 2, in order to double them.
  const doubledDeck = deck.map((card) => card * 2);
  return doubledDeck;
}
