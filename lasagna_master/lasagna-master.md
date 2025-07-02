# Instructions

In this exercise, you are going to write some more code related to preparing and cooking your brilliant lasagna from your favorite cookbook.

You have five tasks. The first one is related to the cooking itself, the other four are about the perfect preparation.

## Task 1

### Determine whether the lasagna is done

When you have lasagna in the oven, you want to know whether you can already take it out or not. To make sure the lasagna does not burn in the oven, you usually set a timer. But sometimes, you forget about that.

Write a function **cookingStatus** that accepts the remaining time on the timer in minutes as a parameter. The function has three possible results.

- If the timer shows **0**, it should return **'Lasagna is done.'**

- If the timer shows any other number, the result should be **'Not done, please wait.'**

- If the function is called without a timer value, the result should be **'You forgot to set the timer.'**

The timer will never show a value below 0.
