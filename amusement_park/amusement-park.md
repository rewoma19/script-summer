# Instructions

It is your job to provide and maintain parts of the IT system of an amusement park. In particular, you are responsible for the program that manages visitors and tickets.

First, you will create a new visitor in the system. Then you will provide a function for revoking a ticket. In tasks 3 and 4, you will work on the ticket tracking system that helps to prevent forgery. Lastly, you will adapt the system to new legal requirements.

## Task 1

### Create a new visitor

When visitors come to the amusement park for the first time, they need to register by entering their name and age in a terminal and agreeing to the terms and conditions. Of course, they also need to buy a ticket. Each ticket has an identifier like **H32AZ123**.

Write a function **createVisitor** that accepts three arguments.

- The name of the visitor.
- The age of the visitor.
- The identifier of the ticket that the visitor bought.

The function should return an object that holds this information. The keys in the object should be called **name**, **age**, and **ticketId**.

## Task 2

### Revoke the ticket

When people leave the amusement park, their ticket gets revoked. If they come back, they need to buy a new one. To save regular visitors some time, they only need to register once and the visitor information will be kept for subsequent visits.

That means when a visitor leaves the park, only their ticket should be invalidated but the rest of the visitor object should stay the same.

Implement the function **revokeTicket** that accepts a visitor object, sets the ticket identifier to **null** and returns the object afterwards.

## Task 3

### Determine the ticket status

To prevent forgery, the ticket identifiers are unique. Once a ticket is printed, its identifier is added as a key in an object in the system so it can be tracked.

Before the ticket is sold to a visitor, it is stored with the value **null** in the ticket tracking object. When it is sold to a visitor, the visitor's name is assigned as a value. When employees have doubts about the validity of a ticket, they need to check the status of the ticket in the system.

Implement a function **ticketStatus** that accepts a tracking object and a ticket identifier as arguments. It should return one of the following results.

- **'unknown ticket id'** if the identifier was not found in the tracking object

- **'not sold'** in case the ticket was printed but not sold

- **'sold to {name}'** where **{name}** is the name of the visitor if the ticket was sold

## Task 4

### Improve the ticket status response

After a while, you get feedback from the employees that they want the ticket status to be easier to understand at the first glance. They only want to see either the name of the visitor or that the ticket is invalid.

Write a function **simpleTicketStatus** that accepts the same arguments as **ticketStatus** in task 3. This function only returns one of two different results.

- the name of the visitor if the ticket was sold

- **'invalid ticket !!!'** if the ticket was not sold yet or the identifier was not found in the tracking object
