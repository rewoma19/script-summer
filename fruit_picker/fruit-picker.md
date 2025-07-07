# Instructions

You are creating a new online portal for your patrons to order their fruit fresh from the grocer. The grocer has an API that you can use to see if they have the inventory desired by your customers. You need to create a small library of functions for interacting with the grocer's API.

## Task 1

### Notify your customer when their order was successful

The portal should notify your customer if their order was successful. Define the **onSuccess** callback function that will be called if the order was successful due to the grocer having enough fruit in stock. This function should invoke the imported **notify** function, passing **{ message: 'SUCCESS' }** to let your customer know that their order was successful.

## Task 2

### Notify your customer when their order was unsuccessful

The portal should notify your customer if their order was unsuccessful. Define the **onError** callback function that will be called if the order was unsuccessful because the grocer does not have the fruit in stock or there was an error. This function should invoke the imported **nofify** function, passing **{ message: 'ERROR' }** to let your customer know that their order was unsuccessful.
