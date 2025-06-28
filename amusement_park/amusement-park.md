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
