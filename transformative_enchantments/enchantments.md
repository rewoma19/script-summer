# Instructions

Elyse, magician-to-be, continues her training. She will be given a deck of cards and attempt to transform the deck. She will make certain cards appear, disapper, change their values, or completely rearrange themselves. To make things easier, she usually only starts with cards numbered 1 to 10, although some of the tricks may result in larger cards being created.

## Task 1

### Double every single card

Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10.

    const deck = [1, 2, 3, 4, 10];
    seeingDouble(deck);
    // => [2, 4, 6, 8, 20]

## Task 2

### Create multiple copies of every 3 found in the deck

Elyse wants to triplicate every 3 found in the deck. If a deck started with a single 3, after the trick, the deck would have three 3's in place of the original.

    const deck = [1, 3, 9, 3, 7];
    threeOfEachThree(deck);
    // => [1, 3, 3, 3, 9. 3, 3, 3, 7]

## Task 3

### Find two cards from the exact middle of the deck

Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.

    const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    middleTwo(deck);
    // => [5, 6]
