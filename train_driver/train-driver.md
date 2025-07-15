# Instructions

Your friend Linus is a train driver who drives cargo trains between cities. Although they are amazing at handling trains, they are not amazing at handling logistics or computers. They would like to enlist your programming help organizing train details and correcting mistakes in route data.

**NOTE**: To practice, use the rest or spread operator to solve each of the tasks below.

## Task 1

### Create a list of wagons

Your friend has been keeping track of each wagon identifier (ID), but they are never sure how many wagons the system is going to have to process at any given time. It would be much easier for the rest of the logistics program to have this data packaged into a unified **array**.

Implement a function **getListOfWagons** that accepts an arbitrary number of wagon IDs which are the IDs of each wagon. Each ID will be a positive integer. The function should then return the given IDs as a single array.

    getListOfWagons(1, 7, 12, 3, 14, 8, 5);
    // => [1, 7, 12, 3, 14, 8, 5]

## Task 2

### Move the first two elements to the end of the array

At this point, you are starting to get a feel for the data and how it's used in the logistics program. The ID system always assigns the locomotive an ID of **1**, with the remainder of the wagons in the train assigned a randomly chosen ID greater than **1**.

Your friend had to connect two new wagons to the train and forgot to update the system! Now, the first two wagons in the train **array** have to be moved to the end, or everything will be out of order.

Linus would be really grateful to you for fixing their mistakes.

Implement a function **fixListOfWagons** that accepts an array of the id of each wagon. It **return**s an **array** where the 2 first elements are repositioned to the end of the **array** so that the locomotive can be in the front.

## Task 3

### Add missing values

Uh-oh. some wagons seem to have gone missing.

Fortunately, your friend just found another **array** which appears to contain the missing wagon IDs, and would like you to add them into the main wagon ID **array**. All they can remember is that the missing values should be placed directly after the designated locomotive.

Given this new information, write a function called **\*correctListOfWagons** that takes two arrays which have the IDs of each wagon as the arguments. The wagon IDs of the second **array** should be added into the first **array** directly after the locomotive (ID 1).

    eachWagonsID = [1, 5, 20, 7, 4, 8];
    missingWagons = [3, 17, 6, 15];
    correctListOfWagons(eachWagonsID, missingWagons);
    // => [1, 3, 17, 6, 15, 5, 20, 7, 4, 8]

## Task 4

### Extend routing information

Now that all the wagon data is correct, your friend would like you to update the systems routing information. Initial routing information has been constructed as an **object**, and your friend would like you to update it with the additions provided. Every route requires slightly different information, so you friend would really prefer a generic solution.

Implement a function **extendRouteInformation** that accepts two **objects**. The first **object** contains which cities the train route moves between.

The second **object** contains other routing details such as train speed or length. The function should return a consolidated **object** with all routing information.

**NOTE**: The variable **moreRouteInformation** can contain different properties.

    route = { from: 'Berlin', to: 'Hamburg' };
    moreRouteInformation = { length: '100', speed: '50' };
    extendRouteInformation(route, moreRouteInformation);
    // => {from: "Berlin", to: "Hamburg", length: "100", speed: "50"}
