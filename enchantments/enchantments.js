function getItem(cards, position) {
  const pickedCard = cards[position];
  return pickedCard;
}

function setItem(cards, postion, replacementCard) {
  cards[postion] = replacementCard;
  return cards;
}
