# Instructions

Your friend Linus is a train driver who drives cargo trains between cities. Although they are amazing at handling trains, they are not amazing at handling logistics or computers. They would like to enlist your programming help organizing train details and correcting mistakes in route data.

**NOTE**: To practice, use the rest or spread operator to solve each of the tasks below.

## Task 1

### Create a list of wagons

Your friend has been keeping track of each wagon identifier (ID), but they are never sure how many wagons the system is going to have to process at any given time. It would be much easier for the rest of the logistics program to have this data packaged into a unified **array**.

Implement a function **getListOfWagons** that accepts an arbitrary number of wagon IDs which are the IDs of each wagon. Each ID will be a positive integer. The function should then return the given IDs as a single array.

    getListOfWagons(1, 7, 12, 3, 14, 8, 5);
    // => [1, 7, 12, 3, 14, 8, 5]
