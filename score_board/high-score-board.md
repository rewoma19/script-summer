# Instructions

In this exercise, you are implementing a way to keep track of the high scores for the most popular game in your local arcade hall.
You have 6 functions to implement, mostly related to manipulating an object that holds high scores.

## Task 1

### Create a new high score board

Create a function **createScoreBoard** that creates an object that serves as a high score board. The keys of this object will be the names of the players, the values will be their scores. For testing purposes, you want to directly include on enttry in the object.
This initial entry should consist of **The Best Ever** as player name and **1000000** as score.

## Task 2

### Add players to a score board

To add a player to the high score board, define the function **addPlayer**. It accepts 3 parameters:

- The first parameter is an existing score board object.
- The second parameter is the name of a player as a string.
- The third parameter is the score as a number.

The function returns the same score board object that was passed in after adding the new player.

## Task 3

### Remove players from a score board

If players violate the rules of the arcade hall, they are manually removed from the high score board. Define **removePlayer** which takes 2 parameters:

- The first parameter is an existing score board object.
- The second parameter is the name of the player as a string.

This function should remove the entry for the given player from the board and return the board afterwards. If the player was not on the board in the first place, nothing should happen to the board. It should be returned as is.
