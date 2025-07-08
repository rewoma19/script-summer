# Instructions

Elyse, magician-to-be, continues her training. She will be given several stacks of cards that she needs to perform her tricks. To make things a bit easier, she only uses the cards 1 to 10.

In this exercise, use built-in methods to analyse the contents of an array.

## Task 1

### Find the position of a card

Elyse wants to know the position (index) of a card in the stack.

    const card = 2;
    getCardPosition([9, 7, 3, 2], card);
    // => 3

## Task 2

### Determine if a card is present

Elyse wants to determine if a card is present in the stack -- in other words, if the stack contains a specific **number**.

    const card = 3;
    doesStackIncludeCard([2, 3, 4, 5], card);
    // => true

## Task 3

### Determine if each card is even

Elyse wants to know if every card is even -- in other words, if each number in the stack is an even **number**.

    isEachCardEven([2, 4, 6, 7]);
    // => false

## Task 4

### Check if the stack contains an odd-value card

Elyse wants to know if there is an odd number in the stack.

    doesStackIncludeOddCard([3, 2, 6, 4, 8]);
    // => true
