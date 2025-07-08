# Instructions

You are creating a new online portal for your patrons to order their fruit fresh from the grocer. The grocer has an API that you can use to see if they have the inventory desired by your customers. You need to create a small library of functions for interacting with the grocer's API.

## Task 1

### Notify your customer when their order was successful

The portal should notify your customer if their order was successful. Define the **onSuccess** callback function that will be called if the order was successful due to the grocer having enough fruit in stock. This function should invoke the imported **notify** function, passing **{ message: 'SUCCESS' }** to let your customer know that their order was successful.

## Task 2

### Notify your customer when their order was unsuccessful

The portal should notify your customer if their order was unsuccessful. Define the **onError** callback function that will be called if the order was unsuccessful because the grocer does not have the fruit in stock or there was an error. This function should invoke the imported **nofify** function, passing **{ message: 'ERROR' }** to let your customer know that their order was unsuccessful.

## Task 3

### Create an API wrapper to wrap the grocer's API order function

Fruit orders are placed through the grocer's API via the provided **order** function. This function receives three arguments: a query, containing the **variety** and **quantity** of fruit requested, a callback function to be invoked when the order is successful, and a callback function to be invoked when the order encounters an error.

You want to insulate your codebase from potential external changes and decide to wrap the call to the **order** function inside a new function named **orderFromGrocer**. Implement the **orderFromGrocer** function that attempts to place an order via a call to the grocer's API **order** function, making sure to forward the arguments passed into **orderFromGrocer** to the API call.

The query takes the form of an object.

    const query = {
        variety: string,
        quantity: number,
    };
