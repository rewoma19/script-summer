# Instructions

In this exercise, you will be writing code to help a freelancer communicate with their clients about the prices of certain projects. You will write a few utility functions to quickly calculate the costs for the clients.

**Note**: The **ratePerHour** variable and the **dayRate** function are related to money. The units of measurement are money for a unit of time: hours and days respectively.

## Task 1

### Calculate the day rate given an hourly rate

A client contacts the freelancer to enquire about their rates. The freelancer explains that they **work 8 hours a day**. However, the freelancer knows only their hourly rates for the project. Help them estimate a day rate given an hourly rate.

## Task 2

### Calculate the number of workdays given a fixed budget

Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted. The result must be **rounded down** to the nearest whole number.

## Task 3

### Calculate the discounted rate for large projects

Often, the freelancer's clients hire them for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Your excellent work-life balance means that you only work 22 days in each calendar month, so **every month has 22 billable days**. Help them estimate their cost for such projects, given an hourly rate, the number of billable days the project contains, and a monthly discount rate. The discount is always passed as a number, where **42%** becomes **0.42**. The result must be **rounded up** to the nearest whole number.
