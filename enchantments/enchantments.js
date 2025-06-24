function getItem(cards, position) {
  const pickedCard = cards[position];
  return pickedCard;
}

function setItem(cards, postion, replacementCard) {
  cards[postion] = replacementCard;
  return cards;
}

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}
