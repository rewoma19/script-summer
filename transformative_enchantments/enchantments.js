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

// Extract the middle two cards from a deck.
// Assumes a deck is always 10 cards.

function middleTwo(deck) {
  // Assuming it is a deck of 10 cards, the two middle cards will be of indices 4 and 5
  const middleCards = deck.slice(4, 6); // note that card of index 6 is excluded
  return middleCards;
}

// Test case
const deck2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(middleTwo(deck2));

// Moves the outside two cards to the middle.

function sandwichTrick(deck) {
  const firstCard = deck.shift();
  const lastCard = deck.pop();
  // We assume that the deck will have an even number of cards
  const middleIndex = deck.length / 2;
  deck.splice(middleIndex, 0, lastCard, firstCard);
  return deck;
}

// Test case
const deck3 = [1, 2, 3, 5, 6, 10];
console.log(sandwichTrick(deck3));

// Removes every card from the deck except 2s.
function twoIsSpecial(deck) {
  const deckOfTwos = deck.filter((card) => card === 2);
  return deckOfTwos;
}

// Test case
const deck4 = [1, 2, 3, 4, 10, 2];
console.log(twoIsSpecial(deck4));

// Return a perfectly ordered deck from lowest to highest.
function perfectlyOrdered(deck) {
  // (a, b) => a - b sorts numbers in ascending order
  // Without using a compare callback function in our sort array method, it will sort the items in it LEXICOGRAPHICALLY / ALPHABETICALLY.
  // This means that it would first convert the items to strings before sorting them, and this might not always be the best approach, when dealing with numbers
  const orderedDeck = deck.sort((a, b) => a - b);
  return orderedDeck;
}

// Test case
const deck5 = [10, 1, 5, 3, 2, 8, 7];
console.log(perfectlyOrdered(deck5));

// Reorders the deck so that the top card ends up at the bottom.

function reorder(deck) {
  const reorderedDeck = deck.reverse();
  return reorderedDeck;
}

// Test case
const lastDeckOfTheDay = [10, 1, 5, 3, 2];
console.log(reorder(lastDeckOfTheDay));
